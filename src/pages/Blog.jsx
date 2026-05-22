function Blog() {
  return (
    <div className="page">

      <section className="blog-hero">

        <h1 className="blog-title">
          Latest Blogs
        </h1>

        <p className="blog-text">
          Read our latest articles about React,
          MERN Stack, UI Design, and Web Development.
        </p>

      </section>

      <section className="blog-container">

        <div className="blog-card">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="blog"
          />

          <div className="blog-content">

            <h2>React Router Guide</h2>

            <p>
              Learn how to create multiple pages
              in React applications using React Router.
            </p>

            <button className="btn">
              Read More
            </button>

          </div>

        </div>

        <div className="blog-card">

          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="blog"
          />

          <div className="blog-content">

            <h2>MERN Stack Development</h2>

            <p>
              Complete guide to building full stack
              applications using MERN technologies.
            </p>

            <button className="btn">
              Read More
            </button>

          </div>

        </div>

        <div className="blog-card">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="blog"
          />

          <div className="blog-content">

            <h2>Responsive Web Design</h2>

            <p>
              Tips and techniques for creating
              responsive and mobile-friendly websites.
            </p>

            <button className="btn">
              Read More
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Blog;