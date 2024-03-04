import axios from "axios";

const apiCocina = "http://127.0.0.1:8001";
const apiBodega = "http://127.0.0.1:8000";

export const fetchStatistics = async () => {
  try {
    const response = await axios.get(`${apiBodega}/api/statistics`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los datos");
  }
};

export const fetchFinishedOrders = async () => {
  try {
    const response = await axios.get(`${apiCocina}/api/orders/finished-orders`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los datos");
  }
};

export const fetchPendingOrders = async () => {
  try {
    const response = await axios.get(`${apiCocina}/api/orders/pending-orders`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los datos");
  }
};
