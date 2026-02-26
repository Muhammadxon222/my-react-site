import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
// 1. Добавляем импорт корзины
import Cart from "./pages/Cart"; 

export default function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          {/* 2. Добавляем маршрут для корзины */}
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </main>

      <Footer />
    </>
  );
}