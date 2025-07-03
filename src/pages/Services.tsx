import { Navbar } from "../components/Navbar";
import { FadeIn } from "../components/FadeIn";
import { Dumbbell, Users, MapPinHouse } from "lucide-react";
import { SunLinesGraphic } from "../components/SunLinesGraphic";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

const services = [
  {
    id: 1,
    title: "Strength Coaching",
    shortDesc: "1:1 Custom Workouts",
    description:
      "Personalized training programs tailored to your goals, whether you're looking to build strength, lose weight, or improve overall fitness. Each session is customized to your fitness level and preferences.",
    icon: <Dumbbell className="w-10 h-10" />,
    color: "#FFADAD", // Pastel red
    price: "$150",
  },
  {
    id: 2,
    title: "Small Group",
    shortDesc: "2-3 Individuals",
    description:
      "Customized nutrition plans designed to fuel your body and support your fitness goals. Learn about proper portion sizes, macronutrient balance, and how to make sustainable dietary changes.",
    icon: <Users className="w-10 h-10" />,
    color: "#CAFFBF",
    price: "$95",
  },
  {
    id: 3,
    title: "In-Home / Virtual",
    shortDesc: "I come to you!",
    description:
      "Join our community in energetic group workouts that combine strength training, cardio, and mobility exercises. Perfect for those who thrive in a social, motivating environment.",
    icon: <MapPinHouse className="w-10 h-10" />,
    color: "#BDB2FF",
    price: "$110",
  },
];

interface ServiceType {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  price: string;
}

interface ServiceCardProps extends ServiceType {}

function ServiceCard({
  title,
  shortDesc,
  description,
  icon,
  color,
  id,
  price,
}: ServiceCardProps) {
  return (
    <FadeIn className=" px-4 py-4 mx-auto md:px-8 w-full transition-all border-x">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row justify-between items-left md:items-center">
            <h3 className="text-xl font-bold uppercase">{title}</h3>
            <h3 className="text-md font-bold">{price}+ / Session</h3>
          </div>
          <p className="text-white text-left">{shortDesc}</p>
        </div>
      </div>
      <p className="text-white text-left max-w-[80vw]">{description}</p>
    </FadeIn>
  );
}

function ServiceCardCrazy({
  title,
  shortDesc,
  description,
  icon,
  color,
  id,
  price,
}: ServiceCardProps) {
  return (
    <FadeIn className="grid grid-cols-1 md:grid-cols-10 px-2 md:px-4 gap-4 md:gap-8 border-t pt-4">
      <p className="font-spartan text-2xl md:text-3xl font-bold">0{id}</p>
      <div className="col-span-1 md:col-span-3">
        <h3 className="font-spartan uppercase text-2xl md:text-3xl font-bold">
          {title}
        </h3>
        <p>{shortDesc}</p>
      </div>
      <div className="md:col-span-4 text-lg">{description}</div>
      <div className="md:col-span-2 text-lg flex flex-col md:items-end">
        <p>{price} / session</p>
        <p>Learn more</p>
      </div>
    </FadeIn>
  );
}

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
        <div className="flex flex-col pt-[25vh] pb-24 px-4 md:px-12 md:py-[25vh] mr-auto">
          <div className="flex flex-col space-y-[25vh]">
            {services.map((service) => (
              <ServiceCardCrazy key={service.id} {...service} />
            ))}
          </div>
        </div>
        <ContactForm
          twBackgroundClass="bg-salmon-light"
          twButtonClass="bg-salmon-dark"
        />

        {/* <ContactCTA darkColor="salmon-medium" lightColor="salmon-light" /> */}
        <Footer twBackgroundClass="bg-salmon-medium" />
      </div>
    </>
  );
}
