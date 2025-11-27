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
      setLoading(true); // start loader
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
      setLoading(false); // stop loader
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-5xl font-bold mb-4">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* LEFT SIDE — Contact Info */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold">Let's work together</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            {/* Email */}
            <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">towfiqislambd@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <Phone />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+8801727969719</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <MapPin />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg bg-[#0B0D15] border ${
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
                  className={`w-full px-4 py-3 rounded-lg bg-[#0B0D15] border ${
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
                  className={`w-full px-4 py-3 rounded-lg bg-[#0B0D15] border ${
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
                className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
