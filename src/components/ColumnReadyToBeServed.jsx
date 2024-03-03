import axios from "axios";
import { useQuery } from "react-query";
import OrderCard from "./OrderCard/OrderCard";

export default function ColumnReadyToBeServed() {
  const fetchFinishedOrders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8001/api/orders/finished-orders"
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al cargar los datos");
    }
  };

  const { data, isSuccess } = useQuery("finished-orders", fetchFinishedOrders, {
    refetchInterval: 3000,
  });

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Listos para retirar
      </h2>
      {isSuccess &&
        data.data.map((order) => {
          return <OrderCard key={order.id} order={order} />;
        })}
    </div>
  );
}
