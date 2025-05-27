
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-amber-800 font-medium">Hello, I'm</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
            Shodiyona Avazxonova
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-800 font-medium">
            Lawyer
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            I'm a Lawyer
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.canva.com/projects" target="_blank">
            <Button className="bg-amber-800 hover:bg-amber-600 text-white font-medium px-6 py-6">
              My Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            <a href="https://www.canva.com/design/DAGl68pC3cQ/tpuAKFXwHUmh6rfDgRoKVQ/edit" target="_blank">
            <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-50">
              Resume
            </Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-amber-200/50 rounded-2xl blur opacity-30" />
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
