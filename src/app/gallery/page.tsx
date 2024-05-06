"use client";

import { useEffect, useState } from "react";
import { getgalleries } from "@/utilities/loader";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

interface Gallery {
  id: string;
  title: string;
  image: string | null;
  slider: string[] | null;
}

export default function Gallery() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);

  useEffect(() => {
    async function fetchData() {
      const galleriesData = await getgalleries();
      setGalleries(galleriesData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Galeria
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-14">
          {galleries.map((gallery) => (
            <div key={gallery.id} className="group">
              {gallery.slider && gallery.slider.length > 0 ? (
                <Swiper
                  effect="cards"
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  {gallery.slider.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={slide}
                        alt={`Slide ${index}`}
                        layout="responsive"
                        width={300}
                        height={300}
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : gallery.image ? (
                <Image
                  src={gallery.image}
                  alt={gallery.title}
                  layout="responsive"
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="shadow-2xl rounded-lg"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <span>Brak obrazu</span>
                </div>
              )}
              <h3 className="mt-4 text-md text-gray-700 font-bold">
                {gallery.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
