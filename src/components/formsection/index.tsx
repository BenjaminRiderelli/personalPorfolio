"use client";
import { ChangeEvent, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./formsection.module.css";

interface formData {
  name: string;
  email: string;
  message: string;
}

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const FormSection = () => {
  const { ref, inView: rocketIsVisible } = useInView();
  const [isPosting, setIsPosting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (formData: formData) => {
    if (!expression.test(formData.email)) {
      setFormData({
        name: formData.name,
        email: "Please enter a valid email",
        message: formData.message,
      });
      return;
    } else {
      try {
        setIsPosting(true);
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        setIsPosting(false);
        setFormData({ name: "", email: "", message: "Thank you!" });
      } catch (e: any) {
        setFormData({ name: "", email: "", message: e.body.message });
      }
    }
  };

  return (
    <section className="flex flex-wrap-reverse md:gap-20 lg:gap-80 py-8 justify-center items-center min-h-screen bg-light-bg-color dark:bg-dark-bg-color border-2 border-light-text-color dark:border-dark-text-color">
      <div className="w-3/4 h-[500px] md:w-1/2 lg:w-1/3 md:min-h-[600px] border-2 border-light-text-color dark:border-dark-text-color">
        <form
          className={`flex flex-col items-start justify-between md:justify-around w-full h-full p-2 pt-8 text-dark-text-color dark:text-light-text-color`}
        >
          <div className="flex flex-col w-full text-light-text-color dark:text-dark-text-color  ">
            <label htmlFor="name">Name</label>
            <input
              value={formData.name}
              onChange={handleChange}
              id="name"
              name="name"
              className="border-2 border-light-text-color dark:border-dark-text-color h-12 p-2 text-xl"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full text-light-text-color dark:text-dark-text-color">
            <label htmlFor="contact">Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              id="contact"
              name="email"
              className="border-2 border-light-text-color dark:border-dark-text-color h-12 p-2 text-xl"
              type="email"
            />
          </div>
          <div className="flex flex-col w-full text-light-text-color dark:text-dark-text-color">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              cols={10}
              name="message"
              className="textarea border-2 border-light-text-color dark:border-dark-text-color p-2 text-xl"
            ></textarea>
          </div>

          <div className="flex justify-between w-full ">
            <p ref={ref} className="">
              <span
                className={`${styles.rocket} ${
                  rocketIsVisible ? styles.animateRocket : ""
                }`}
              >
                🚀
              </span>
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(formData);
              }}
              className="border-2 border-light-text-color dark:border-dark-text-color w-1/2 active:actionshrink text-2xl text-light-text-color dark:text-dark-text-color"
            >
              {isPosting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 w-3/4 justify-center md:w-1/4 md:min-h-[600px] text-light-text-color dark:text-dark-text-color">
        <h1 className="text-4xl font-extrabold">
          Impressed by the cool fonts and the flying rocket?
        </h1>
        <p className="text-2xl">Hit me up with a message 😁</p>
      </div>
    </section>
  );
};

export default FormSection;
