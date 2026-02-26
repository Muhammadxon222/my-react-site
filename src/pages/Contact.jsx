import React from 'react';
import { Phone, Instagram, Send, Clock, ShoppingBag } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "Телефоны для связи",
      values: ["+998-88-038-21-11", "+998-70-037-21-11"],
      link: "tel:+998880382111"
    },
    {
      icon: <Send size={20} />,
      label: "Telegram (Заказы)",
      values: ["@store_216"],
      link: "https://t.me/store_216"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      values: ["216_sstore"],
      link: "https://instagram.com/216_sstore"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <div className="border-l-4 border-green-600 pl-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-mono">
            Online Store • Uzbekistan • Only by Order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Левая колонка: Инфо */}
          <div className="space-y-8">
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800">
              <div className="flex items-center gap-3 mb-6 text-green-500">
                <ShoppingBag size={24} />
                <h2 className="text-xl font-bold uppercase">Информация о заказах</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Мы работаем как интернет-магазин исключительно <span className="text-white font-bold">под заказ</span>. 
                Доставка осуществляется по всему Узбекистану. Выберите товар, свяжитесь с нами через Telegram или Instagram для оформления.
              </p>
              
              <div className="flex items-center gap-3 text-sm font-mono text-zinc-500">
                <Clock size={16} />
                <span>Прием заявок: 24/7</span>
              </div>
            </div>

            {/* Соцсети и телефоны */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-zinc-900 hover:bg-green-600 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-black group-hover:bg-white group-hover:text-black transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-zinc-500 group-hover:text-black/70 font-bold mb-1">
                      {info.label}
                    </p>
                    {info.values.map((v, i) => (
                      <p key={i} className="text-lg font-bold group-hover:text-black leading-none mb-1">
                        {v}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Правая колонка: Простая форма или декоративный блок */}
          <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <ShoppingBag size={200} />
             </div>
             
             <h3 className="text-2xl font-black uppercase mb-4 relative z-10">
               Ready to order?
             </h3>
             <p className="text-zinc-400 mb-8 relative z-10">
               Напишите нам прямо сейчас в Telegram, чтобы получить консультацию по размерам и срокам доставки.
             </p>
             
             <a 
               href="https://t.me/store_216" 
               className="bg-green-600 text-black font-black uppercase py-4 text-center hover:bg-white transition-all relative z-10"
             >
               Send Message (TG)
             </a>
          </div>
        </div>

        {/* Футер страницы */}
        <div className="mt-20 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
            Store 216 • Quality over quantity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;