function Projects() {
  return (
    <div className="page">

      <section className="projects-hero">

        <h1 className="projects-title">
          Our Projects
        </h1>

        <p className="projects-text">
          Explore some of our modern and responsive
          web development projects built using
          MERN Stack technologies.
        </p>

      </section>

      <section className="projects-container">

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="project"
          />

          <div className="project-content">

            <h2>E-Commerce Website</h2>

            <p>
              Modern shopping website with cart,
              authentication, and payment integration.
            </p>

            <button className="btn">
              View Project
            </button>

          </div>

        </div>

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            alt="project"
          />

          <div className="project-content">

            <h2>Blog Website</h2>

            <p>
              Responsive blog platform with categories,
              routing, and dynamic content.
            </p>

            <button className="btn">
              View Project
            </button>

          </div>

        </div>

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="project"
          />

          <div className="project-content">

            <h2>Portfolio Website</h2>

            <p>
              Personal portfolio website with animations,
              responsive UI, and modern design.
            </p>

            <button className="btn">
              View Project
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Projects;