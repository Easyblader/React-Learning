import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Welcome from "./pages/Welcome";
import "./index.css";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

ReactDOM.render(
  <BrowserRouter>
    <MainHeader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
