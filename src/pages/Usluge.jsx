import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import {
  FaRecycle,
  FaCartPlus,
  FaTruck,
  FaBoxOpen,
  FaPrescriptionBottle,
  FaRegCircle,
  FaArrowCircleDown,
} from "react-icons/fa";
import boxesofboxes from "../assets/images/boxes_boxes.jpg";
import { MdLocalDrink } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
import { PiBeerBottleBold } from "react-icons/pi";
import { GiRibbon, GiFilmSpool } from "react-icons/gi";
import TypewriterComponent from "typewriter-effect";
import Faq from "../components/Faq";

const materials = [
  { name: "Karton", icon: <FaBoxOpen className="text-3xl text-gray-800" /> },
  {
    name: "Plastiku",
    icon: <MdLocalDrink className="text-3xl text-gray-800" />,
  },
  {
    name: "Papir",
    icon: <RiFilePaperLine className="text-3xl text-gray-800" />,
  },
  {
    name: "Staklene ambalaže",
    icon: <PiBeerBottleBold className="text-3xl text-gray-800" />,
  },
  {
    name: "Plastične flaše",
    icon: <FaPrescriptionBottle className="text-3xl text-gray-800" />,
  },
  {
    name: "Streč foliju",
    icon: <GiRibbon className="text-3xl text-gray-800" />,
  },
  {
    name: "Polietilensku foliju",
    icon: <GiFilmSpool className="text-3xl text-gray-800" />,
  },
  { name: "Najlon", icon: <FaRegCircle className="text-3xl text-gray-800" /> },
];

const Usluge = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = boxesofboxes;

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
          Usluge
        </h2>

        <div className="relative mb-12 rounded-lg border border-gray-300 p-4 shadow-lg">
          <div className="relative">
            <img
              src={boxesofboxes}
              alt="Kartonske kutije"
              className="h-[300px] w-full object-cover shadow-md md:h-[400px]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
              <h2 className="flex flex-col items-center whitespace-nowrap text-center text-2xl text-white md:flex-row md:text-3xl">
                <span>Prodaja kutija za </span>
                <span className="ml-2">
                  <TypewriterComponent
                    options={{
                      strings: ["maline.", "kupine.", "višnje.", "borovnice."],
                      autoStart: true,
                      loop: true,
                      delay: 1,
                      deleteSpeed: 1,
                    }}
                  />
                </span>
              </h2>
            </div>
          </div>
          <div className="relative mt-12">
            <div className="mb-6 flex items-center">
              <FaCartPlus className="mr-4 text-3xl text-gray-800" />
              <h3 className="text-2xl text-gray-800">Prodaja</h3>
            </div>
            <p className="mb-4">
              Nudimo visokokvalitetne polovne kutije za prihvat različitih vrsta
              voća. Naša ponuda uključuje kutije za maline, kupine, višnje,
              borovnice i druge vrste voća. Svi naši proizvodi su pažljivo
              pregledani i pripremljeni kako bi zadovoljili vaše potrebe.
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
            Otkup sekundarnih sirovina, Požega
          </h2>
          <FaArrowCircleDown className="text-center text-3xl" />
        </div>
        <div className="mb-10 rounded-lg border border-gray-300 p-4 shadow-lg">
          <div className="mb-6 flex items-center">
            <FaRecycle className="mr-4 text-3xl text-gray-800" />
            <h3 className="text-2xl text-gray-800">Otkup</h3>
          </div>
          <p className="mb-4">
            Naša firma se bavi otkupom različitih vrsta sekundarnih materijala
            širom Srbije. Otkupljujemo:
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <div
                key={material.name}
                className="hover: flex transform items-center space-x-4 rounded-lg border border-gray-300 bg-white p-4 shadow-md transition duration-300 ease-in-out hover:scale-105"
              >
                {material.icon}
                <p className="text-lg text-gray-800">{material.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-2">
            Naš cilj je da doprinosimo očuvanju životne sredine reciklažom ovih
            materijala.
          </p>
          <p className="mb-2">
            Ako imate materijale koje želite da prodate, slobodno nas
            kontaktirajte. Nudimo konkurentne cene i brzu obradu.
          </p>
          <p className="mb-12">
            Takođe, obezbeđujemo preuzimanje materijala sa vaše lokacije širom
            Srbije, čime štitimo vaš prostor i olakšavamo proces reciklaže.
          </p>
          <hr className="mt-5 h-1 border-t-2 border-transparent bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] md:mt-10" />
          <div className="mt-6 flex items-center justify-center">
            <FaTruck className="mr-4 text-3xl text-gray-800" />
            <p>Brza i efikasna dostava širom Srbije.</p>
          </div>
          <hr className="mt-5 h-1 border-t-2 border-transparent bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE]" />
        </div>

        <Faq />
      </section>
    </main>
  );
};

export default Usluge;
