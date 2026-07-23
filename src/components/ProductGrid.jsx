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
    btnColor: 'bg-[#9A1B36] hover:bg-[#9A1B36]/90',
    hasSizes: true,
    sizes: [
      { label: 'Normal', price: 110, img: '/images/betabeladobado.webp', allowsDiscount: true },
      { label: '100g', price: 45, img: '/images/betabeladobado75.webp', allowsDiscount: false }
    ]
  },
  {
    id: 2,
    name: 'Camote con Adobada', 
    tag: 'Dulce / Crunch', 
    img: '/images/camoteadobado.webp',
    price: 80,
    bgColor: 'bg-[#E28731]/10',
    textColor: 'text-[#E28731]',
    btnColor: 'bg-[#E28731] hover:bg-[#E28731]/90',
    hasSizes: true,
    sizes: [
      { label: 'Normal', price: 80, img: '/images/camoteadobado.webp', allowsDiscount: true },
      { label: '85g', price: 35, img: '/images/camoteadobado85.webp', allowsDiscount: false }
    ]
  },
  {
    id: 3,
    name: 'Jícama con Chile',
    tag: 'El favorito de todos',
    img: '/images/jicamaconchile.webp',
    price: 80,
    bgColor: 'bg-[#134323]/10',
    textColor: 'text-[#134323]',
    btnColor: 'bg-[#134323] hover:bg-[#134323]/90',
    hasSizes: true,
    sizes: [
      { label: 'Normal', price: 80, img: '/images/jicamaconchile.webp', allowsDiscount: true },
      { label: '85g', price: 35, img: '/images/jicamaconchile85.webp', allowsDiscount: false }
    ]
  },
  {
    id: 4,
    name: 'Jícama con Limón',
    tag: 'Fresco y Cítrico',
    img: '/images/jicamaconlimon.webp',
    price: 80,
    bgColor: 'bg-[#60A62E]/10',
    textColor: 'text-[#60A62E]',
    btnColor: 'bg-[#60A62E] hover:bg-[#60A62E]/90',
    hasSizes: true,
    sizes: [
      { label: 'Normal', price: 80, img: '/images/jicamaconlimon.webp', allowsDiscount: true },
      { label: '85g', price: 35, img: '/images/jicamaconlimon85.webp', allowsDiscount: false }
    ]
  },
  {
    id: 5,
    name: 'Plátano con Canela',
    tag: 'Dulce / Saludable',
    img: '/images/platanoconcanela.webp',
    price: 80,
    bgColor: 'bg-[#E28731]/10',
    textColor: 'text-[#E28731]',
    btnColor: 'bg-[#E28731] hover:bg-[#E28731]/90',
    hasSizes: true,
    sizes: [
      { label: 'Normal', price: 80, img: '/images/platanoconcanela.webp', allowsDiscount: true },
      { label: '100g', price: 35, img: '/images/platanoconcanela100.webp', allowsDiscount: false }
    ]
  }
];
export default function ProductGrid() {
  const [selectedTag, setSelectedTag] = useState('Todos');
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); 
  const [quantity, setQuantity] = useState(1);

  const categories = ['Todos', 'Salado', 'Dulce', 'Jícama'];

  const filteredProducts = productsData.filter(product => {
    if (selectedTag === 'Todos') return true;
    if (selectedTag === 'Jícama') return product.name.includes('Jícama');
    return product.tag.includes(selectedTag);
  });

   const openModal = (product) => {
    setActiveProduct(product);
    // Buscamos la variante 'Normal' dentro del arreglo de tamaños del producto
    const defaultSize = product.sizes ? product.sizes.find(s => s.label === 'Normal') : null;
    setSelectedSize(defaultSize); 
    setQuantity(1);
  };

  const currentPrice = selectedSize ? selectedSize.price : (activeProduct ? activeProduct.price : 0);
  const subtotal = currentPrice * quantity;
  
  const allowsDiscount = selectedSize ? selectedSize.allowsDiscount : true;
  const isMayoreo = allowsDiscount && quantity >= 24;
  const isMedioMayoreo = allowsDiscount && quantity >= 12 && quantity < 24;

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
                type="button"
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
              
                            {/* Cambiamos el texto estático por la variable de precio real */}
              <span className={`text-xs font-body font-bold uppercase tracking-widest mb-2 ${product.textColor}`}>
                {product.tag} — ${product.price}.00 MXN
              </span>

              
              <h3 className="font-heading text-2xl md:text-3xl text-[#080708] text-center mb-6 uppercase tracking-wide">
                {product.name}
              </h3>
              
              <button
                type="button"
                onClick={() => openModal(product)}
                className={`mt-auto w-full ${product.btnColor} text-white text-center font-heading py-3.5 rounded-xl transition-all duration-300 tracking-wide text-lg shadow-md cursor-pointer uppercase`}
              >
                🛒 COMPRAR SNACK
              </button>
            </div>
          ))}
        </div>
      </div>
  {/* ================= MODAL INTERACTIVO RESPONSIVE REESTRUCTURADO ================= */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl rounded-[2rem] p-5 sm:p-8 shadow-2xl relative border border-[#134323]/10 max-h-[92vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#080708]/40 hover:text-[#080708] text-xl sm:text-2xl font-bold cursor-pointer p-1 z-10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 items-center w-full mt-2">
              
              {/* Columna Izquierda: Imagen responsiva (Grande en PC, compacta en móvil) */}
                            {/* Columna Izquierda: Imagen responsiva (Grande en PC, compacta en móvil) */}
              <div className={`w-full ${activeProduct.bgColor} rounded-2xl p-4 sm:p-8 flex items-center justify-center aspect-square shadow-inner overflow-hidden max-w-[180px] sm:max-w-full mx-auto`}>
                {/* 🚀 AGREGAMOS WIDTH Y HEIGHT AL MODELO INTERACTIVO PARA EVITAR EL SALTO DE DISEÑO */}
                <img
                  src={selectedSize ? selectedSize.img : activeProduct.img}
                  alt={activeProduct.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.15)] sm:drop-shadow-[0_20px_25px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-105"
                  width="300"
                  height="300"
                />
              </div>


              {/* Columna Derecha: Controles del Producto */}
              <div className="flex flex-col w-full sm:text-left text-center">
                <h4 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#134323] uppercase tracking-wide leading-tight mb-1">
                  {activeProduct.name}
                </h4>
                <p className="font-body font-bold text-[#080708]/50 text-xs sm:text-sm mb-4">
                  Precio Unitario: ${currentPrice}.00 MXN
                </p>

                {/* Selector de Presentación */}
                {activeProduct.hasSizes && (
                  <div className="w-full mb-4">
                    <span className="block font-body font-bold text-[10px] sm:text-xs uppercase text-[#134323]/60 tracking-wider mb-2">
                      Selecciona la Presentación
                    </span>
                    <div className="flex sm:justify-start justify-center gap-3">
                      {activeProduct.sizes.map((size) => (
                        <button
                          key={size.label}
                          type="button"
                          onClick={() => { setSelectedSize(size); setQuantity(1); }}
                          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all duration-200 transform active:scale-95 ${
                            selectedSize?.label === size.label
                              ? `${activeProduct.btnColor} text-white shadow-md shadow-[#134323]/10`
                              : 'bg-gray-100 text-[#080708]/60 hover:bg-gray-200'
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selector de Cantidad */}
                <div className="w-full space-y-1 mb-4 sm:mb-5">
                  <span className="block font-body font-bold text-[10px] sm:text-xs uppercase text-[#134323]/60 tracking-wider">
                    Selecciona la Cantidad
                  </span>
                  <div className="flex items-center justify-center sm:justify-start gap-3 bg-[#FDF9F2] py-1.5 sm:py-2 px-4 rounded-xl sm:rounded-2xl border border-[#134323]/10 max-w-[150px] sm:mx-0 mx-auto shadow-sm">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 bg-white rounded-lg font-heading text-lg shadow-md text-[#134323] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-heading text-xl w-6 text-center text-[#080708] select-none">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 bg-white rounded-lg font-heading text-lg shadow-md text-[#134323] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Caja de Totales */}
                <div className="w-full bg-[#134323]/5 border border-[#134323]/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 space-y-1 text-center sm:text-left">
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
                      {!allowsDiscount && "Esta presentación no aplica para descuentos"}
                    </div>
                  )}
                  
                  <div className="pt-1.5 sm:pt-2 border-t border-[#134323]/10 flex justify-between items-center px-1">
                    <span className="font-body font-bold text-xs sm:text-sm uppercase text-[#080708]/60">Total Final:</span>
                    <span className="font-heading text-xl sm:text-2xl md:text-3xl text-[#134323] tracking-wide">
                      ${totalFinal.toFixed(2)} MXN
                    </span>
                  </div>
                </div>

                        <a 
              
href={`https://wa.me/+523311325566?text=${encodeURIComponent( 
                `¡Hola Flavor Land! Me interesa hacer un pedido.` + 
                `
📦
 Producto: ${activeProduct.name} (${selectedSize ? selectedSize.label : 'Normal'})` + 
                `
🔢
 Cantidad: ${quantity} bolsa(s)` + 
                `
💰
 Total estimado: $${currentPrice * quantity}.00 MXN` 
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
      </div> 
    </div> 
  )} 
</section> 
); 
}

