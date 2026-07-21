// src/components/ProductGrid.jsx
import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Betabel Adobado',
    tag: 'Salado / Picosito',
    img: '/images/betabeladobado.webp',
    price: 110,
    bgColor: 'bg-[#9A1B36]/10',
    textColor: 'text-[#9A1B36]',
    btnColor: 'bg-[#9A1B36] hover:bg-[#9A1B36]/90'
  },
  {
    id: 2,
    name: 'Camote con Canela',          
    tag: 'Dulce / Crunch',              
    img: '/images/camoteconcanela.webp', 
    price: 80,
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
  const [activeProduct, setActiveProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  // MATEMÁTICA DE DESCUENTOS POR VOLUMEN
  const subtotal = activeProduct ? activeProduct.price * quantity : 0;
  const isMayoreo = quantity >= 24;
  const isMedioMayoreo = quantity >= 12 && quantity < 24;
  
  const discountPercent = isMayoreo ? 5 : (isMedioMayoreo ? 2.5 : 0);
  const discountType = isMayoreo ? "Mayoreo (5%)" : "Medio Mayoreo (2.5%)";
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalFinal = subtotal - discountAmount;

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
         {/* ================= MODAL INTERACTIVO 100% RESPONSIVE (CELULAR Y PC) ================= */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* El contenedor ahora es elástico: max-w-[92%] en celulares pequeños y max-w-md en PC */}
          <div className="bg-white w-full max-w-[95%] sm:max-w-md rounded-[2rem] p-5 sm:p-8 shadow-2xl relative border border-[#134323]/10 flex flex-col items-center max-h-[92vh] overflow-y-auto">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#080708]/40 hover:text-[#080708] text-xl sm:text-2xl font-bold cursor-pointer p-1"
            >
              ✕
            </button>

            {/* 📸 IMAGEN EN ESCALA FLEXIBLE: Se adapta al alto de la pantalla del celular */}
            <div className={`w-full max-w-[140px] sm:max-w-[185px] h-32 sm:h-44 ${activeProduct.bgColor} rounded-2xl p-3 sm:p-4 flex items-center justify-center mb-4 sm:mb-5 shadow-inner overflow-hidden`}>
              <img 
                src={activeProduct.img} 
                alt={activeProduct.name} 
                className="max-h-full max-w-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] sm:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)]" 
              />
            </div>

            {/* TEXTOS DINÁMICOS ACORDES A LA PANTALLA */}
            <h4 className="font-heading text-2xl sm:text-4xl text-[#134323] text-center uppercase tracking-wide leading-tight mb-0.5">
              {activeProduct.name}
            </h4>
            <p className="font-body font-bold text-[#080708]/50 text-xs sm:text-sm mb-4 sm:mb-5">
              Precio Unitario: ${activeProduct.price}.00 MXN
            </p>

            {/* CONTADOR EN COMODIDAD MÓVIL */}
            <div className="w-full text-center space-y-1 sm:space-y-2 mb-4 sm:mb-5">
              <span className="block font-body font-bold text-[10px] sm:text-xs uppercase text-[#134323]/60 tracking-wider">
                Selecciona la Cantidad
              </span>
              <div className="flex items-center justify-center gap-3 sm:gap-4 bg-[#FDF9F2] py-1.5 sm:py-2 px-4 rounded-xl sm:rounded-2xl border border-[#134323]/10 max-w-[150px] sm:max-w-[180px] mx-auto shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl font-heading text-lg sm:text-xl shadow-md text-[#134323] cursor-pointer"
                >
                  -
                </button>
                <span className="font-heading text-xl sm:text-2xl w-6 sm:w-8 text-center text-[#080708] select-none">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl font-heading text-lg sm:text-xl shadow-md text-[#134323] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* RECUADRO DE TOTALES ESCALABLE */}
            <div className="w-full bg-[#134323]/5 border border-[#134323]/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center mb-4 sm:mb-5 space-y-1">
              {discountPercent > 0 ? (
                <>
                  <div className="flex justify-between items-center text-xs font-body px-1 text-[#080708]/60">
                    <span>Subtotal:</span>
                    <span className="line-through">${subtotal}.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-body px-1 text-[#60A62E] font-bold">
                    <span>Ahorro {discountType}:</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <div className="text-[10px] sm:text-xs font-body text-[#080708]/60 font-semibold uppercase tracking-wide px-1">
                  
                </div>
              )}
              
              <div className="pt-1.5 sm:pt-2 border-t border-[#134323]/10 flex justify-between items-center px-1">
                <span className="font-body font-bold text-xs sm:text-sm uppercase text-[#080708]/60">Total Final:</span>
                <span className="font-heading text-xl sm:text-3xl text-[#134323] tracking-wide">
                  ${totalFinal.toFixed(2)} MXN
                </span>
              </div>
            </div>


            {/* ENLACE DE WHATSAPP 100% SINTÁCTICAMENTE CERRADO */}
          <a 
              
href={`https://wa.me/+523311325566?text=${encodeURIComponent( 
                `¡Hola Flavor Land! Me interesa hacer un pedido.\n\n` + 
                `
📦
 Producto: ${activeProduct.name}\n` + 
                `
🔢
 Cantidad: ${quantity} bolsa(s)\n` + 
                `
💰
 Total estimado: $${activeProduct.price * 
quantity}.00 MXN` 
              )}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setActiveProduct(null)} 
              className={`w-full ${activeProduct.btnColor} text-white 
text-center font-heading py-3 rounded-xl transition-all duration-300 
tracking-wide text-base shadow-md flex items-center justify-center 
uppercase`} 
            > 
             📱 Confirmar Pedido 
            </a> 
 
          </div> 
        </div> 
      )} 
    </section> 
  ); 
} 

