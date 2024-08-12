import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Šta je reciklaža sekundarnih sirovina?",
      answer:
        "Reciklaža sekundarnih sirovina uključuje proces obrade materijala koji bi inače završio na deponijama. To obuhvata materijale poput kartona, plastike, papira, metala i stakla, koji se obrađuju i ponovo koriste u proizvodnji novih proizvoda.",
    },
    {
      question: "Koje vrste materijala prihvatate?",
      answer:
        "Prihvatamo širok spektar materijala, uključujući karton, plastiku, papir, metal i staklo. Naša svrha je da produžimo životni vek ovih materijala i smanjimo njihov uticaj na životnu sredinu.",
    },
    {
      question: "Kako mogu da stupim u kontakt sa vama?",
      answer:
        "Možete nas kontaktirati putem naše kontakt forme na sajtu, ili nam se obratiti direktno putem e-maila ili telefona. Detalje pronađite na stranici Kontakt.",
    },
    {
      question: "Da li nudite procenu materijala?",
      answer:
        "Da, nudimo besplatnu procenu materijala. Kontaktirajte nas za više informacija i dogovorite sastanak sa našim stručnjacima.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Često Postavljana Pitanja
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer relative"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-700 flex-1">
                  {faq.question}
                </h3>
                <div className="relative w-6 h-6 flex-shrink-0">
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      openIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <FaPlus className="text-gray-600" />
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      openIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <FaMinus className="text-gray-600" />
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
