import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import loader from '../assets/image/header-logo.svg';
import '../index.scss';
// import ProtectedRoute from "./ProtectedRoute";
const AppRoutes = () => {
    const LandingPage = lazy(() => import("../components/landingpage/landingPage"));
    const Contact = lazy(() => import("../components/contact/contact"));
    const About = lazy(() => import("../components/about/about"));
    const Products = lazy(() => import("../components/products/products"));
    const ProductDescription = lazy(() => import("../components/productDescription/productDescription"));
    const Cart = lazy(()=>import("../components/cart/cart"))
    const Checkout = lazy(() => import("../components/checkout/checkout"))

    return (
      <Router>
        <Suspense fallback={
            <div className="page-loader">
                <img src={loader} alt="Loading..." className="loader-img" />
            </div>
        }>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productDescription/:id" element={<ProductDescription />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />}  />
            </Routes>
        </Suspense>
      </Router>
    );
}
export default AppRoutes;