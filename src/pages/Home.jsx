import { Link } from 'react-router-dom';

import isla from '../assets/isla.jpg';
function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Texto y botones */}
        <div className="md:w-1/2 text-white mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hola, soy <span className="text-green-500">Brian</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Un desarrollador de software
          </h2>
          <p className="text-gray-400 mb-6">
            Me apasiona desarrollar software y en mi tiempo libre probar las nuevas tendencias tecnológicas.
          </p>
          <div className="flex space-x-4">
            
            <Link to="/contact" className="border border-green-500 text-green-500 px-6 py-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
              Contáctame
            </Link>
          </div>
        </div>
        
        {/* Imagen */}
        <div className="md:w-1/2 relative">
          <div className="w-full h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
            <img 
              src={isla}
              alt="Isla" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Esquinas decorativas */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;