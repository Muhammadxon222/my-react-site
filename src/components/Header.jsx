import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext"; 

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-lg text-white shadow-2xl border-b border-green-500/20">
      {/* Увеличил высоту контейнера до h-24 (96px) и отступы py-6 */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center h-24">

        {/* Logo Section - Сделал иконку значительно больше */}
        <Link to="/" className="flex items-center h-full group">
          <img 
            src="/products/Gemini_Generated_Image_x8fi6wx8fi6wx8fi-removebg-preview.png" 
            alt="216 Store" 
            /* h-20 — теперь иконка действительно большая и заметная */
            className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          />
          <span className="text-3xl font-black text-green-500 ml-2 tracking-tighter hidden lg:block">
            216 STORE
          </span>
        </Link>

        {/* Desktop Nav - Увеличил размер шрифта и отступы */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-xl font-black text-base uppercase tracking-widest transition-all duration-300
                  ${isActive
                    ? "bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.6)] scale-105"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Корзина Desktop - Сделал кнопку крупнее */}
          <Link 
            to="/cart" 
            className="relative ml-6 p-4 bg-green-500/10 rounded-2xl hover:bg-green-500/20 transition-all group border border-green-500/30"
          >
            <ShoppingCart size={28} className="text-green-500 group-hover:scale-110 transition-transform" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-black shadow-lg">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-6 md:hidden">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart size={32} className="text-green-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button
            className="text-green-500 p-2 bg-white/5 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Сделал более массивным */}
      <div
        className={`md:hidden bg-black/98 backdrop-blur-3xl border-t border-green-500/20 transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-16">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-black uppercase tracking-[0.2em] text-white hover:text-green-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}