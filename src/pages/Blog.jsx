import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Как заказать оригинальные вещи в Узбекистан?",
      excerpt: "Полный гайд по процессу заказа, срокам доставки и гарантиям подлинности в 216 Store.",
      date: "15.02.2026",
      author: "Admin",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Тренды Streetwear 2026: Что носить этой весной?",
      excerpt: "Разбираем главные айтемы сезона, которые уже доступны для предзаказа в нашем магазине.",
      date: "10.02.2026",
      author: "Style Editor",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Почему 'Под заказ' — это выгодно?",
      excerpt: "Развенчиваем мифы о долгом ожидании и объясняем, почему это лучший способ получить эксклюзив.",
      date: "05.02.2026",
      author: "216 Team",
      category: "Inside",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-4 border-green-600 pl-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Editorial
            </h1>
            <p className="text-zinc-500 font-mono mt-2 uppercase tracking-widest">
              216 Store / News & Style Guide
            </p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400 max-w-xs text-sm italic">
              "Мода проходит, стиль — остается. Мы привозим лучшее прямо к вашему порогу."
            </p>
          </div>
        </div>

        {/* Главный пост (Featured) */}
        <div className="group relative w-full h-[500px] overflow-hidden rounded-sm mb-12 border border-zinc-800">
          <img 
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1500&auto=format&fit=crop" 
            alt="Featured" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
            <span className="bg-green-600 text-black font-black text-[10px] px-3 py-1 w-fit uppercase mb-4">
              Featured Story
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase max-w-3xl mb-4 group-hover:text-green-500 transition-colors">
              Культура дропов: Как успеть купить лимитированную коллекцию
            </h2>
            <button className="flex items-center gap-2 text-white font-bold uppercase text-sm tracking-widest hover:gap-4 transition-all">
              Read More <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Сетка постов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-video overflow-hidden bg-zinc-900 rounded-sm mb-6 border border-zinc-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                  <span className="flex items-center gap-1"><Tag size={12}/> {post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold uppercase leading-tight group-hover:text-green-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between group-hover:border-green-600 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 text-zinc-500">
                    <User size={12}/> {post.author}
                  </span>
                  <ArrowRight size={16} className="text-zinc-700 group-hover:text-green-500" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-32 p-12 bg-zinc-900 text-center border border-zinc-800">
          <h3 className="text-3xl font-black uppercase mb-4">Будь в курсе новых поступлений</h3>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">Подпишись на наш Telegram канал, чтобы первым узнавать о доступных к заказу айтемах.</p>
          <a 
            href="https://t.me/store_216" 
            target="_blank" 
            className="inline-block bg-white text-black font-black uppercase px-10 py-4 hover:bg-green-600 transition-colors"
          >
            Join Telegram
          </a>
        </div>

      </div>
    </div>
  );
};

export default Blog;