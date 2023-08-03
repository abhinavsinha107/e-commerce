import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Card from "../../components/card/Card";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2dgl9i3",
        "template_xjmxca2",
        form.current,
        "5Q97n1dxlS2tEyxUu"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully")
        },
        (error) => {
          toast.error(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Your Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Infromation</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+91-9973780798</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>abhinavsinha135@gmail.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Patna, India</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@abhinavsinha107</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
