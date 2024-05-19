import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="mb-6 lg:mb-0 lg:col-span-1 flex flex-col items-center lg:items-start">
            <a href="#" className="flex items-center">
              <Image
                src="/assets/icon.png"
                alt="Logo"
                className="h-8 w-auto mr-3 bg-white rounded-full p-1"
                width={32}
                height={32}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                VanLife
              </span>
            </a>
            <p className="mt-2 text-md text-gray-300 text-center lg:text-left">
              Wyrusz w podróż z VanLife. Odkrywaj nowe miejsca, poznawaj nowych
              ludzi i ciesz się życiem na kółkach.
            </p>
            <div className="flex justify-center lg:justify-start mt-4 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaFacebook aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaInstagram aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaYoutube aria-hidden="true" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1"></div>
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              ODKRYWAJ
            </h2>
            <ul className="text-gray-300 space-y-4">
              <li>
                <a href="blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/parts" className="hover:underline">
                  Produkty
                </a>
              </li>
              <li>
                <a href="/company" className="hover:underline">
                  O firmie
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-10 text-sm text-center">
          <p className="text-gray-400">
            &copy; 2024 VanLife, Tanosmotorsport sp. z o.o. <a href='/policy'>All rights reserved.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
