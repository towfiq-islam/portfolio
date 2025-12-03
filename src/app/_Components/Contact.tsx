"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await fetch("https://formspree.io/f/xlddongn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.ok === true) {
        toast.success("Message sent successfully");
        reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-18 md:pt-28 pb-8 md:pb-16">
      <div className="container">
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-5 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-[32px] 2xl:text-4xl font-bold text-center"
          >
            Get In <span className="text-blue-500">Touch</span>
            <div className="w-16 md:w-24 h-1 rounded bg-blue-500 mx-auto mt-1 2xl:mt-2"></div>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-[15px] md:text-base 2xl:text-lg max-w-[700px] 2xl:max-w-[800px] mx-auto"
          >
            Let’s connect and bring your ideas to life through thoughtful design
            and clean development. I’m here to collaborate and help you build
            meaningful, high-quality digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-10 mt-10">
          {/* LEFT SIDE — Contact Info */}
          <div className="space-y-3 md:space-y-5">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl md:text-2xl font-semibold"
            >
              Contact Information
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-300 text-sm md:text-base 2xl:text-lg leading-relaxed  pb-3 md:pb-4 2xl:pb-6"
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            {/* Email */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-[#0d0d1f] border border-[#1b1d27] rounded-lg md:rounded-xl p-3 md:p-4 2xl:p-6 flex items-center gap-3 md:gap-4"
            >
              <div className="size-11 md:size-12 bg-gray-700 rounded-lg md:rounded-xl flex items-center justify-center">
                <Mail className="size-5 md:size-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">towfiqislambd@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-[#0d0d1f] border border-[#1b1d27] rounded-lg md:rounded-xl p-3 md:p-4 2xl:p-6 flex items-center gap-3 md:gap-4"
            >
              <div className="size-11 md:size-12 bg-gray-700 rounded-lg md:rounded-xl flex items-center justify-center">
                <Phone className="size-5 md:size-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+8801727969719</p>
              </div>
            </div>

            {/* Location */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-[#0d0d1f] border border-[#1b1d27] rounded-lg md:rounded-xl p-3 md:p-4 2xl:p-6 flex items-center gap-3 md:gap-4"
            >
              <div className="size-11 md:size-12 bg-gray-700 rounded-lg md:rounded-xl flex items-center justify-center">
                <MapPin className="size-5 md:size-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-[#0d0d1f] border border-[#1b1d27] rounded-lg md:rounded-xl p-4 md:p-5 xl:p-7 2xl:p-8"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 xl:space-y-5"
            >
              <div>
                <label className="text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={`w-full text-[15px] md:text-base px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#0B0D15] border ${
                    errors.name ? "border-red-500" : "border-[#1b1d27]"
                  } text-white outline-none focus:border-blue-500`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full text-[15px] md:text-base px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#0B0D15] border ${
                    errors.email ? "border-red-500" : "border-[#1b1d27]"
                  } text-white outline-none focus:border-blue-500`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Message</label>
                <textarea
                  placeholder="Your message..."
                  className={`w-full text-[15px] md:text-base px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#0B0D15] border ${
                    errors.message ? "border-red-500" : "border-[#1b1d27]"
                  } text-white outline-none min-h-[150px] focus:border-blue-500`}
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full bg-blue-500 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-[15px] md:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
