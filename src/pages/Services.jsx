function Services() {
  return (
    <div className="page">

      <section className="services-hero">

        <h1 className="services-title">
          Our Services
        </h1>

        <p className="services-text">
          We provide high quality web development services
          using modern technologies and creative UI designs.
        </p>

      </section>

      <section className="services-container">

        <div className="service-card">

          <div className="service-icon">💻</div>

          <h2>Frontend Development</h2>

          <p>
            Modern responsive websites using React JS,
            HTML, CSS, and JavaScript.
          </p>

        </div>

        <div className="service-card">

          <div className="service-icon">⚙️</div>

          <h2>Backend Development</h2>

          <p>
            Powerful backend APIs using Node JS,
            Express JS, and MongoDB.
          </p>

        </div>

        <div className="service-card">

          <div className="service-icon">🎨</div>

          <h2>UI/UX Design</h2>

          <p>
            Beautiful and user-friendly interfaces
            with modern design principles.
          </p>

        </div>

        <div className="service-card">

          <div className="service-icon">📱</div>

          <h2>Responsive Design</h2>

          <p>
            Fully responsive websites that work perfectly
            on all devices and screen sizes.
          </p>

        </div>

        <div className="service-card">

          <div className="service-icon">🚀</div>

          <h2>Performance Optimization</h2>

          <p>
            Fast loading websites with optimized code
            and excellent performance.
          </p>

        </div>

        <div className="service-card">

          <div className="service-icon">🔒</div>

          <h2>Website Security</h2>

          <p>
            Secure applications with authentication,
            authorization, and protected APIs.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Services;