import React from 'react';
import { ArrowRight, Truck, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          {/* Сюда ты поставишь главное фото (фоном) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />

        </div>

        <div className="relative z-20 text-center max-w-4xl">
          <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
            Style From <br /> <span className="text-green-600">Uzbekistan</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Премиальное качество, созданное для тех, кто ценит комфорт и уличный стиль. Доставка по всему Узбекистану.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-green-600 hover:bg-green-500 text-black font-black py-4 px-10 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105">
              SHOP NOW <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ADVANTAGES (Узбекистан контекст) */}
      <section className="py-20 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Truck className="text-green-500 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Быстрая Доставка</h3>
            <p className="text-gray-500 text-sm">По Ташкенту в течение дня. В регионы от 1 до 3 дней через BTS/Fargo.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <ShieldCheck className="text-green-500 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Качество 216.</h3>
            <p className="text-gray-500 text-sm">Используем только плотный узбекский хлопок высшего сорта.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Zap className="text-green-500 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Оплата на месте</h3>
            <p className="text-gray-500 text-sm">Принимаем Click, Payme и наличные при получении товара.</p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES PREVIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Card 1 */}
          <div className="relative h-[400px] group overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" alt="Hoodies" />
            <div className="absolute inset-0 bg-black/40 flex items-end p-10">
              <div>
                <h3 className="text-4xl font-black mb-4">HOODIES</h3>
                <Link to="/shop" className="text-green-500 font-bold flex items-center gap-2 hover:underline">
                  VIEW ALL <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          {/* Category Card 2 */}
          <div className="relative h-[400px] group overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" alt="T-shirts" />
            <div className="absolute inset-0 bg-black/40 flex items-end p-10">
              <div>
                <h3 className="text-4xl font-black mb-4">T-SHIRTS</h3>
                <Link to="/shop" className="text-green-500 font-bold flex items-center gap-2 hover:underline">
                  VIEW ALL <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;