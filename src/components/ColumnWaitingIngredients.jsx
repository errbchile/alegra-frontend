export default function ColumnWaitingIngredients() {
  return (
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
          <p className="text-sm text-gray-500">Contenido de la tarjeta 1</p>
        </div>
      </div>
      {/* Tarjeta 2 */}
      <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Tarjeta 2
          </h3>
          <p className="text-sm text-gray-500">Contenido de la tarjeta 2</p>
        </div>
      </div>
      {/* Tarjeta 3 */}
      <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Tarjeta 3
          </h3>
          <p className="text-sm text-gray-500">Contenido de la tarjeta 3</p>
        </div>
      </div>
    </div>
  );
}
