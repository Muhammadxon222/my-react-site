import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const PRODUCTS = [
  {
    id: 1,
    name: "Nike Classic Black",
    category: "Обувь",
    oldPrice: "520 000 сум",
    price: "400 000 сум",
    discount: "-23%",
    isSale: true,
    img: "/products/photo_1_2026-02-03_22-41-03.jpg",
  },
  {
    id: 2,
    name: "Maison Margiela White",
    category: "Обувь",
    oldPrice: "650 000 сум",
    price: "550 000 сум",
    discount: "-15%",
    isSale: true,
    img: "/products/photo_2_2026-02-03_22-41-03.jpg",
  },
  {
    id: 3,
    name: "Baggy Jeans (Gothic Grey)",
    category: "Одежда",
    price: "330 000 сум",
    isSale: false,
    img: "/products/photo_3_2026-02-03_22-41-03.jpg",
  },
  {
    id: 4,
    name: "Polo Zip",
    category: "Одежда",
    price: "399 000 сум",
    isSale: false,
    img: "/products/photo_4_2026-02-03_22-41-03.jpg",
  },
  {
    id: 5,
    name: "Baggy Jeans (Grey Flame)",
    category: "Одежда",
    price: "350 000 сум",
    isSale: false,
    img: "/products/photo_5_2026-02-03_22-41-03.jpg",
  },
  {
    id: 6,
    name: "Sk8 Style",
    category: "Обувь",
    price: "250 000 сум",
    isSale: false,
    img: "/products/photo_5_2026-02-03_22-41-12.jpg",
  },
  {
    id: 8,
    name: "T-shirt (Old Money)",
    category: "Одежда",
    price: "189 000 сум",
    isSale: false,
    img: "/products/photo_6_2026-02-03_22-41-12.jpg",
  },
  
];

export default function Shop() {
  const [filter, setFilter] = useState("Все");

  const { addToCart, totalItems } = useCart();

  const categories = ["Все", "Одежда", "Обувь", "Аксессуары"];

  const filteredProducts =
    filter === "Все"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#022c22] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center mb-14">
          <h1 className="text-6xl font-black italic bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text text-transparent">
            216 STORE
          </h1>
          <div className="mt-2 text-white font-semibold">
            Корзина: {totalItems} {totalItems === 1 ? "товар" : "товара"}
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${
                filter === cat
                  ? "bg-emerald-500 text-[#022c22] border-emerald-400 shadow-lg shadow-emerald-500/30"
                  : "bg-transparent border-emerald-700 text-emerald-300 hover:bg-emerald-800/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-emerald-900/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-400 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {product.isSale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    SALE {product.discount}
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-black/50 text-emerald-300 text-xs px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition">
                  {product.name}
                </h3>

                {product.oldPrice && (
                  <div className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </div>
                )}

                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-black">{product.price}</span>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-emerald-500 hover:bg-emerald-400 text-[#022c22] w-10 h-10 rounded-xl flex items-center justify-center transition active:scale-90"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}