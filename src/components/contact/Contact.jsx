import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

export const Contact = () => {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      await emailjs.sendForm(
        "service_9vqmojr",
        "template_utr0z3k",
        formRef.current,
        "8vMB1L_9XmHhJo-sK"
      );
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsPending(false);
      setForm({
        subject: "",
        email: "",
        message: "",
      });
    }
  };

  const isButtonDisabled = !form.subject || !form.email || !form.message;

  return (
    <section
      className="section contact"
      id="contact"
    >
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="container contact__container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">
                https://www.linkedin.com/in/nataliia-vyrsta/
              </span>

              <a
                href="https://www.linkedin.com/in/nataliia-vyrsta/"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                natali.vyrsta@gmail.com
              </span>

              <a
                href="mailto:natali.vyrsta@gmail.com"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>

              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@nataliia_vyrsta</span>

              <a
                href="https://t.me/nataliia_vyrsta"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Contact me</h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact__form"
          >
            <div className="contact__form-div">
              <label
                htmlFor=""
                className="contact__form-tag"
              >
                Name
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label
                htmlFor=""
                className="contact__form-tag"
              >
                Mail
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact__form-div  contact__form-area">
              <label
                htmlFor=""
                className="contact__form-tag"
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              className="button button--flex submit-btn"
              type="submit"
              disabled={isButtonDisabled || isPending}
            >
              Send Message
              {isPending ? (
                <svg
                  className="animate-spin button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  width="24"
                  height="24"
                >
                  <path
                    d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3c22.2 52.4 53.9 99.5 94.3 139.9c40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3c40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
