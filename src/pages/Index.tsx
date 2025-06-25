import Hero from "@/components/Hero";
import Countertops from "@/components/Countertops";
import Kitchens from "@/components/Kitchens";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Countertops />
      <Kitchens />
      <About />
      <ContactForm />
    </div>
  );
};

export default Index;
