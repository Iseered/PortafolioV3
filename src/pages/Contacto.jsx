
import emailjs from "@emailjs/browser";
import  { useRef } from 'react';



function Contacto() {

const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
    .then((result) => {
      console.log(result.text);
      alert('Mensaje enviado con éxito!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      
    });
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Form Data:", form.current);
};
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-green-500 mb-6">Contáctame</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Información de contacto */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center text-white">
            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+51 930835332</span>
          </div>
          
          <div className="flex items-center text-white">
            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>mbrr2712@gmail.com</span>
          </div>
          <div className="flex items-center text-white">
            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>www.website.com</span>
          </div>
        </div>
        
        {/* Formulario de contacto */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-white mb-4">Enviame un mensaje</h3>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
  <div className="flex gap-4">
    <input type="text" name="from_name" placeholder="Nombre" className="w-1/2 bg-gray-700 text-white p-2 rounded" required />
    <input type="email" name="from_email" placeholder="Correo" className="w-1/2 bg-gray-700 text-white p-2 rounded" required />
  </div>
  <textarea name="message" placeholder="Escribe tu mensaje aquí..." className="w-full bg-gray-700 text-white p-2 rounded h-32" required></textarea>
  <input type="hidden" name="to_name" value="Brian" />
  <input type="hidden" name="to_email" value="mbrr2712@gmail.com" />
  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Enviar</button>
</form>
        </div>
      </div>
      
      {/* Iconos de redes sociales */}
      <div className="mt-6 flex justify-end space-x-4">
  <a href="https://linkedin.com/in/marlon-brian-ramirez-rueda/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
  <a href="https://github.com/Iseered" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </a>
</div>
    </div>
  </div>
  )
}

export default Contacto
