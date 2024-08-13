import {
  FaRecycle,
  FaCartPlus,
  FaTruck,
  FaBoxOpen,
  FaPrescriptionBottle,
  FaRegCircle,
} from "react-icons/fa";
import boxesofboxes from "../assets/images/boxes_boxes.jpg";
import { MdLocalDrink } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
import { PiBeerBottleBold } from "react-icons/pi";
import { GiRibbon, GiFilmSpool } from "react-icons/gi";
import TypewriterComponent from "typewriter-effect";
import Faq from "../components/Faq";

const materials = [
  { name: "Karton", icon: <FaBoxOpen className="text-gray-800 text-3xl" /> },
  {
    name: "Plastiku",
    icon: <MdLocalDrink className="text-gray-800 text-3xl" />,
  },
  {
    name: "Papir",
    icon: <RiFilePaperLine className="text-gray-800 text-3xl" />,
  },
  {
    name: "Staklene ambalaže",
    icon: <PiBeerBottleBold className="text-gray-800 text-3xl" />,
  },
  {
    name: "Plastične flaše",
    icon: <FaPrescriptionBottle className="text-gray-800 text-3xl" />,
  },
  {
    name: "Streč foliju",
    icon: <GiRibbon className="text-gray-800 text-3xl" />,
  },
  {
    name: "Polietilensku foliju",
    icon: <GiFilmSpool className="text-gray-800 text-3xl" />,
  },
  { name: "Najlon", icon: <FaRegCircle className="text-gray-800 text-3xl" /> },
];

const Usluge = () => {
  return (
    <main>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Usluge
        </h2>

        <div className="relative border border-gray-300 p-4 rounded-lg shadow-lg mb-12">
          <div className="relative">
            <img
              src={boxesofboxes}
              alt="Kartonske kutije"
              className="w-full h-[300px] md:h-[400px] object-cover shadow-md"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-white text-center flex flex-col md:flex-row items-center whitespace-nowrap">
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
            <div className="flex items-center mb-6">
              <FaCartPlus className="text-gray-800 text-3xl mr-4" />
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

        <div className="border border-gray-300 p-4 rounded-lg shadow-lg mb-10">
          <div className="flex items-center mb-6">
            <FaRecycle className="text-gray-800 text-3xl mr-4" />
            <h3 className="text-2xl text-gray-800">Otkup</h3>
          </div>
          <p className="mb-4">
            Naša firma se bavi otkupom različitih vrsta sekundarnih materijala
            širom Srbije. Otkupljujemo:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((material) => (
              <div
                key={material.name}
                className="bg-white border border-gray-300 p-4 rounded-lg shadow-md flex items-center space-x-4"
              >
                {material.icon}
                <p className="text-gray-800 text-lg">{material.name}</p>
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
          <hr className="border-t-2 border-transparent mt-5 md:mt-10 bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] h-1" />
          <div className="flex items-center mt-6 justify-center">
            <FaTruck className="text-gray-800 text-3xl mr-4 mt-6" />
            <p>Brza i efikasna dostava širom Srbije.</p>
          </div>
          <hr className="border-t-2 border-transparent mt-5 md:mt-10 bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] h-1" />
        </div>

        <Faq />
      </section>
    </main>
  );
};

export default Usluge;
