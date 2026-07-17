# 🍿 Flavor Land - Landing Page

Landing page de alto rendimiento desarrollada para **Flavor Land**, una marca artesanal de snacks saludables y frituras deshidratadas (Betabel, Camote, Jícama y Plátano). El sitio web fue construido desde cero con un enfoque de optimización extrema para garantizar la máxima velocidad de carga y una experiencia de usuario fluida tanto en dispositivos móviles como en computadoras.

---

## 🚀 Stack Tecnológico

Para cumplir con las exigencias de velocidad de Google y evitar penalizaciones de posicionamiento (SEO), se seleccionó la siguiente arquitectura moderna:

*   **[Astro Architecture](https://astro.build) (v7.1.0):** Utilizado como el motor principal para generar HTML estático ultraligero, eliminando el JavaScript innecesario del lado del cliente por defecto.
*   **[React](https://react.dev):** Implementado exclusivamente en la sección del catálogo mediante componentes interactivos para gestionar los filtros dinámicos en tiempo real sin recargar la página.
*   **[Tailwind CSS](https://tailwindcss.com) (v4.0):** Motor de estilos de última generación integrado de forma nativa a través de variables CSS globales, garantizando un diseño limpio, moderno y adaptable (*Responsive Design*).
*   **Formato WebP:** Todas las imágenes y empaques del cliente fueron convertidos y optimizados en formato `.webp` para reducir drásticamente el peso de transferencia de red.

---

## 🎨 Identidad Visual y Paleta de Colores

El diseño se basó estrictamente en la identidad visual del logotipo del cliente, inyectando los colores mediante variables temáticas en los estilos globales (`src/styles/global.css`):

*   **Fondo Orgánico (Crema):** `#FDF9F2` (Aporta una estética natural, superior al blanco puro).
*   **Verde Principal (Bosque):** `#134323` (Texto principal y branding).
*   **Verde Secundario (Lima Fit):** `#60A62E` (Acentos de salud y nutrición).
*   **Acento Betabel (Guinda):** `#9A1B36` (Títulos destacados y tarjetas).
*   **Acento Camote/Plátano (Naranja):** `#E28731` (Botones de llamado a la acción / CTA).

### 🔤 Tipografías Seleccionadas:
*   **Títulos:** *Lilita One* (Estilo antojadizo, amigable y artesanal).
*   **Cuerpo de Texto:** *Quicksand* (Tipografía redondeada de alta legibilidad en pantallas móviles).

---

## 📦 Características Principales

1.  **Menú de Navegación Premium:** Navbar adaptable que integra el logotipo oficial de la marca y enlaces directos con desplazamiento suave (*scroll-smooth*).
2.  **Hero Section Asimétrica:** Zona de bienvenida de alto impacto con copys persuasivos y bloques informativos que destacan los pilares de la marca (*Sin Freír, 100% Natural*).
3.  **Catálogo Reactivo Filtrable:** Malla de productos gobernada por React que permite clasificar instantáneamente entre botanas *Saladas, Dulces o por ingredientes* mediante animaciones fluidas.
4.  **Enlaces Dinámicos a WhatsApp:** Integración personalizada con la API nativa de WhatsApp (`wa.me`). Al dar clic en *"Pedir por WhatsApp"*, el sistema detecta el empaque seleccionado y prellena el mensaje del cliente de forma automatizada (ej: `Hola, me interesa el producto: Betabel Adobado`).
5.  **Footer Corporativo:** Cierre formal con canales de atención específicos para dudas generales y solicitudes de distribución por mayoreo.

---

## 🛠️ Instalación y Desarrollo Local

Si deseas clonar este proyecto y ejecutarlo en tu entorno local, sigue estos pasos desde tu terminal (Git Bash o PowerShell):

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   cd flavor-land-landing
   ```

2. **Instalar dependencias obligatorias (respetando el árbol de versiones):**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   *El sitio estará disponible en: `http://localhost:4321`*

4. **Probar el sitio en dispositivos móviles reales (Exponer red Wi-Fi):**
   ```bash
   npm run dev -- --host
   ```
   *Abre el enlace de la dirección `Network` provisto por la terminal desde tu celular.*

---

## 💾 Historial de Guardado (Git)

El proyecto mantiene un control de versiones limpio y modular bajo la rama principal `main`, separando las características implementadas (`feat`) de las correcciones de código (`fix`).
