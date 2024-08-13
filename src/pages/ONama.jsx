import { FaEye, FaUsers, FaHandshake } from "react-icons/fa";
import planeta from "../assets/images/planet_earth.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function ONama() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <main>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          O Nama
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          TP Maja Mićić je prepoznatljiva firma koja se ponosi dugom tradicijom
          i značajnim iskustvom u oblasti reciklaže sekundarnih sirovina.
          Osnovana 2002. godine, osnivač: Jovan Mićić. Naš cilj je bio da
          stvorimo kompaniju koja ne samo da odgovara na potrebe tržišta, već i
          postavlja standarde u industriji reciklaže. Kroz godine posvećenosti i
          stalnog unapređenja, TP Maja Mićić je izgradila reputaciju lidera u
          pružanju inovativnih i efikasnih rešenja za upravljanje sekundarnim
          sirovinama. Naša filozofija je usmerena na očuvanje životne sredine i
          održivost, a naše metode su dizajnirane da minimiziraju uticaj na
          prirodu dok istovremeno maksimizujemo efikasnost u procesu reciklaže.
        </p>
        <hr className="border-t-2 border-transparent bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] h-1" />
        <div className="flex flex-col md:flex-row gap-6 mb-12 md:mt-16">
          <div className="flex-1">
            <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="flex gap-2 items-center justify-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Vizija i Misija
                </h2>
                <FaEye className="text-2xl text-gray-800" />
              </div>
              <p className="text-lg leading-relaxed text-center">
                Naša vizija je da postanemo vodeći inovatori u industriji
                reciklaže, ne samo u našem regionu već i globalno. Misija nam je
                da pružimo rešenja koja ne samo da zadovoljavaju potrebe
                tržišta, već i unapređuju standarde očuvanja životne sredine i
                održivosti.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="flex gap-2 items-center justify-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Naš Tim</h2>
                <FaUsers className="text-2xl text-gray-800" />
              </div>
              <p className="text-lg leading-relaxed text-center">
                Naš tim se sastoji od stručnjaka sa bogatim iskustvom u oblasti
                reciklaže i upravljanja otpadom. Njihova posvećenost i stručnost
                ključni su za naš uspeh. Svaki član tima doprinosi svojim
                ekspertizom i posvećenošću kako bismo pružili najbolja moguća
                rešenja za naše klijente.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[550px] overflow-hidden rounded-xl mb-16">
          <img
            src={planeta}
            alt="Planeta zemlja"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Očuvajmo našu planetu za buduće generacije!
            </h2>
          </div>
        </div>

        <div className="flex items-center mb-6 gap-2 justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Partneri
          </h2>
          <FaHandshake className="text-2xl text-gray-800" />
        </div>
        <p className="text-lg mb-4 leading-relaxed">
          Tokom godina, sarađivali smo sa mnogim važnim partnerima i klijentima
          koji su prepoznali našu stručnost i kvalitet. Naši projekti uključuju
          uspešnu saradnju sa velikim industrijskim firmama i lokalnim
          zajednicama, što dodatno potvrđuje našu reputaciju kao pouzdanog
          partnera u industriji reciklaže.
        </p>
        <div className="flex items-center justify-center">
          <div
            ref={ref}
            className="p-4 rounded-full shadow-sm max-w-md w-full bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE]"
          >
            <p className="text-lg text-center">
              {inView && (
                <CountUp
                  className="text-4xl font-bold text-gray-700"
                  start={0}
                  end={50}
                  duration={4}
                  suffix="+"
                />
              )}{" "}
              <br />
              Partnera se oslonilo na nas i uživa u vrhunskim uslugama koje
              pružamo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ONama;
