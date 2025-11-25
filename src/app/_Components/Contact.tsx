"use client";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
            <p className="text-xl font-semibold">Let's work together</p>
            <p className="text-gray-300 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            {/* Email */}
            <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <Mail className="" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">john@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <Phone className="" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <MapPin className="" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <div className="bg-[#0d0d1f] border border-[#1b1d27] rounded-xl p-8">
            <form className="space-y-5">
              <div>
                <label className="text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0B0D15] border border-[#1b1d27] text-white outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0B0D15] border border-[#1b1d27] text-white outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Message</label>
                <textarea
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0B0D15] border border-[#1b1d27] text-white outline-none min-h-[150px] focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
