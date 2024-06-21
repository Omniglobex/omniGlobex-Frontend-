import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/not-found-page";
import HomePage from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import BecomeSellerPage from "./pages/become-seller";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";
import AllProductsPage from "./pages/all-products-page";

export default function RoutesConfig() {
  // const { id } = useParams();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/become-seller" element={<BecomeSellerPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/all-products" element={<AllProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
