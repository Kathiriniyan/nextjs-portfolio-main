"use client";
import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqalpgde";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setEmailSubmitted(false);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      setSubmitting(false);

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      setSubmitting(false);
      alert("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open — whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-3 mt-4">
          <Link href="https://github.com/Kathiriniyan">
            <Image src={GithubIcon} alt="Github Icon" className="w-7 h-7 hover:scale-110 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/kathiriniyan-balendran-5b79831b4/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-7 h-7 hover:scale-110 transition" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-yellow-400 text-sm mt-2 font-semibold">
            ✅ Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-yellow-400 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-yellow-400 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-yellow-400 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-[#121212] font-bold py-2.5 px-5 rounded-lg w-full transition-all"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
