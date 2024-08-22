import ProjectCard from "../componentes/ProjectCard.jsx"

const Gallery = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-7xl mx-auto">
        <ProjectCard
          title="Mi Proyecto Increíble 1"
          image="/ruta/a/la/imagen1.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto1"
          webLink="https://su-proyecto1.com"
        />
        <ProjectCard
          title="Mi Proyecto Increíble 2"
          image="/ruta/a/la/imagen2.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto2"
          webLink="https://su-proyecto2.com"
        />
        <ProjectCard
          title="Mi Proyecto Increíble 3"
          image="/ruta/a/la/imagen3.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto3"
          webLink="https://su-proyecto3.com"
        />
        <ProjectCard
          title="Mi Proyecto Increíble 4"
          image="/ruta/a/la/imagen4.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto4"
          webLink="https://su-proyecto4.com"
        />
          <ProjectCard
          title="Mi Proyecto Increíble 5"
          image="/ruta/a/la/imagen4.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto4"
          webLink="https://su-proyecto4.com"
        />
          <ProjectCard
          title="Mi Proyecto Increíble 6"
          image="/ruta/a/la/imagen4.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto4"
          webLink="https://su-proyecto4.com"
        />
          <ProjectCard
          title="Mi Proyecto Increíble 7"
          image="/ruta/a/la/imagen4.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto4"
          webLink="https://su-proyecto4.com"
        />
          <ProjectCard
          title="Mi Proyecto Increíble 8"
          image="/ruta/a/la/imagen4.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto4"
          webLink="https://su-proyecto4.com"
        />
          <ProjectCard
          title="Mi Proyecto Increíble 9"
          image="/ruta/a/la/imagen4.jpg"
          githubLink="https://github.com/su-usuario/su-proyecto4"
          webLink="https://su-proyecto4.com"
        />
      </div>
    </div>
  )
}

export default Gallery