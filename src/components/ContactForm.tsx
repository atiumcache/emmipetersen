import { useState, useEffect, useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";

type ContactFormProps = {
  twBackgroundClass?: string;
  twButtonClass?: string;
};

export function ContactForm({
  twBackgroundClass,
  twButtonClass,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Debug log to check environment variables
    console.log("Environment Variables Check:", {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "missing",
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "missing",
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "missing",
      allEnvVars: import.meta.env,
    });

    // Initialize EmailJS with the public key
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    } else {
      console.error("EmailJS public key is missing from environment variables");
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("EmailJS configuration is missing");
      }

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      if (error instanceof Error) {
        console.error("Error details:", error.message);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col justify-between ${twBackgroundClass}`}
    >
      {/* Background gradient elements */}

      <FadeIn
        className={`flex flex-col justify-between ${twBackgroundClass} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:py-24`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-200">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-200 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="placeholder-slate-200 w-full px-4 py-3 bg-white/30 backdrop-blur-sm text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-200 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="placeholder-slate-200 w-full px-4 py-3 bg-white/30 backdrop-blur-sm text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-200 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="placeholder-slate-200 w-full px-4 py-3 bg-white/30 backdrop-blur-sm text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Preferred Method of Contact
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact_method"
                      value="text"
                      required
                      className="w-4 h-4 text-white bg-white/30 border-gray-200 focus:ring-white/50"
                    />
                    <span className="text-slate-200">Text</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact_method"
                      value="email"
                      className="w-4 h-4 text-white bg-white/30 border-gray-200 focus:ring-white/50"
                    />
                    <span className="text-slate-200">Email</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  How often would you like to train together?
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value="1x per week"
                      required
                      className="w-4 h-4 text-white bg-white/30 border-gray-200 focus:ring-white/50"
                    />
                    <span className="text-slate-200">1x / week</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value="2x per week"
                      className="w-4 h-4 text-white bg-white/30 border-gray-200 focus:ring-white/50"
                    />
                    <span className="text-slate-200">2x / week</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value="3x per week"
                      className="w-4 h-4 text-white bg-white/30 border-gray-200 focus:ring-white/50"
                    />
                    <span className="text-slate-200">3x / week</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-slate-200 mb-1"
                >
                   I coach in the Richmond District and Mill Valley. What days, times, and location are you available for sessions?
                </label>
                
                <textarea
                  id="availability"
                  name="availability"
                  required
                  rows={3}
                  className="placeholder-slate-200 w-full px-4 py-3 bg-white/30 backdrop-blur-sm text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200"
                  placeholder="Let me know what times work best for you..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="placeholder-slate-200 w-full px-4 py-3 bg-white/30 backdrop-blur-sm text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200"
                  placeholder="Tell me about your goals..."
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`w-full mb-10 border-white ${twButtonClass ? twButtonClass : "bg-slate-600"} text-white hover:!bg-slate-300 hover:!text-slate-900 hover:!border-slate-500 transition-colors`}
              >
                {isSubmitting
                  ? "Sending..."
                  : submitStatus === "success"
                    ? "Message Sent!"
                    : "Send Message"}
              </Button>
            </div>

            {submitStatus === "error" && (
              <div className="text-red-500 text-center mt-4">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
