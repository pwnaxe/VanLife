"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getBlog } from "@/utilities/loader";

interface Blog {
  id: string;
  title: string;
  author: string;
  img?: string;
  text?: string; // Założenie, że pole 'text' zawiera treść bloga
}

interface ArticleProps {
  params: {
    id: string;
  };
}

export default function Article({ params }: ArticleProps) {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await getBlog(params.id);
        setBlog(blogData as Blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchData();
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="col-span-2 col-start-1 row-start-1 mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 px-8">
          <div className="pr-4">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-7 text-amber-500">
                {blog.title}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {blog.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Autor: {blog.author}
              </p>
            </div>
          </div>
        </div>
        {blog.img && (
          <div className="-ml-12 -mt-12 p-12 sticky top-4 col-start-2 row-span-2 row-start-1 overflow-hidden">
            <Image
              src={blog.img}
              alt={blog.title}
              width={480}
              height={320}
              className="max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              priority
            />
          </div>
        )}
        <div className="col-span-2 col-start-1 row-start-2 mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 px-8">
          <div className="pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>{blog.text}</p> {/* Wyświetlanie treści bloga */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
