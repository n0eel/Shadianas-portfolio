
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, TagIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Email</p>
                  <p className="text-gray-800">shadiko@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Phone</p>
                  <p className="text-gray-800">+998(99)-001-04-34</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-800">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://t.me/shadiana_0434" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors"
                >
                  <TagIcon className="w-5 h-5 text-amber-800"/>
                </a>
                <a 
                  href="https://instagram.com/shadiana0434" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-amber-800" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="bg-amber-800 hover:bg-amber-600 text-white w-full py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
