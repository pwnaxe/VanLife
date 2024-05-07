import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function B2B() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-amber-500">
                Żyj po swojemu
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Współpraca biznesowa
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Jesteśmy firmą, która od lat zajmuje się produkcją i sprzedażą
                elementów wyposażenia do kamperów. Nasze produkty są nie tylko
                funkcjonalne, ale także stylowe. Współpracujemy z firmami, które
                cenią sobie jakość i design. Jeśli chcesz wyróżnić się na tle
                konkurencji, skontaktuj się z nami.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/assets/vanb2b.webp"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Poza tym wykonujemy też prace na zamówienie. Przykład? Bardzo
                proszę, jednym z naszych obecnych projektów dla klienta jest
                stworzenie oddanej kopii Forda GT z 2005 roku. Wszystkie
                elementy wyposażenia, od foteli po kierownicę, są tworzone
                ręcznie przez naszych specjalistów. Jeśli chcesz, możemy
                stworzyć coś wyjątkowego także dla Ciebie.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-amber-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Szybka Współpraca.
                    </strong>{" "}
                    Na nas nie trzeba czekać 6 miesięcy na odpowiedź. Jesteśmy
                    tu i teraz. Otwarci na współpracę i gotowi do działania.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-amber-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Doświadczenie.
                    </strong>{" "}
                    Wywodzimy się z branży motoryzacyjnej. Posiadamy wiedzę i
                    doświadczenie, które pozwala nam tworzyć produkty najwyższej
                    jakości.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-amber-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Styl i design.
                    </strong>{" "}
                    Nasze produkty są nie tylko funkcjonalne, ale także stylowe.
                    Każdy produkt jest starannie zaprojektowany i wykonany z
                    dbałością o detale.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Jeśli jesteś zainteresowany współpracą, skontaktuj się z nami.
                Chętnie odpowiemy na Twoje pytania i przedstawimy naszą ofertę.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Dlaczego warto współpracować z nami?
              </h2>
              <p className="mt-6">
                Pasja do towrzenie produktów motoryzacyjnych, zaangażowanie, a
                także nasze doświadczenie sprawiają, że jesteśmy idealnym
                partnerem dla firm, które cenią sobie czas, jakość i styl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
