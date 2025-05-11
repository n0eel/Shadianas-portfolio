
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Layout, Users } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the key skills and services I offer to help bring your digital projects to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-pink-100 hover:shadow-md transition-all hover:border-pink-300">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-5">
                <Code className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nothing</h3>
              <p className="text-gray-600">
                Bla bla bla
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-100 hover:shadow-md transition-all hover:border-pink-300">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-5">
                <Palette className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nothing</h3>
              <p className="text-gray-600">
                Bla bla bla
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-100 hover:shadow-md transition-all hover:border-pink-300">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-5">
                <Layout className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nothing</h3>
              <p className="text-gray-600">
                Bla bla bla
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-100 hover:shadow-md transition-all hover:border-pink-300">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nothing</h3>
              <p className="text-gray-600">
                Bla bla bla
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
