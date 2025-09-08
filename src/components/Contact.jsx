// import React from "react";
import "../styles/contact.css"; // Ensure this path is correct

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Let's Connect</p>
      <p className="contact-description">
        If you would like to reach out, feel free to use the contact form or
        connect with me through my social profiles.
      </p>

      <div className="contact-container">
        {/* Left side info */}
        <div className="contact-info">
          <p>
            <i className="fas fa-phone"></i> <strong>Phone:</strong>{" "}
            +91 6200 834 631
          </p>
          <p>
            <i className="fas fa-envelope"></i> <strong>Email:</strong>{" "}
            <a href="mailto:puja84323@gmail.com">
              puja84323@gmail.com
            </a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> <strong>Location:</strong>{" "}
            Noida , India
          </p>

          {/* Social Icons */}
          <div className="social-links">
            <h4>Connect with me</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/puja-kumari-4ba885250/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Puja4738"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://leetcode.com/u/Puja4738/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon leetcode"
              >
                <i className="fas fa-code"></i>
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/puja8mm0o/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon gfg"
              >
                <i className="fab fa-gg"></i>
              </a>
              <a
                href="mailto:puja84323@gmail.com"
                className="social-icon email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.hackerrank.com/profile/puja84323"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hackerrank"
              >
                <i className="fab fa-hackerrank"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="contact-form">
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" required />

            <label>Your Email</label>
            <input type="email" placeholder="john.doe@example.com" required />

            <label>Your Message</label>
            <textarea
              placeholder="Let's build something amazing together!"
              required
            ></textarea>

            <button type="submit" className="send-btn">
              <i className="fas fa-paper-plane"></i> Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;