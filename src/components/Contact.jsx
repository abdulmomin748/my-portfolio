import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const name = nameRef.current.value;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then((response) => {
        if (response.status === 200) {
          // alert('done')

          toast.success(`Thanks for messaging me, ${name}`);
          formRef.current.reset();
        }
      })
      .catch(() => {
        toast.error("Message failed. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="section contact-sec " id="contact">
      <div className="container">
        <div className="lg:flex md:flex">
          <div className="lg:w-1/2 md:w-1/2">
            <h2 className="exp-ttle mb-16 text-5xl font-semibold  text-left section-title relative pb-6">
              Contact
            </h2>
            <h3 className="text-3xl mb-6">Thakurgaon, Rangpur, Bangladesh</h3>
            <h3 className="text-3xl mb-6">+8801701910748</h3>
            <p className="text-base">mominurrahman10748@gmail.com</p>
          </div>

          <div className="lg:w-1/2 md:w-1/2">
            <h3 className="text-3xl mb-10">Let’s Start a Conversation</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                ref={nameRef}
                type="text"
                name="to_name"
                placeholder="Name"
                required
                className="w-full mb-6 py-4 bg-transparent transition-all border-b !border-b-[#d8d4d4] focus:border-b focus:text-gray-400 placeholder:text-gray-300 focus:border-b-[#f57820] text-gray-200 focus:bg-white px-4 outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                className="w-full mb-6 py-4 bg-transparent transition-all border-b !border-b-[#d8d4d4] focus:border-b focus:text-gray-400 placeholder:text-gray-300 focus:border-b-[#f57820] text-gray-200 focus:bg-white px-4 outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full mb-6 py-4 bg-transparent transition-all border-b !border-b-[#d8d4d4] focus:border-b focus:text-gray-400 placeholder:text-gray-300 focus:border-b-[#f57820] text-gray-200 focus:bg-white px-4 outline-none "
              />
              <button
                type="submit"
                disabled={loading}
                className={`btn-1 rounded-xl bg-primary  ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
