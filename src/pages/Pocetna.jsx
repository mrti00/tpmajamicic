import TypewriterComponent from "typewriter-effect";
import boxes from "../assets/images/boxes.jpg";
import { BsStopwatch } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

function Pocetna() {
  return (
    <main>
      <section>
        <div className="relative w-full h-[calc(90vh-4rem)]  overflow-hidden md:rounded-full">
          <img
            src={boxes}
            alt="Kutije"
            className="absolute inset-0 w-full h-full object-cover "
          />

          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              TP Maja Mićić
            </h1>
            <h2 className="text-white text-xl md:text-2xl">
              <TypewriterComponent
                options={{
                  strings: [
                    "Vaš partner za reciklažu sekundarnih sirovina.",
                    "Započnite saradnju sa nama odmah!",
                    "Ekološki prihvatljiva rešenja za vaš biznis.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h2>
          </div>
        </div>
      </section>
      <section className="mt-16 ">
        <div className="text-center mx-auto px-4 mt-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Zašto izabrati nas?
          </h2>
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full md:w-1/3 px-4 md:mb-8 mb-5">
              <BsStopwatch className="w-full h-12 md:h-16 mb-5 text-gray-800" />

              <div className="bg-white p-6 rounded-lg shadow-lg mb-10 ">
                <h3 className="text-xl font-semibold mb-4">Brza procena</h3>
                <p>
                  Naša stručnost omogućava brzu i tačnu procenu sekundarnih
                  sirovina.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <GiMoneyStack className="w-full  h-12 md:h-16 mb-5 text-gray-800" />

              <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
                <h3 className="text-xl font-semibold mb-4">Najbolje cene</h3>
                <p>Pružamo konkurentne cene koje odgovaraju vašem budžetu.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <FaRecycle className="w-full h-12 md:h-16 mb-5 text-gray-800" />

              <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
                <h3 className=" text-xl font-semibold mb-4">
                  Ekološki prihvatljiv pristup
                </h3>

                <p>Naša metoda reciklaže doprinosi očuvanju životne sredine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800">Održiv Metod</h2>
        <p className="text-lg text-gray-700 mt-2 mb-10">
          Naša kompanija posvećena je održivosti i očuvanju životne sredine kroz
          sve aspekte naših procesa reciklaže. Verujemo da je naš doprinos
          očuvanju prirodnih resursa ključan za stvaranje čistije i zdravije
          budućnosti.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Naša praksa reciklaže obuhvata:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-10">
          <li className="mb-4">
            <strong>Reciklaža materijala:</strong> Reciklaža materijala koji bi
            inače završio na deponijama, uključujući karton, plastiku, papir,
            staklene ambalaže, plastične flaše, streč foliju, polietilensku
            foliju i najlon. Naš cilj je da produžimo životni vek ovih
            materijala i smanjimo njihov uticaj na okolinu.
          </li>
          <li className="mb-4">
            <strong>Ekološki prihvatljive metode:</strong> Koristimo ekološki
            prihvatljive metode u svim fazama obrade. Naša oprema i tehnologija
            su dizajnirani da minimiziraju emisiju štetnih materija i potrošnju
            energije, čime direktno doprinosimo smanjenju zagađenja.
          </li>
          <li className="mb-4">
            <strong>Stalno unapređenje:</strong> Stalno radimo na poboljšanju
            naših procesa kako bismo smanjili uticaj na životnu sredinu. Ulažemo
            u istraživanje i razvoj novih tehnologija koje nam pomažu da
            postignemo još bolje rezultate i pružimo efikasnije rešenja.
          </li>
        </ul>

        <p className="text-lg text-gray-700">
          Osim što smanjujemo količinu otpada i koristimo reciklirane
          materijale, naša kompanija se takođe zalaže za obrazovanje i podizanje
          svesti o važnosti reciklaže. Verujemo da je ključ uspeha u održivosti
          u pružanju informacija i motivaciji zajednice da se pridruži našim
          naporima.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Naša posvećenost očuvanju životne sredine nije samo deo našeg
          poslovanja, već je i deo našeg identiteta. Pozivamo vas da se
          pridružite našim naporima i zajedno radimo na očuvanju naše planete za
          buduće generacije.
        </p>
      </section>
      <hr className="border-t-2 border-transparent mt-5 md:mt-10 bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] h-1" />

      <section className="mt-10">
        <div>
          <div className="text-center mb-10 ">
            <div className="flex items-center justify-center gap-5 mb-5">
              <h2 className=" text-3xl md:text-4xl font-bold mb-4  text-gray-800">
                Naša misija
              </h2>
              <div>
                <GoRocket className=" text-[44px] md:text-[54px]  text-gray-800 mb-4 " />
              </div>
            </div>
            <p className="text-lg text-gray-600">
              Naša misija je da postanemo lideri u industriji reciklaže kroz
              inovativne i održive pristupe koji unapređuju kvalitet života i
              očuvanje planete. Posvećeni smo razvoju rešenja koja ne samo da
              optimizuju procese upravljanja sekundarnim sirovinama, već i
              promovišu odgovoran odnos prema resursima.
            </p>
          </div>
          <hr className="border-t-2 border-transparent mt-10 bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] h-1" />

          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-gray-700 mt-16">
              Održivost u Srži Našeg Poslovanja
            </h3>
            <p className="text-lg text-gray-600">
              Kroz efikasno upravljanje otpadom i napredne reciklažne
              tehnologije, težimo da stvorimo model koji kombinuje visoke
              standarde održivosti i komercijalnu uspešnost. Naša praksa je
              usmerena na minimalizaciju otpada i maksimizaciju ponovne upotrebe
              materijala, čime doprinosimo smanjenju opterećenja na prirodu.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">
              Inovacije za Bolju Budućnost
            </h3>
            <p className="text-lg text-gray-600">
              Ulažemo u istraživanje i razvoj kako bismo osigurali da naše
              metode reciklaže budu na čelnoj liniji industrijskih standarda.
              Naša tehnološka rešenja i inovacije omogućavaju nam da pružimo
              najkvalitetnije usluge, dok istovremeno radimo na smanjenju
              uticaja na životnu sredinu.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">
              Zajednička Odgovornost
            </h3>
            <p className="text-lg text-gray-600">
              Svesni smo da samo zajedničkim naporima možemo postići značajne
              promene. Stoga, aktivno sarađujemo sa zajednicom, organizacijama i
              partnerima kako bismo promovisali važne inicijative i obrazovali
              javnost o važnosti održivog upravljanja resursima.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Naša misija je da, kroz doslednu primenu naših principa i
              tehnologija, postavimo standarde u industriji reciklaže i
              inspiriramo druge da se pridruže našem putu ka održivoj
              budućnosti.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pocetna;
