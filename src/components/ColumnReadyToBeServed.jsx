export default function ColumnReadyToBeServed() {
  return (
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
          <p className="text-sm text-gray-500">Contenido de la tarjeta 4</p>
        </div>
      </div>
      {/* Tarjeta 5 */}
      <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Tarjeta 5
          </h3>
          <p className="text-sm text-gray-500">Contenido de la tarjeta 5</p>
        </div>
      </div>
      {/* Tarjeta 6 */}
      <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Tarjeta 6
          </h3>
          <p className="text-sm text-gray-500">Contenido de la tarjeta 6</p>
        </div>
      </div>
    </div>
  );
}
