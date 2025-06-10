import { useState, useEffect, useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

export function ContactForm() {
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
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient elements */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-700">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gumroad-purple/50 focus:border-gumroad-purple transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gumroad-purple/50 focus:border-gumroad-purple transition-all duration-200"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gumroad-purple/50 focus:border-gumroad-purple transition-all duration-200"
                  placeholder="Tell me about your goals..."
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full bg-black text-white hover:bg-gray-900 transition-colors"
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
      </div>
    </div>
  );
}
