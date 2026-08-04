// Componente de React: Resenas.jsx
import React from 'react';

const testimonios = [
  {
    id: 1,
    nombre: "Mariana Gómez",
    calificacion: "⭐⭐⭐⭐⭐",
    comentario: "¡Las frituras de camote adobado son una joya! Súper crujientes y no caen pesadas para el gimnasio. 100% recomendadas.",
    ciudad: "Zapopan, Jal."
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    calificacion: "⭐⭐⭐⭐⭐",
    comentario: "Excelente opción para los que cuidamos la dieta. La jícama deshidratada calma el antojo de la tarde perfectamente. El envío llegó rapidísimo.",
    ciudad: "Guadalajara, Jal."
  },
  {
    id: 3,
    nombre: "Sofía Villarreal",
    calificacion: "⭐⭐⭐⭐⭐",
    comentario: "Compré el paquete de mayoreo para mi estudio de pilates y a mis alumnas les encantaron. Sabores muy naturales y empaque muy práctico.",
    ciudad: "Tlaquepaque, Jal."
  }
];

export default function Resenas() {
  return (
    <section className="bg-gray-50 py-12 px-4 rounded-2xl my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Lo que dicen nuestros clientes fit 🍿✨</h2>
        <p className="text-gray-600 mb-8">Más de 500 personas en Guadalajara ya disfrutan de Flavor Land sin remordimientos.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left flex flex-col justify-between">
              <div>
                <div className="text-yellow-400 text-lg mb-2">{item.calificacion}</div>
                <p className="text-gray-700 italic text-sm mb-4">"{item.comentario}"</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{item.nombre}</h4>
                <span className="text-xs text-green-600 font-medium">{item.ciudad}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
