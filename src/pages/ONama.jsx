import { useState, useEffect } from "react";
import { FaEye, FaUsers, FaHandshake } from "react-icons/fa";
import planeta from "../assets/images/planet_earth.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Preloader from "../components/Preloader";

function ONama() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = planeta;

    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <main>
      <section>
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          O Nama
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-gray-700">
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
        <hr className="h-1 border-t-2 border-transparent bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE]" />
        <div className="mb-12 flex flex-col gap-6 md:mt-16 md:flex-row">
          <div className="flex-1">
            <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Vizija i Misija
                </h2>
                <FaEye className="text-2xl text-gray-800" />
              </div>
              <p className="text-center text-lg leading-relaxed">
                Naša vizija je da postanemo vodeći inovatori u industriji
                reciklaže, ne samo u našem regionu već i globalno. Misija nam je
                da pružimo rešenja koja ne samo da zadovoljavaju potrebe
                tržišta, već i unapređuju standarde očuvanja životne sredine i
                održivosti.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800">Naš Tim</h2>
                <FaUsers className="text-2xl text-gray-800" />
              </div>
              <p className="text-center text-lg leading-relaxed">
                Naš tim se sastoji od stručnjaka sa bogatim iskustvom u oblasti
                reciklaže i upravljanja otpadom. Njihova posvećenost i stručnost
                ključni su za naš uspeh. Svaki član tima doprinosi svojim
                ekspertizom i posvećenošću kako bismo pružili najbolja moguća
                rešenja za naše klijente.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mb-16 h-[550px] w-full overflow-hidden rounded-xl">
          <img
            src={planeta}
            alt="Planeta zemlja"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Očuvajmo našu planetu za buduće generacije!
            </h2>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-center gap-2">
          <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
            Partneri
          </h2>
          <FaHandshake className="text-2xl text-gray-800" />
        </div>
        <p className="mb-4 text-lg leading-relaxed">
          Tokom godina, sarađivali smo sa mnogim važnim partnerima i klijentima
          koji su prepoznali našu stručnost i kvalitet. Naši projekti uključuju
          uspešnu saradnju sa velikim industrijskim firmama i lokalnim
          zajednicama, što dodatno potvrđuje našu reputaciju kao pouzdanog
          partnera u industriji reciklaže.
        </p>
        <div className="flex items-center justify-center">
          <div
            ref={ref}
            className="w-full max-w-md rounded-full bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] p-4 shadow-sm"
          >
            <p className="text-center text-lg">
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
