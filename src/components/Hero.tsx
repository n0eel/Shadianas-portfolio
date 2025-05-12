
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-pink-500 font-medium">Hello, I'm</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
            Shodiyona Avazxonova
          </h1>
          <h2 className="text-2xl md:text-3xl text-pink-500 font-medium">
            Lawyer
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            I work for Uzcard. Blah blah blah
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-6">
              My Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-pink-200 text-pink-500 hover:bg-pink-50">
              Resume
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-pink-200/50 rounded-2xl blur opacity-30" />
          <img
            src="/hero-img.jpeg"
            alt="Professional portrait"
            className="relative rounded-2xl shadow-xl object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
