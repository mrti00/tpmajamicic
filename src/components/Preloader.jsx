const Preloader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex h-full items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="mb-4 text-xl font-semibold text-gray-800">
          Učitavanje...
        </p>

        <div className="flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-solid border-gray-300 border-t-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
