import { Calendar, MapPin, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            PCB Design & IoT with Cloud Integration
            <span className="block text-2xl md:text-3xl mt-2 font-normal">
              for Biomedical Applications
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>March 28-29, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Shobhit University, Meerut</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>9:30 AM - 5:00 PM</span>
            </div>
          </div>

          <CountdownTimer />

          <div className="mt-12">
            <a
              href="#register"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;