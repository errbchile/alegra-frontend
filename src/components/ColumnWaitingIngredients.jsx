import axios from "axios";
import { useQuery } from "react-query";
import OrderCard from "./OrderCard/OrderCard";

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

  const { data, isSuccess } = useQuery("pending-orders", fetchPendingOrders, {
    refetchInterval: 3000,
  });

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Esperando ingredientes
      </h2>
      {isSuccess &&
        data.data.map((order) => {
          return <OrderCard key={order.id} order={order} />;
        })}
    </div>
  );
}
