import HomePage from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route
        path="checkout"
        element={<div>This is The Checkout page</div>}
      ></Route>
    </Routes>
  );
}

export default App;
