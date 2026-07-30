import HomePage from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
      <Route path="orders" element={<OrdersPage />}></Route>
    </Routes>
  );
}

export default App;
