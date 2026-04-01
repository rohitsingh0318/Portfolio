import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnhvfa-7sCFrLEQGLkqtddFtMGqv_qbH_8mafx_XE11XV96neelLQJdtXp2y1FGNTAvQ/exec"; // 🔴 Apna URL yahan paste karo

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // ✅ Google Script ke liye zaroori
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // no-cors mein response nahi milta, isliye seedha success maan lo
      setStatus("success");
      setFormData({ fullName: "", email: "", mobile: "", subject: "", message: "" }); // Form reset

    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container container">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        {/* ✅ Status Messages */}
        {status === "success" && (
          <p style={{ color: "green", textAlign: "center", marginBottom: "1rem" }}>
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <form onSubmit={handleSubmit}> {/* ✅ action="#" hataya, onSubmit lagaya */}

          {/* Row 1 */}
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="focus"></span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="input-box">
            <div className="input-field">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <span className="focus"></span>
            </div>
          </div>

          {/* Message */}
          <div className="textarea-field">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          {/* Button */}
          <div className="btn-box btns">
            <button
              type="submit"
              className="btn"
              disabled={status === "loading"} // ✅ Double submit rokta hai
            >
              {status === "loading" ? "Sending..." : "Submit"} {/* ✅ Loading text */}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}