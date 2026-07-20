// src/components/ProductGrid.jsx
import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Betabel Adobado',
    tag: 'Salado / Picosito',
    img: '/images/betabeladobado.webp',
    price: 110, // <-- Precio real
    bgColor: 'bg-[#9A1B36]/10',
    textColor: 'text-[#9A1B36]',
    btnColor: 'bg-[#9A1B36] hover:bg-[#9A1B36]/90'
  },
  {
    id: 2,
    name: 'Camote con Canela',          
    tag: 'Dulce / Crunch',              
    img: '/images/camoteconcanela.webp', 
    price: 80, // <-- Precio real
    bgColor: 'bg-[#E28731]/10',
    textColor: 'text-[#E28731]',
    btnColor: 'bg-[#E28731] hover:bg-[#E28731]/90'
  },
  {
    id: 3,
    name: 'Jícama con Chile',
    tag: 'El favorito de todos',
    img: '/images/jicamaconchile.webp',
    price: 80, 
    bgColor: 'bg-[#134323]/10',
    textColor: 'text-[#134323]',
    btnColor: 'bg-[#134323] hover:bg-[#134323]/90'
  },
  {
    id: 4,
    name: 'Jícama con Limón',
    tag: 'Fresco y Cítrico',
    img: '/images/jicamaconlimon.webp',
    price: 80,
    bgColor: 'bg-[#60A62E]/10',
    textColor: 'text-[#60A62E]',
    btnColor: 'bg-[#60A62E] hover:bg-[#60A62E]/90'
  },
  {
    id: 5,
    name: 'Plátano con Canela',
    tag: 'Dulce / Saludable',
    img: '/images/platanoconcanela.webp',
    price: 80,
    bgColor: 'bg-[#E28731]/10',
    textColor: 'text-[#E28731]',
    btnColor: 'bg-[#E28731] hover:bg-[#E28731]/90'
  }
];

export default function ProductGrid() {
  const [selectedTag, setSelectedTag] = useState('Todos');
  const [activeProduct, setActiveProduct] = useState(null); // Controla el modal
  const [quantity, setQuantity] = useState(1); // Controla las bolsas

  const categories = ['Todos', 'Salado', 'Dulce', 'Jícama'];

  const filteredProducts = productsData.filter(product => {
    if (selectedTag === 'Todos') return true;
    if (selectedTag === 'Jícama') return product.name.includes('Jícama');
    return product.tag.includes(selectedTag);
  });

  const openModal = (product) => {
    setActiveProduct(product);
    setQuantity(1);
  };

  return (
    <section id="productos" className="py-20 px-4 bg-[#FDF9F2]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-[#134323] mb-4 tracking-wide uppercase">
            ¡Elige tu Antojo Saludable!
          </h2>
          <p className="font-body text-[#080708]/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Nuestras frituras artesanales están llenas de sabor y color natural. ¡Sin freír y sin remordimientos!
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-8 py-3 rounded-2xl font-heading text-lg transition-all duration-300 transform active:scale-95 tracking-wide ${
                  selectedTag === cat
                    ? 'bg-[#134323] text-white shadow-xl shadow-[#134323]/20 scale-105'
                    : 'bg-white text-[#134323] border-2 border-[#134323]/10 hover:border-[#134323]/40 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl p-6 shadow-lg shadow-[#134323]/5 border border-[#134323]/5 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center"
            >
              <div className={`w-full h-64 ${product.bgColor} rounded-2xl p-6 flex items-center justify-center mb-6 overflow-hidden relative group`}>
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <span className={`text-xs font-body font-bold uppercase tracking-widest mb-2 ${product.textColor}`}>
                {product.tag} — ${product.price} MXN
              </span>
              
              <h3 className="font-heading text-2xl md:text-3xl text-[#080708] text-center mb-6 uppercase tracking-wide">
                {product.name}
              </h3>
              
              <button 
                onClick={() => openModal(product)}
                className={`mt-auto w-full ${product.btnColor} text-white text-center font-heading py-3.5 rounded-xl transition-all duration-300 tracking-wide text-lg shadow-md cursor-pointer uppercase`}
              >
                🛒 COMPRAR SNACK
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL DE CANTIDADES CON COLORES HEXADECIMALES PUROS ================= */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative border border-[#134323]/10 flex flex-col items-center">
            
            <button 
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 text-[#080708]/40 hover:text-[#080708] text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className={`w-28 h-28 ${activeProduct.bgColor} rounded-2xl p-3 flex items-center justify-center mb-3`}>
              <img src={activeProduct.img} alt={activeProduct.name} className="max-h-full object-contain" />
            </div>

            <h4 className="font-heading text-xl text-[#134323] text-center uppercase tracking-wide mb-1">
              {activeProduct.name}
            </h4>
            <p className="font-body font-bold text-[#080708]/50 text-xs mb-4">
              Precio Unitario: ${activeProduct.price}.00 MXN
            </p>

            <div className="w-full text-center space-y-1 mb-4">
              <span className="block font-body font-bold text-[10px] uppercase text-[#134323]/60 tracking-wider">
                Selecciona la Cantidad
              </span>
              <div className="flex items-center justify-center gap-3 bg-[#FDF9F2] py-1.5 px-3 rounded-xl border border-[#134323]/5 max-w-[160px] mx-auto">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-white rounded-lg font-heading text-lg shadow-sm text-[#134323] cursor-pointer"
                >
                  -
                </button>
                <span className="font-heading text-xl w-6 text-center text-[#080708]">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-white rounded-lg font-heading text-lg shadow-sm text-[#134323] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-full bg-[#134323]/5 border border-[#134323]/10 p-3 rounded-xl text-center mb-4">
              <span className="block font-body text-[10px] font-bold uppercase tracking-wider text-[#080708]/40">Total Estimado</span>
              <span className="font-heading text-2xl text-[#134323] tracking-wide">
                ${activeProduct.price * quantity}.00 MXN
              </span>
            </div>

            <a 
              href={`https://wa.me/+523311325566?text=${encodeURIComponent(
                `¡Hola Flavor Land! Me interesa hacer un pedido.\n\n` +
                `📦 Producto: ${activeProduct.name}\n` +
                `🔢 Cantidad: ${quantity} bolsa(s)\n` +
                `💰 Total estimado: $${activeProduct.price * quantity}.00 MXN`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveProduct(null)}
              className={`w-full ${activeProduct.btnColor} text-white text-center font-heading py-3 rounded-xl transition-all duration-300 tracking-wide text-base shadow-md flex items-center justify-center uppercase`}
            >
              📱 Confirmar Pedido
            </a>

          </div>
        </div>
      )}
    </section>
  );
}
