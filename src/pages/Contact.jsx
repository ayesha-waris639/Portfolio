import Button from "../components/Button";

function Contact() {
  return (
    <div className="page">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          type="email"
          placeholder="Enter Your Email"
        />

        <textarea
          rows="6"
          placeholder="Enter Message"
        ></textarea>

        <Button text="Send Message" />

      </form>

    </div>
  );
}

export default Contact;