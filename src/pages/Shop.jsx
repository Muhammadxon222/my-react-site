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
    category: "Одежда",
    price: "250 000 сум",
    isSale: false,
    img: "/products/photo_5_2026-02-03_22-41-12.jpg",
  },
  {
    id: 7,
    name: "T-shirt (Old Money)",
    category: "Одежда",
    price: "189 000 сум",
    isSale: false,
    img: "/products/photo_6_2026-02-03_22-41-12.jpg",
  },
  {
    id: 8,
    name: "Pants-Red Flame",
    category: "Одежда",
    price: "289 000 сум",
    isSale: false,
    img: "/products/photo_8_2026-02-03_22-41-03.jpg",
  },
  {
    id: 9,
    name: "Classic Grey",
    category: "Одежда",
    price: "255 000 сум",
    isSale: false,
    img: "/products/photo_9_2026-02-03_22-41-03.jpg",
  },
  {
    id: 10,
    name: "Baggy Jeans Sakura",
    category: "Одежда",
    price: "399 000 сум",
    isSale: false,
    img: "/products/photo_2026-02-03_22-39-14.jpg",
  },
  {
    id: 11,
    name: "Jeans Knight Sakura",
    category: "Одежда",
    price: "399 000 сум",
    isSale: false,
    img: "/products/photo_2026-02-03_22-39-32.jpg",
  },
  {
    id: 12,
    name: "Zip Hoodie (Gothic Grey)",
    category: "Одежда",
    price: "319 000 сум",
    isSale: false,
    img: "/products/photo_2026-02-03_22-39-40.jpg",
  },
  {
    id: 13,
    name: "Nike Meteor",
    category: "Обувь",
    price: "400 000 сум",
    isSale: true,
    img: "/products/photo_2026-02-03_22-39-56.jpg",
  },
  {
    id: 14,
    name: "Nike Red Lobster",
    category: "Обувь",
    price: "400 000 сум",
    isSale: true,
    img: "/products/photo_2026-02-03_22-39-59.jpg",
  },
  {
    id: 15,
    name: "Nike Pink Pie",
    category: "Обувь",
    price: "400 000 сум",
    isSale: true,
    img: "/products/photo_2026-02-03_22-40-03.jpg",
  },
  {
    id: 16,
    name: "Chrome Hearts Bracelet",
    category: "Аксессуары",
    price: "99 000 сум",
    isSale: true,
    img: "/products/hrom.jpg",
  },
  {
    id: 17,
    name: "Chrome Hearts (White)",
    category: "Аксессуары",
    price: "179 000 сум",
    isSale: false,
    img: "/products/glassesw.jpg",
  },
  {
    id: 18,
    name: "Chrome Hearts (Black)",
    category: "Аксессуары",
    price: "179 000 сум",
    isSale: false,
    img: "/products/glassesb.jpg",
  },

  // ===== ПАРФЮМЕРИЯ =====

  { id: 19, name: "Orto Parisi - Megamare", category: "Парфюмерия", price: "459 000 сум", isSale: false, img: "/products/megamare.jpg" },
  { id: 20, name: "Maison Margiela - Jazz Club", category: "Парфюмерия", price: "599 000 сум", isSale: false, img: "/products/jazz-club.jpg" },
  { id: 21, name: "Kilian - Blue Moon", category: "Парфюмерия", price: "499 000 сум", isSale: false, img: "/products/blue-moon.jpg" },
  { id: 22, name: "Kilian - Angel's Share", category: "Парфюмерия", price: "459 000 сум", isSale: false, img: "/products/angels-share.jpg" },
  { id: 23, name: "Xerjoff - Erba Pura", category: "Парфюмерия", price: "419 000 сум", isSale: false, img: "/products/erba-pura.jpg" },
  { id: 24, name: "Montale - Dark Vanilla Intense", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/dark-vanilla.jpg" },
  { id: 25, name: "Montale - Arabians Tonka", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/arabians-tonka.jpg" },
  { id: 26, name: "Montale - Intense Cafe", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/intense-cafe.jpg" },
  { id: 27, name: "Montale - Chocolate Greedy", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/eedy.jpg" },
  { id: 28, name: "Orto Parisi - Terroni", category: "Парфюмерия", price: "459 000 сум", isSale: false, img: "/products/terroni.jpg" },
  { id: 29, name: "Orto Parisi - Boccanera", category: "Парфюмерия", price: "459 000 сум", isSale: false, img: "/products/boccanera.jpg" },
  { id: 30, name: "Louis Vuitton - Imagination", category: "Парфюмерия", price: "449 000 сум", isSale: false, img: "/products/imagination.jpg" },
  { id: 31, name: "Louis Vuitton - Nuit De Feu", category: "Парфюмерия", price: "449 000 сум", isSale: false, img: "/products/nuit-de-feu.jpg" },
  { id: 32, name: "Louis Vuitton - L’Immensité", category: "Парфюмерия", price: "449 000 сум", isSale: false, img: "/products/limmensite.jpg" },
  { id: 33, name: "Louis Vuitton - Ombre Nomade", category: "Парфюмерия", price: "449 000 сум", isSale: false, img: "/products/ombre-nomade.jpg" },
  { id: 34, name: "Tom Ford - Vanille Fatale", category: "Парфюмерия", price: "619 000 сум", isSale: false, img: "/products/vanille-fatale.jpg" },
  { id: 35, name: "Tom Ford - Black Orchid", category: "Парфюмерия", price: "499 000 сум", isSale: false, img: "/products/black-orchid.jpg" },
  { id: 36, name: "MFK - Baccarat Rouge 540", category: "Парфюмерия", price: "559 000 сум", isSale: false, img: "/products/baccarat-540.jpg" },
  { id: 37, name: "MFK - Oud Satin Mood", category: "Парфюмерия", price: "449 000 сум", isSale: false, img: "/products/oud-satin-mood.jpg" },
  { id: 38, name: "Creed - Green Irish Tweed", category: "Парфюмерия", price: "509 000 сум", isSale: false, img: "/products/green-irish-tweed.jpg" },
  { id: 39, name: "Tom Ford - Ombre Leather", category: "Парфюмерия", price: "399 000 сум", isSale: false, img: "/products/ombre-leather.jpg" },
  { id: 40, name: "Tom Ford - F. Fabulous", category: "Парфюмерия", price: "599 000 сум", isSale: false, img: "/products/f-fabulous.jpg" },
  { id: 41, name: "Tom Ford - Oud Wood", category: "Парфюмерия", price: "699 000 сум", isSale: false, img: "/products/oud-wood.jpg" },
  { id: 42, name: "Dior - Sauvage (Eau Forte)", category: "Парфюмерия", price: "199 000 сум", isSale: true, img: "/products/sauvage-eau-forte.jpg" },
  { id: 43, name: "YSL - Y Eau De Parfum", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/ysl-y-edp.jpg" },
  { id: 44, name: "YSL - MYSLF Eau De Parfum", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/ysl-myslf.jpg" },
  { id: 45, name: "Valentino - Born in Roma Uomo", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/valentino-born-roma.jpg" },
  { id: 46, name: "Valentino - Born In Roma Green", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/valentino-green.jpg" },
  { id: 47, name: "Valentino - Uomo Intense", category: "Парфюмерия", price: "299 000 сум", isSale: false, img: "/products/valentino-uomo-intense.jpg" },
  { id: 48, name: "JPG - Le Male Le Parfum", category: "Парфюмерия", price: "399 000 сум", isSale: false, img: "/products/jpg-le-male-le-parfum.jpg" },
  { id: 49, name: "JPG - Le Male Elixir", category: "Парфюмерия", price: "399 000 сум", isSale: false, img: "/products/jpg-elixir.jpg" },
  { id: 50, name: "JPG - Le Beau Le Parfum", category: "Парфюмерия", price: "399 000 сум", isSale: false, img: "/products/jpg-le-beau-lp.jpg" },
  { id: 51, name: "Dior - Homme Intense", category: "Парфюмерия", price: "359 000 сум", isSale: false, img: "/products/dior-homme-intense.jpg" },
  { id: 52, name: "Creed - Aventus", category: "Парфюмерия", price: "399 000 сум", isSale: false, img: "/products/creed-aventus.jpg" },
  { id: 53, name: "Dior - Sauvage Elixir", category: "Парфюмерия", price: "399 000 сум", isSale: false, img: "/products/sauvage-elixir.jpg" }


  
];

export default function Shop() {
  const [filter, setFilter] = useState("Все");

  const { addToCart, totalItems } = useCart();

  const categories = ["Все", "Одежда", "Обувь", "Аксессуары","Парфюмерия"];

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