export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto w-44"
          src="/assets/nordic oasis logo.png"
          alt=""
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Zawsze marzyłem o podróżowaniu bez ograniczeń, a dzięki produktom
              z VanLife, moje marzenie stało się rzeczywistością. Ulepszenia,
              które wprowadziliśmy w mojej Californi, od solidnych uchwytów na
              koło zapasowe po praktyczne moduły kuchenne, zmieniły zwykły
              pojazd w prawdziwy dom na kółkach. Każdy element jest przemyślany
              i wykonany z niezwykłą starannością o detale. Teraz moje podróże
              są nie tylko komfortowe, ale też pełne stylu. W VanLife rozumieją
              nomadycznego ducha i potrzeby nowoczesnych podróżników."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="/assets/michkar.png"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                Michał Karpiński - CEO Nordic Oasis
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">
                zapalony podróżnik i miłośnik vanlife
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
