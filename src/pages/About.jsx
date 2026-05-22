function About() {
  return (
    <div className="page">

      <section className="about-section">

        <div className="about-left">

          <h1 className="about-title">
            About Us
          </h1>

          <p className="content">
            We are passionate MERN Stack developers creating modern,
            responsive, and high-performance web applications using
            React, Node.js, Express, and MongoDB.
          </p>

          <p className="content">
            Our mission is to deliver beautiful user interfaces,
            scalable backend systems, and excellent user experiences.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h2>20+</h2>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h2>15+</h2>
              <p>Clients</p>
            </div>

            <div className="stat-box">
              <h2>2+</h2>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

        <div className="about-right">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="developer"
          />

        </div>

      </section>

      <section className="skills-section">

        <h2 className="section-title">
          Our Skills
        </h2>

        <div className="cards-container">

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React JS, HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node JS, Express JS, REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB, Firebase, MySQL</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;