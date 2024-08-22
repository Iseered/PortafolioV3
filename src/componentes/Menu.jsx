import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4 flex flex-col justify-center">
  <nav>
    <ul className="space-y-8">
      <li className="py-3 px-6 hover:bg-gray-800 rounded transition duration-200">
        <Link to="/" className="flex items-center text-lg">
          <svg className="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Inicio
        </Link>
      </li>
      <li className="py-3 px-6 hover:bg-gray-800 rounded transition duration-200">
        <Link to="/about" className="flex items-center text-lg">
          <svg className="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Acerca de mí
        </Link>
      </li>
      <li className="py-3 px-6 hover:bg-gray-800 rounded transition duration-200">
        <Link to="/gallery" className="flex items-center text-lg">
          <svg className="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Galeria
        </Link>
      </li>
      <li className="py-3 px-6 hover:bg-gray-800 rounded transition duration-200">
        <Link to="/contact" className="flex items-center text-lg">
          <svg className="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Contáctame
        </Link>
      </li>
    </ul>
  </nav>
</div>
    
  )
}

export default Menu
