import axios from "axios";
import { useQuery } from "react-query";

export default function ColumnWaitingIngredients() {
  const fetchPendingOrders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8001/api/orders/pending-orders"
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al cargar los datos");
    }
  };

  const { isLoading, error, data } = useQuery(
    "pending-orders",
    fetchPendingOrders
  );

  console.log(data);

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
