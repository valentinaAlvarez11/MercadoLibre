// components/molecules/HeaderComponent.tsx
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function HeaderComponent() {
  return (
    <header className="bg-[#FFF159] text-gray-800 text-sm">
      {/* Sección Superior */}
      <div className="flex items-center justify-between px-4 py-2 max-w-[1200px] mx-auto">
        {/* Logo y Ubicación */}
        <div className="flex items-center gap-6">
          <a href="/" className="flex-shrink-0">
            <img 
              src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo-1.png" 
              alt="Mercado Libre Logo" 
              className="h-9 w-auto" 
            />
          </a>
          <div className="hidden lg:flex items-center text-xs leading-tight cursor-pointer hover:text-blue-600 transition duration-200">
            <MdLocationOn className="text-2xl mr-1 text-gray-700" />
            <div className="flex flex-col">
              <span className="text-gray-600">
                Ingresa
              </span>
              <span className="font-semibold text-gray-800">
                tu ubicación
              </span>
            </div>
          </div>
        </div>

        {/* Barra de Búsqueda */}
        <div className="flex flex-1 max-w-[600px] mx-4">
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className="flex-1 px-4 py-3 text-gray-800 outline-none rounded-l-md shadow-md focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="bg-gray-200 px-4 flex items-center justify-center rounded-r-md shadow-md hover:bg-gray-300 transition duration-200">
            <FaSearch className="text-gray-600" />
          </button>
        </div>

        {/* Acciones de Usuario y Carrito */}
        <div className="hidden md:flex items-center gap-4 text-xs font-semibold">
          <a href="#" className="hover:text-blue-600 transition duration-200 hidden lg:block">
            Crea tu cuenta
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-200 hidden lg:block">
            Ingresa
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-200">
            Mis compras
          </a>
          <div className="relative cursor-pointer hover:text-blue-600 transition duration-200">
            <FaShoppingCart className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Sección Menú Inferior (Categorías) */}
      <nav className="bg-gray-100 text-gray-700 text-sm border-t border-gray-200 shadow-sm hidden md:block">
        <div className="max-w-[1200px] mx-auto flex items-center gap-5 px-4 py-2">
          <a href="#" className="hover:text-blue-600 transition duration-200">Categorías</a>
          <a href="#" className="hover:text-blue-600 transition duration-200">Ofertas</a>
          <a href="#" className="hover:text-blue-600 transition duration-200">Historial</a>
          <a href="#" className="hover:text-blue-600 transition duration-200">Supermercado</a>
          <a href="#" className="hover:text-blue-600 transition duration-200">Moda</a>
          <a href="#" className="hover:text-blue-600 transition duration-200">Vender</a>
          <a href="#" className="hover:text-blue-600 transition duration-200">Ayuda/PQR</a>
        </div>
      </nav>
    </header>
  );
}