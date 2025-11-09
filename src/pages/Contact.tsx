import { Navbar } from "../components/Navbar";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
  return (
    <div className="min-h-screen bg-slate-500">
      <Navbar color="aqua-medium" sticky={false} />
      <ContactForm twBackgroundClass="bg-slate-500" />
    </div>
  );
}
