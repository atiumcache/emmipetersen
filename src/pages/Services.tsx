import { Navbar } from "../components/Navbar";
import { FadeIn } from "../components/FadeIn";
import { Dumbbell, Users, MapPinHouse, ArrowUpRight } from "lucide-react";
import { SunLinesGraphic } from "../components/SunLinesGraphic";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Private Coaching",
    shortDesc: "1:1 Custom Workouts",
    description: [
      "One-on-one sessions designed to build strength, improve balance and stability, and support your unique goals",
      "Thoughtfully structured programs delivered in 4–8 week blocks to support progress and adaptation",
    ],
    icon: <Dumbbell className="w-10 h-10" />,
    color: "#FFADAD", // Pastel red
    price: "",
  },
  {
    id: 2,
    title: "Semi-Private Coaching",
    shortDesc: "2-3 People",
    description: [
      "Small group sessions that blend personalized coaching with community support",
      "More affordable option than one-on-one training, with slightly less individualized attention",
    ],
    icon: <Users className="w-10 h-10" />,
    color: "#CAFFBF",
    price: "",
  },
  {
    id: 3,
    title: "Virtual Coaching",
    shortDesc: "Train from anywhere",
    description: [
      "Virtual one-on-one sessions designed to build strength, improve balance and stability, and support your personal goals",
      "Live coaching via Zoom or FaceTime as you train at home, in your personal gym, or outdoors",
    ],
    icon: <MapPinHouse className="w-10 h-10" />,
    color: "#BDB2FF",
    price: "",
  },
];

interface ServiceType {
  id: number;
  title: string;
  shortDesc: string;
  description: string | string[]; // Can be a string or array of strings for bullet points
  icon: React.ReactNode;
  color: string;
  price: string;
}

interface ServiceCardProps extends ServiceType {}

function ServiceCard({ title, shortDesc, description, id }: ServiceCardProps) {
  return (
    <FadeIn className="grid grid-cols-1 md:grid-cols-10 px-2 md:px-4 gap-4 md:gap-8 border-t pt-4">
      <p className="font-spartan text-2xl md:text-3xl font-bold">0{id}</p>
      <div className="col-span-1 md:col-span-3">
        <h3 className="font-spartan uppercase text-2xl md:text-3xl font-bold">
          {title}
        </h3>
        <p>{shortDesc}</p>
      </div>
      <div className="md:col-span-4 text-lg my-6 md:my-0">
        {Array.isArray(description) ? (
          <ul className="list-disc pl-5 space-y-2">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="md:col-span-2 text-lg flex flex-col md:items-end">
        {/* <p className="hidden">{price} / session</p> */}
        <button className="py-1 px-2 border border-1 rounded-lg border-white mr-auto md:mr-0 my-4 hover:bg-white/20">
          <Link to="/contact" className="flex items-center gap-2 ">
            Inquire <ArrowUpRight />
          </Link>
        </button>
      </div>
    </FadeIn>
  );
}

const HowItWorks = () => {
  return (
    <FadeIn>
      <h2 className="font-spartan uppercase text-2xl md:text-5xl font-bold pb-4">
        How It Works
      </h2>
      <ul className="list-disc pl-5 text-xl  space-y-2">
        <li>
          All services begin with a consultation where we discuss your goals,
          history, lifestyle, and relationship with movement.
        </li>
        <li>
          We will go through a movement “assessment” so we can create a program
          that meets you exactly where you are and encourages progress over
          perfection.
        </li>
      </ul>
    </FadeIn>
  );
};

export function Services() {
  return (
    <>
      <div className="min-h-screen md:min-h-screen text-rb-white bg-salmon-medium flex flex-col justify-between md:justify-between">
        <Navbar color="salmon-medium" />
        <div className="min-h-[80vh] md:min-h-[90vh] w-full flex flex-col justify-end">
          <div>
            <FadeIn delay="100ms">
              <SunLinesGraphic />
              <h1 className="text-5xl md:text-[10vw] uppercase text-white font-spartan font-black px-4 pt-6 md:px-12 mx-auto">
                Coaching <br />
                Services
              </h1>
            </FadeIn>
          </div>
        </div>
        <div className="flex flex-col pt-[25vh] pb-4 px-4 md:px-12 md:pt-[25vh] mr-auto">
          <div className="flex flex-col space-y-[15vh] md:space-y-[25vh]">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="flex flex-col bg-white text-salmon-dark rounded-xl space-y-[10vh] md:space-y-[15vh] mx-2 my-20 md:m-[15vh] p-8 md:p-12">
            <HowItWorks />
            <FadeIn className="italic w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-28">
              <p className="">
                * If cost of service is a barrier to entry, please contact me at
                helloemmipetersen@gmail.com to discuss sliding scale
                options.{" "}
              </p>
              <p>
                * If you’re able to cover more than your share to help offset
                sliding scale prices and increase accessibility to safe strength
                training, please contact me at helloemmipetersen@gmail.com.
              </p>
            </FadeIn>
          </div>
        </div>
        <ContactForm
          twBackgroundClass="bg-salmon-light"
          twButtonClass="bg-salmon-medium"
        />

        {/* <ContactCTA darkColor="salmon-medium" lightColor="salmon-light" /> */}
        <Footer twBackgroundClass="bg-salmon-medium" />
      </div>
    </>
  );
}
