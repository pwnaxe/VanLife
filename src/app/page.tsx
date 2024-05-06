import Testimonial from "@/components/testimonial";

export default function Home(): any {
  return (
    <>
      <main>
        <div className="mx-auto max-w-2xl pt-32 sm:pt-38">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Współpraca biznesowa.{" "}
              <a href="/b2b" className="font-semibold text-amber-500">
                <span className="absolute inset-0" aria-hidden="true" />
                Dowiedz się więcej <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Osiągnij swoje cele z VanLife
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jeśli łączy Cię pasja do podróżowania z miłością do designu, to
              VanLife jest dla Ciebie. Znajdziesz u nas wszystko, czego
              potrzebujesz, aby stworzyć swój wymarzony dom na kółkach.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/parts"
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                Konkrety - co i za ile?
              </a>
              <a
                href="/company"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Poznaj nas bliżej <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <Testimonial />
      </main>
    </>
  );
}
