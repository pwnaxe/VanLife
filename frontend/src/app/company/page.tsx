const people = [
  {
    name: "Maciej Kamiński",
    role: "Co-Founder / CEO",
    imageUrl: "https://i.imgur.com/LIpWU5v.png",
    description:
      "Maciej jest odpowiedzialny za rozwój produktu i marketing. Wcześniej pracował w branży IT, gdzie zdobył doświadczenie w zarządzaniu projektami i marketingu. W wolnych chwilach lubi podróżować i jeździć na rowerze.",
  },
  {
    name: "Paweł Gołębiewski",
    role: "Co-Founder / CEO",
    imageUrl: "https://i.imgur.com/JARzkg3.png",
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
            Nasz zespół łączy pasję do motoryzacji z profesjonalizmem. Jesteśmy
            tutaj, aby pomóc Ci przekształcić Twój bus w idealny kamper.
          </p>
        </div>
        <div className="mt-12">
          {people.map((person, index) => (
            <div
              key={person.name}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center py-10`}
            >
              <img
                className="flex-shrink-0 h-148 w-72 object-cover rounded-lg shadow-xl"
                src={person.imageUrl}
                alt={person.name}
              />
              <div
                className={`ml-16 mr-16 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                } max-w-md`}
              >
                <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-lg font-semibold leading-6 text-indigo-600">
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
