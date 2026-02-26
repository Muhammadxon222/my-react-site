import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTelegramLink, parsePrice } = useCart();

  // Считаем итоговую цену через функцию-помощник из контекста
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white pt-20">
        <ShoppingBag size={80} className="text-gray-600 mb-4" />
        <h2 className="text-2xl font-bold italic uppercase">Корзина пуста</h2>
        <Link to="/shop" className="mt-6 px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:scale-105 transition">
          В МАГАЗИН
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-10 text-green-500 italic uppercase tracking-tighter">
          Мой заказ
        </h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row items-center justify-between bg-white/5 p-5 rounded-3xl border border-white/10 gap-4"
            >
              <div className="flex items-center gap-6 w-full">
                {/* Исправлено: ключ img */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-2xl border border-white/10 shadow-xl"
                />
                <div>
                  <h3 className="font-black text-xl leading-tight uppercase">{item.name}</h3>
                  <p className="text-gray-500 font-bold">{item.category}</p>
                  <p className="text-green-500 font-black text-lg mt-1">{item.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto gap-8">
                <div className="flex items-center gap-4 bg-black rounded-full px-4 py-2 border border-white/20">
                  <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-green-500 transition"><Minus size={20}/></button>
                  <span className="font-black text-lg w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-green-500 transition"><Plus size={20}/></button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition p-3 rounded-2xl"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-green-500 rounded-[40px] text-black shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest opacity-60">Итоговая сумма</p>
              <p className="text-4xl font-black italic">{totalPrice.toLocaleString()} СУМ</p>
            </div>
            
            <a 
              href={getTelegramLink("store_216")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-black text-white px-12 py-5 rounded-full font-black uppercase italic hover:scale-105 transition-all text-center shadow-xl"
            >
              Оформить в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}