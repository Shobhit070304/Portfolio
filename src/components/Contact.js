import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:selection" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-14 p-6 items-start "
          >
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input
              type="text"
              placeholder="Your email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
