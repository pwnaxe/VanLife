export default function Footer() {
  return (
    <>
      <footer class="bg-black text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="flex flex-wrap justify-between">
            <div class="mb-6 lg:mb-0">
              <a href="#" class="flex items-center">
                <img src="/logo.svg" alt="Logo" class="h-8 w-auto mr-3" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Your Company
                </span>
              </a>
              <p class="mt-2 text-sm text-gray-300">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div class="flex mt-4 space-x-6">
                <a href="#" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Facebook</span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                  Solutions
                </h2>
                <ul class="text-gray-300 space-y-4">
                  <li>
                    <a href="#" class="hover:underline">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                  Support
                </h2>
                <ul class="text-gray-300 space-y-4">
                  <li>
                    <a href="#" class="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-10 pt-10 text-sm">
            <p class="text-gray-400">
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
