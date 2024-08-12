import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Da bi marker izgledao ispravno
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIconUrl,
  iconRetinaUrl: markerIconRetinaUrl,
  shadowUrl: markerShadowUrl,
});

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    fetch("https://formspree.io/f/xyzgjdaz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setStatusMessage("Poruka je uspešno poslata!");
        } else {
          setStatusMessage("Greška prilikom slanja poruke.");
        }
        setIsSending(false);
      })
      .catch(() => {
        setStatusMessage("Greška prilikom slanja poruke.");
        setIsSending(false);
      });
  };

  return (
    <main>
      <section className="relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Kontakt
        </h2>
        <div className="flex md:flex-row flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full mb-4 md:mb-16 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white border  p-6 rounded-lg shadow-lg flex flex-col"
          >
            <label htmlFor="name" className="block mb-2 text-lg font-medium">
              Ime
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              placeholder="Vaše ime"
              required
            />
            <label htmlFor="email" className="block mb-2 text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              placeholder="Vaš email"
              required
            />
            <label htmlFor="message" className="block mb-2 text-lg font-medium">
              Poruka
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              rows="4"
              placeholder="Vaša poruka"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full p-3 text-white font-semibold rounded-md ${isSending ? "bg-gray-400" : "bg-gray-700 hover:bg-gray-800"}`}
              disabled={isSending}
            >
              {isSending ? "Šaljem..." : "Pošaljite"}
            </button>
            {statusMessage && (
              <p className="mt-4 text-center text-lg font-medium text-gray-800">
                {statusMessage}
              </p>
            )}
          </form>

          <div className="mt-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-center">
            <div className="flex items-center justify-center mb-4">
              <FaPhoneAlt className="text-gray-800 mr-2" />
              <a href="tel:0641509929" className="text-lg">
                Telefon:{" "}
                <span className="text-gray-800 underline hover:underline">
                  0641509929
                </span>
              </a>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FaEnvelope className="text-gray-800 mr-2" />
              <a href="mailto:jovanmicic66@gmail.com" className="text-lg">
                Email:{" "}
                <span className="text-gray-800 underline hover:underline">
                  jovanmicic66@gmail.com
                </span>
              </a>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FaClock className="text-gray-800 mr-2" />
              <p className="text-lg">Pon – Pet: 07:00 – 15:00</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <IoLocationSharp className="text-gray-800 mr-2" />
              <p className="text-lg">Požega, Srbija</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[250px] md:h-96 z-10">
          <MapContainer
            center={[43.843700339879334, 20.051871376712775]}
            zoom={15}
            className="h-full w-full rounded-lg shadow-md"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.carto.com/attributions">CARTO</a> & <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[43.843700339879334, 20.051871376712775]}>
              <Popup>
                TP Maja Mićić: <br /> Požega, Srbija
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </main>
  );
};

export default Kontakt;
