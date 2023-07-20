import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError("");
    if (emailValue.trim() === "") {
      setEmailError("Please enter your email.");
    } else if (!isValidEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = (e) => {
    handleChange(e);
    e.preventDefault();
    console.log("form", form);

    emailjs
      .send(
        "service_z068fa9",
        "template_w4dug38",
        {
          from_name: form.name,
          to_name: "ayush",
          from_email: form.email,
          to_email: "ayushsaxena452@gmail.com",
          message: form.message,
        },
        "DUByFhMOx8YVtZrgi"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-2" style={{ fontSize: 20, marginTop: 10 }}>
            Let's connect and make some digital magic happen! Reach out to me,
            and together, we'll turn ideas into reality.
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            ref={formRef}
            onSubmit={handleClick}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              viewport={{ once: false, amount: 0.3 }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              onClick={handleClick}
              {...(loading ? "Sending..." : "Send")}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
