import { Link } from "react-router-dom";


function About() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl text-white">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Acerca de mí</h2>
        <h3 className="text-xl font-semibold mb-4">Me llamo Brian</h3>
        
        <p className="mb-6 text-gray-300">
       

Estudie la carrera de ingeniería de software con experiencia en ciberseguridad y pasión por la 
innovación tecnológica. Mi formación en ingeniería me ha proporcionado 
una sólida base en desarrollo de software, mientras que mi experiencia 
laboral en ciberseguridad me ha permitido adquirir conocimientos especializados 
en seguridad informática. Constantemente busco y desarrollo ideas innovadoras 
para resolver problemas complejos. 
Mi combinación única de habilidades técnicas, experiencia en seguridad y mentalidad innovadora 
me permite aportar una perspectiva valiosa y multifacética a los proyectos de tecnología.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p><span className="font-semibold">Idioma:</span> Ingles básico profesional</p>
            <p><span className="font-semibold">Edad:</span> 27</p>
            
          </div>
          <div>
            <p><span className="font-semibold">Disponibilidad:</span> 24/7</p>
            <p><span className="font-semibold">Celular :</span> +51 930835332</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Skills</h4>
          <div className="space-y-2">
            <SkillBar skill="CSS" percentage={70} />
            <SkillBar skill="JavaScript" percentage={70} />
            <SkillBar skill="Python" percentage={60} />
            <SkillBar skill="Java" percentage={30} />
          </div>
        </div>

        <div className="flex space-x-4">
          
          <Link to="/contact" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300">
            Contáctame
          </Link>
        </div>
      </div>
    </div>
  );
}
function SkillBar({ skill, percentage }) {
    return (
      <div>
        <div className="flex justify-between mb-1">
          <span>{skill}</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
export default About
