import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin,  } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6qd7rpr",
        "template_kiria5b",
        e.target,
        "UH5SBwz4SX0JCkViQ",
      )
      .then(
        () => {
          alert("Message Sent Successfully");
        },
        (error) => {
          alert("Failed To Send Message");
          console.log(error);
        },
      );

    e.target.reset();
  };

  return (
    <section className="min-h-screen px-8 py-16 bg-[#020617] text-white ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-1xl mx-auto text-left text-5xl font-bold mb-16"
      >
        Contact <span className="text-violet-500">Me</span>
        <p className="text-gray-400 text-lg leading-10">
          Let's connect and build something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 item-start mt-15">
        {/*left layout*/}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 h-fit">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Let's Work Together{" "}
          </h2>

          <form onSubmit={sendEmail} className="space-y-4">
            {/* NAME */}

            <div>
              <label className="block text-white mb-1" htmlFor="name">
                Name
              </label>

              <input
                className="w-full px-4 py-2 rounded-lg bg-[#020617] border border-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            {/* EMAIL */}

            <div>
              <label className="block text-white mb-1" htmlFor="email">
                Email
              </label>

              <input
                className="w-full px-4 py-2 rounded-lg bg-[#020617] border border-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            {/* SUBJECT */}

            <div>
              <label className="block text-white mb-1" htmlFor="subject">
                Subject
              </label>

              <input
                className="w-full px-4 py-2 rounded-lg bg-[#020617] border border-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
                required
              />
            </div>

            {/* MESSAGE */}

            <div>
              <label className="block text-white mb-1" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full px-4 py-2 rounded-lg bg-[#020617] border border-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="
              flex items-center gap-3
              bg-gradient-to-r
              from-violet-600
              to-purple-500
              text-white
              text-lg
              font-semibold
              px-8 py-4
              rounded-2xl
              cursor-pointer
              hover:scale-105
              transition duration-300
              "
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>

        {/*right layout */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 h-fit">
          <h2 className="text-2xl font-bold mb-4 text-center">Get in touch</h2>
          <div className="mx-auto mb-8 h-px w-full bg-gray-700 mt-15" />

          <div className=" item-center gap-6">
            {/*Email  */}

            <div className="flex gap-6 mb-6 px-5">
              <Mail size={30} className="text-violet-500" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-400">
                  {" "}
                  <a
                    href="mailto:kishanbhimani256@gmail.com"
                    className="text-violet-500 hover:underline"
                  >
                    kishanbhimani256@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/*Phone Number*/}

            <div className="flex gap-6 mb-6 px-5">
              <Phone size={30} className="text-violet-500" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-400">
                  {" "}
                  <a
                    href="tel:+91 95108-00921"
                    className="text-violet-500 hover:underline"
                  >
                    +91 95108-00921
                  </a>
                </p>
              </div>
            </div>

            {/*Location */}

            <div className="flex gap-6 mb-6 px-5">
              <MapPin size={30} className="text-violet-500" />
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-gray-400">Ahmedabad, Gujarat, India</p>
              </div>
            </div>

            <div className="mx-auto mb-8 h-px w-full bg-gray-700 mt-10" />

            <div className="mt-10">
              <h3 className="text-white text-lg font-semibold mb-5">Connect</h3>

              <div className="flex gap-5">
                {/* GITHUB */}

                <a
                  href="https://github.com/kishani256"
                  target="_blank"
                  className="
      w-16 h-16
      rounded-2xl
      bg-[#111827]
      border border-gray-800
      flex items-center justify-center
      text-white
      hover:bg-violet-600
      hover:scale-110
      transition duration-300
      shadow-lg shadow-violet-500/10
      "
                >
                  < FaGithub  size={28} />
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/kishan-bhimani-3a5247385"
                  target="_blank"
                  className="
      w-16 h-16
      rounded-2xl
      bg-[#111827]
      border border-gray-800
      flex items-center justify-center
      text-cyan-400
      hover:bg-cyan-500
      hover:text-white
      hover:scale-110
      transition duration-300
      shadow-lg shadow-cyan-500/10
      "
                >
                  <FaLinkedin size={28} />
                </a>

                {/* MAIL */}

                <a
                  href="mailto:kishanbhimani256@gmail.com"
                  className="
      w-16 h-16
      rounded-2xl
      bg-[#111827]
      border border-gray-800
      flex items-center justify-center
      text-violet-400
      hover:bg-violet-500
      hover:text-white
      hover:scale-110
      transition duration-300
      shadow-lg shadow-violet-500/10
      "
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
