import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Заменили border-t на очень темный, почти невидимый
    <footer className="bg-black text-white border-t border-zinc-900 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* LOGO & ABOUT */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter">
            216.<span className="text-green-600">Store</span>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Первый стритвир бренд в Узбекистане. Только плотный хлопок и качественный принт.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/216_sstore" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-green-600 hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://t.me/store_216" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-green-600 hover:text-black transition-all">
              <Send size={18} />
            </a>
          </div>
        </div>

        {/* Ссылки (Упростил стили, чтобы ничего не выбивалось) */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-[10px] text-zinc-500 mb-6">Навигация</h4>
          <ul className="space-y-3 text-zinc-400 text-sm font-medium">
            <li><Link to="/shop" className="hover:text-white transition-colors">Магазин</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-[10px] text-zinc-500 mb-6">Помощь</h4>
          <ul className="space-y-3 text-zinc-400 text-sm font-medium">
            <li><span className="hover:text-white cursor-pointer">Доставка</span></li>
            <li><span className="hover:text-white cursor-pointer">Оплата (Click/Payme)</span></li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-[10px] text-zinc-500 mb-6">Связаться</h4>
          <a href="https://t.me/store_216" className="flex items-center gap-2 text-sm text-green-600 font-bold hover:brightness-125">
            TELEGRAM <ArrowUpRight size={14} />
          </a>
          <p className="text-zinc-500 text-xs">Ташкент, Узбекистан</p>
        </div>
      </div>

      {/* Низ футера без лишних линий */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] tracking-[0.2em]">
        <p>© {currentYear} 216.STORE</p>
        <div className="flex gap-6 uppercase">
          <span>Uzbekistan Original</span>
        </div>
      </div>
    </footer>
  );
}