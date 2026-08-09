import "../orders/OrdersPage.css";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import OrdersGrid from "./OrdersGrid";

function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
      //console.log(response.data);
    };

    fetchOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
export default OrdersPage;
