import Image from "next/image";

const people = [
  {
    name: "Maciej Kamiński",
    role: "Co-Founder / CEO",
    imageUrl: "http://www.tanosmotorsport.pl/assets/tanos-049.jpg",
    description:
      "Maciej jest odpowiedzialny za rozwój produktu i marketing. Wcześniej pracował w branży IT, gdzie zdobył doświadczenie w zarządzaniu projektami i marketingu. W wolnych chwilach lubi podróżować i jeździć na rowerze.",
  },
  {
    name: "Paweł Gołębiewski",
    role: "Co-Founder / CEO",
    imageUrl: "http://www.tanosmotorsport.pl/assets/tanos-037.jpg",
    description:
      "Paweł jest odpowiedzialny za rozwój produktu i marketing. Wcześniej pracował w branży IT, gdzie zdobył doświadczenie w zarządzaniu projektami i marketingu. W wolnych chwilach lubi podróżować i jeździć na rowerze.",
  },
];

export default function TeamShow() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Poznaj nas bliżej
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            W Tanos Motorsport zajmujemy się dostarczaniem i montowaniem najwyższej jakości produktów, aby poprawić zarówno osiągi jak i niezawodność w sportach motorowych i na drogach. Ponadto podejmujemy się kompleksowych modyfikacji aut. Każdego klienta traktujemy indywidualnie, a każdy projekt wyceniamy opierając się na oczekiwaniach klienta, wybranych lub sugerowanych częściach i stopniu modyfikacji.
          </p>            
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Zapraszamy na naszą stronę na Facebooku, gdzie możecie Państwo śledzić nasze poczynania na bieżąco. Korzystając z najnowszych technologii maszyn CNC i skanowania 3D, budujemy samochody spełniając marzenia naszych klientów i rozbudowując nasz własny park maszynowy.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pracujemy i żyjemy według zasady “Sky is the limit”, wszystko możemy osiągnąć, zbudować i zrobić, wyobraźnia klienta jest jedynym naszym ograniczeniem.
          </p>
          <p className="mt-6 text-2xl font-bold text-amber-500 leading-8">
            Pozdrawiamy <br /><br /> Paweł Gołębiewski i Maciej Kamiński
          </p>
        </div>
        <div className="mt-12">
          {people.map((person, index) => (
            <div
              key={person.name}
              className={`flex flex-col items-center sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } py-10`}
            >
              <Image
                className="flex-shrink-0 h-148 w-72 object-cover rounded-lg shadow-xl"
                src={person.imageUrl}
                alt={person.name}
                width={288}
                height={296}
              />
              <div
                className={`mt-6 text-center sm:text-left sm:mt-0 sm:ml-16 sm:mr-16 ${
                  index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                } max-w-md`}
              >
                <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-lg font-semibold leading-6 text-amber-500">
                  {person.role}
                </p>
                <p className="mt-4 text-base text-gray-500">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
