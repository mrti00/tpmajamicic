import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaPhoneAlt, FaEnvelope, FaClock, FaUserCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix for marker icon rendering
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

    fetch("https://formspree.io/f/mdknzbql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setStatusMessage(
          response.ok
            ? "Poruka je uspešno poslata!"
            : "Greška prilikom slanja poruke."
        );
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
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:hidden mb-8 text-center">
            {[
              { icon: <FaUserCircle />, text: "Vlasnik: Jovan Mićić" },
              {
                icon: <FaPhoneAlt />,
                text: <a href="tel:0641509929">Telefon: 0641509929</a>,
              },
              {
                icon: <FaEnvelope />,
                text: (
                  <a href="mailto:jovanmicic66@gmail.com">
                    Email: jovanmicic66@gmail.com
                  </a>
                ),
              },
              { icon: <FaClock />, text: "Pon – Pet: 07:00 – 15:00" },
              { icon: <IoLocationSharp />, text: "Požega, Srbija" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center mb-4"
              >
                {item.icon}
                <p className="text-lg ml-2">{item.text}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white border p-6 rounded-lg shadow-lg flex flex-col"
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
              {isSending ? "Šalje se..." : "Pošaljite"}
            </button>
            {statusMessage && (
              <p className="mt-4 text-center text-lg font-medium text-gray-800">
                {statusMessage}
              </p>
            )}
          </form>

          <div className="hidden md:block mt-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-center">
            {[
              { icon: <FaUserCircle />, text: "Vlasnik: Jovan Mićić" },
              {
                icon: <FaPhoneAlt />,
                text: <a href="tel:0641509929">Telefon: 0641509929</a>,
              },
              {
                icon: <FaEnvelope />,
                text: (
                  <a href="mailto:jovanmicic66@gmail.com">
                    Email: jovanmicic66@gmail.com
                  </a>
                ),
              },
              { icon: <FaClock />, text: "Pon – Pet: 07:00 – 15:00" },
              { icon: <IoLocationSharp />, text: "Požega, Srbija" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center mb-4"
              >
                {item.icon}
                <p className="text-lg ml-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[250px] md:h-[450px] z-10 mt-8">
          <MapContainer
            center={[43.843700339879334, 20.051871376712775]}
            zoom={16}
            className="h-full w-full rounded-lg shadow-md"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.carto.com/attributions">CARTO</a> & <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={[43.843700339879334, 20.051871376712775]}>
              <Popup>TP Maja Mićić</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </main>
  );
};

export default Kontakt;
