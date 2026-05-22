function Home() {
  return (
    <div className="page">

      {/* Hero Section */}

      <section className="hero">

        <h1>
          Build Modern <br /> Web Experiences
        </h1>

        <p>
          We create responsive, modern, and powerful
          web applications using MERN Stack technologies.
        </p>

        <button className="btn">
          Explore More
        </button>

      </section>

      {/* Features Section */}

      <section>

        <h2 className="section-title">
          Why Choose Us
        </h2>

        <div className="features-container">

          <div className="feature-card">

            <div className="feature-icon">⚡</div>

            <h3>Fast Performance</h3>

            <p>
              Optimized and high-performance websites
              with smooth user experience.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">🎨</div>

            <h3>Modern UI Design</h3>

            <p>
              Beautiful and responsive interfaces
              designed with latest trends.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">🔒</div>

            <h3>Secure Systems</h3>

            <p>
              Secure authentication and protected
              backend architecture.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="home-stats">

        <div className="home-stat-box">
          <h2>50+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="home-stat-box">
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="home-stat-box">
          <h2>5+</h2>
          <p>Technologies</p>
        </div>

      </section>

      {/* CTA Section */}

      <section className="cta-section">

        <h2>
          Ready To Build Your Dream Website?
        </h2>

        <p>
          Let’s create modern and responsive web
          applications together.
        </p>

        <button className="btn">
          Contact Us
        </button>

      </section>

    </div>
  );
}

export default Home;