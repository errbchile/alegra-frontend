import MainButton from "./components/MainButton";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">
          Bienvenidos
        </h1>
        {/* Botón "Pedir un plato" */}
        <div className="mt-10 flex justify-center">
          <MainButton />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10">
          {/* Columna 1: Esperando ingredientes */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Esperando ingredientes
            </h2>
            {/* Tarjeta 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tarjeta 1
                </h3>
                <p className="text-sm text-gray-500">
                  Contenido de la tarjeta 1
                </p>
              </div>
            </div>
            {/* Tarjeta 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tarjeta 2
                </h3>
                <p className="text-sm text-gray-500">
                  Contenido de la tarjeta 2
                </p>
              </div>
            </div>
            {/* Tarjeta 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tarjeta 3
                </h3>
                <p className="text-sm text-gray-500">
                  Contenido de la tarjeta 3
                </p>
              </div>
            </div>
          </div>
          {/* Columna 2: Listos para retirar */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Listos para retirar
            </h2>
            {/* Tarjeta 4 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tarjeta 4
                </h3>
                <p className="text-sm text-gray-500">
                  Contenido de la tarjeta 4
                </p>
              </div>
            </div>
            {/* Tarjeta 5 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tarjeta 5
                </h3>
                <p className="text-sm text-gray-500">
                  Contenido de la tarjeta 5
                </p>
              </div>
            </div>
            {/* Tarjeta 6 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tarjeta 6
                </h3>
                <p className="text-sm text-gray-500">
                  Contenido de la tarjeta 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
