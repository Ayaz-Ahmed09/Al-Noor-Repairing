import HeroSection from "./components/Hero-Section";
import { ServicesSection } from "./components/Services-sections";
import { AboutSection } from "./components/About-Section";
import { WhyChooseUs } from "./components/WhyChooseUs";
import Heading from "./components/Heading";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactUsSection } from "./components/ContactUsSection";

export default function Home() {
  const services = [
    {
      title: "AC Cleaning",
      description:
        "Complete deep cleaning of your AC unit including filters, coils, and drainage systems to improve airflow, efficiency, and air quality for all AC types.",
    },
    {
      title: "AC General Maintenance",
      description:
        "Routine inspection and tune-up of your entire AC system to keep it running at peak performance, prevent breakdowns, and extend the lifespan of your unit.",
    },
    {
      title: "Compressor Repair",
      description:
        "Expert diagnosis and repair of faulty compressors — the heart of your AC system. We service compressors for window, split, portable, chiller, and HVAC units.",
    },
    {
      title: "Gas Refilling & Leak Detection",
      description:
        "Professional refrigerant recharging and leak detection services to restore your AC's cooling power and ensure it operates safely and efficiently.",
    },
    {
      title: "AC Installation & Replacement",
      description:
        "Proper installation and replacement of all AC types including split units, window ACs, portable units, HVAC systems, and industrial chillers by certified technicians.",
    },
    {
      title: "Thermostat & Control Board Repair",
      description:
        "Repair and replacement of faulty thermostats, control panels, and PCBs to restore accurate temperature control across all residential and commercial AC systems.",
    },
    {
      title: "Duct Cleaning & HVAC Services",
      description:
        "Thorough cleaning and servicing of air ducts, vents, and HVAC systems to eliminate dust buildup, improve indoor air quality, and maximize system efficiency.",
    },
    {
      title: "Chiller & Industrial AC Services",
      description:
        "Specialized maintenance, repair, and overhauling of commercial chillers and large-scale industrial air conditioning systems to minimize downtime and ensure uninterrupted cooling.",
    },
  ];
  return (
    <div className="bg-black font-sans dark:bg-black">
      <div className="relative w-full bg-black z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <HeroSection />
        </div>
        <div className="relative w-full bg-black z-20">
          <AboutSection />
        </div>

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Heading />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="1"
            title="A/C Compressor Repair"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            iconName="default"
            src="/images/Ac-Comperser-repair.jpeg"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="2"
            title="A/C Cleaning"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            href="/services"
            // iconName="default"
            src="/images/Ac-cleaning.png"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="3"
            title="A/C General Maintenance"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            // href="/services"
            // iconName="default"
            src="/images/ac-gm.webp"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="4"
            title="A/C Gas Refilling & Leak Detection"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            // href="/services"
            // iconName="default"
            src="/images/cleaning.jpeg"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="5"
            title="A/C Thermostat & Control Board Repair"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            // href="/services"
            // iconName="default"
            src="/images/thermo.png"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="6"
            title="A/C Duct Cleaning & HVAC Services"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            // href="/services"
            // iconName="default"
            src="/images/duct-cleaning.png"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ServicesSection
            id="7"
            title="A/C Chiller & Industrial AC Services"
            subtitle="Comprehensive Solutions for Your Needs"
            description="Explore our wide range of services designed to meet your specific requirements. From professional consulting to hands-on support, we've got you covered."
            // href="/services"
            // iconName="default"
            src="/images/industrial.png"
            accentColor="#ffffff"
            whatsappNumber="+971000000000"
            phoneNumber="+971000000000"
          />
        </div>
        <div className="lg:sticky lg:top-0 min-h-screen w-full lg:overflow-hidden relative z-20 bg-black">
          <WhyChooseUs />
        </div>
        <div className="lg:sticky lg:top-0 min-h-screen w-full lg:overflow-hidden relative z-20 bg-[#111111]">
          <FaqSection />
        </div>
        <div className="lg:sticky lg:top-0 min-h-screen w-full lg:overflow-hidden relative z-20 bg-black">
          <CtaSection />
        </div>
        <div className="lg:sticky lg:top-0 min-h-screen w-full lg:overflow-hidden relative z-20 bg-black">
          <TestimonialsSection />
        </div>
        <div className="lg:sticky lg:top-0 min-h-screen w-full lg:overflow-hidden relative z-20 bg-black">
          <ContactUsSection />
        </div>
      </div>
    </div>
  );
}
