export default function OrderCard({ order }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:shadow-md mb-4">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {order?.dish?.name}
        </h3>
        <p className="text-sm text-gray-500">Contenido de la tarjeta 4</p>
      </div>
    </div>
  );
}
