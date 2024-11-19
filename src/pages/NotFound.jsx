import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate("/");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center text-center">
      <h2 className="mb-4 text-4xl font-bold">Stranica nije pronađena</h2>
      <h3 className="mb-4 text-2xl">
        Bićete preusmereni na{" "}
        <Link to="/" className="text-blue-500 underline">
          Početnu
        </Link>{" "}
        stranicu za <span className="font-bold">{countdown}</span> sekundi.
      </h3>
      <p className="text-lg text-gray-500">Hvala na strpljenju!</p>
    </div>
  );
};

export default NotFound;
