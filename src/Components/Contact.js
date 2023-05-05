import "./ContactStyle.css";
import { useState } from "react";
import Img2 from "../assets/5124556.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    fetch("/api/send-email.php", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="contact">
      <div className="image">
        <img src={Img2} alt="img" />
      </div>
      <div className="contact-form">
        <form method="post">
          <h2>Contact Us</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
          />

          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            id="subject"
            name="subject"
            required
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            required
          />

          <input type="submit" className="btn-main" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
