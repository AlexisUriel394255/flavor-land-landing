// src/components/ProductGrid.jsx
import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Betabel Adobado',
    tag: 'Salado / Picosito',
    img: '/images/betabeladobado.webp',
    bgColor: 'bg-[#9A1B36]/10', // Fondo Betabel suave
    textColor: 'text-[#9A1B36]',
    btnColor: 'bg-[#9A1B36] hover:bg-[#9A1B36]/90'
  },
  {
    id: 2,
    name: 'Camote Adobado',
    tag: 'Salado / Crunch',
    img: '/images/camoteadobado.webp',
    bgColor: 'bg-[#E28731]/10', // Fondo Camote suave
    textColor: 'text-[#E28731]',
    btnColor: 'bg-[#E28731] hover:bg-[#E28731]/90'
  },
  {
    id: 3,
    name: 'Jícama con Chile',
    tag: 'El favorito de todos',
    // CORRECCIÓN: Ajustamos el nombre exacto de la imagen de jícama con chile
    img: '/images/jicamaconchile.webp', 
    bgColor: 'bg-[#134323]/10', // Fondo Verde Bosque suave
    textColor: 'text-[#134323]',
    btnColor: 'bg-[#134323] hover:bg-[#134323]/90'
  },
  {
    id: 4,
    name: 'Jícama con Limón',
    tag: 'Fresco y Cítrico',
    img: '/images/jicamaconlimon.webp',
    bgColor: 'bg-[#60A62E]/10', // Fondo Verde Lima suave
    textColor: 'text-[#60A62E]',
    btnColor: 'bg-[#60A62E] hover:bg-[#60A62E]/90'
  },
  {
    id: 5,
    name: 'Plátano con Canela',
    tag: 'Dulce / Saludable',
    img: '/images/platanoconcanela.webp',
    bgColor: 'bg-[#E28731]/10', // Fondo Plátano/Camote suave
    textColor: 'text-[#E28731]',
    btnColor: 'bg-[#E28731] hover:bg-[#E28731]/90'
  }
];

export default function ProductGrid() {
  const [selectedTag, setSelectedTag] = useState('Todos');
  const categories = ['Todos', 'Salado', 'Dulce', 'Jícama'];

  const filteredProducts = productsData.filter(product => {
    if (selectedTag === 'Todos') return true;
    if (selectedTag === 'Jícama') return product.name.includes('Jícama');
    return product.tag.includes(selectedTag);
  });

  return (
    <section id="productos" className="py-20 px-4 bg-[#FDF9F2]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-[#134323] mb-4 tracking-wide">
            ¡Elige tu Antojo Saludable!
          </h2>
          <p className="font-body text-[#080708]/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Nuestras frituras artesanales están llenas de sabor y color natural. ¡Sin freír y sin remordimientos!
          </p>
          
          {/* Botones de Filtro Estilizados */}
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

        {/* Malla Dinámica de Tarjetas de Colores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`bg-white rounded-3xl p-6 shadow-lg shadow-[#134323]/5 border border-[#134323]/5 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center`}
            >
              {/* Contenedor de la Imagen con Fondo de Color Corporativo Dinámico */}
              <div className={`w-full h-64 ${product.bgColor} rounded-2xl p-6 flex items-center justify-center mb-6 overflow-hidden relative group`}>
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <span className={`text-xs font-body font-bold uppercase tracking-widest mb-2 ${product.textColor}`}>
                {product.tag}
              </span>
              
              <h3 className="font-heading text-2xl md:text-3xl text-[#080708] text-center mb-6">
                {product.name}
              </h3>
              
              <a 
                href={`https://wa.me{encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full ${product.btnColor} text-white text-center font-heading py-3.5 rounded-xl transition-all duration-300 tracking-wide text-lg shadow-md`}
              >
                PEDIR POR WHATSAPP
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
