import HomePage from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
    </Routes>
  );
}

export default App;
