"use client";
import { getBlogs } from "@/utilities/loader";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image: string | null;
  imagepost: string | null;
  role: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    async function fetchData() {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wiadomości ze świata podróży
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Poznaj najnowsze trendy i porady dotyczące wyposażenia busów na
            kampery.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.date} className="text-gray-500">
                  {new Date(blog.date).toLocaleDateString()}
                </time>
                <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {blog.category}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link
                    href={`/posts/${blog.id}`}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
                    {blog.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {blog.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={blog.image}
                  alt={`Image of ${blog.author}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      {blog.author}
                    </a>
                  </p>
                  <p className="text-gray-600">{blog.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
