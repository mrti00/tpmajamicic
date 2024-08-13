import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[467px]">
      <h2 className="text-4xl mb-4">Stranica nije pronađena</h2>
      <h3 className="text-2xl">
        Vratite se na{" "}
        <Link to="/" className="text-blue-500 underline">
          Početnu
        </Link>{" "}
        stranicu
      </h3>
    </div>
  );
};

export default NotFound;
