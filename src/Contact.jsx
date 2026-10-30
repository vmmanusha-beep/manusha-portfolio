
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
     await emailjs.send(
  "service_sfzagg8",
  "template_sgmxbur",
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  "b185clSm40vFxVXYX"
);

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Message could not be sent. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-container">
      <div className="section-heading">
        <p className="eyebrow">04 — GET IN TOUCH</p>
        <h2>
          Have an idea? <span className="gradient-text">Let's build it.</span>
        </h2>
        <p className="section-subtitle">
          I'm always happy to connect, learn from others, and explore exciting
          opportunities in technology.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="button button-primary contact-button"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message ↗"}
        </button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
