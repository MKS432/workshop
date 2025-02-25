import React from 'react';
import { Calendar, MapPin, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero: React.FC = () => {
  // Define the pattern URL separately for better readability
  const patternUrl = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div className="pt-16 bg-gradient-to-br from-primary to-primary-light text-white">
      {/* Scrolling Bulletin */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: patternUrl }}
        />
        <div className="h-12 flex items-center justify-center font-medium tracking-wide">
          <div className="animate-[scroll_20s_linear_infinite] whitespace-nowrap flex items-center gap-8">
            <span className="inline-flex items-center gap-2">
              🔔 <span className="text-yellow-300">IMPORTANT:</span> Last date of registration is 20th March 2025
            </span>
            <span className="inline-flex items-center gap-2">
              ⭐ <span className="text-yellow-300">HURRY UP:</span> Limited seats available
            </span>
            <span className="inline-flex items-center gap-2">
              🔔 <span className="text-yellow-300">IMPORTANT:</span> Last date of registration is 20th March 2025
            </span>
            <span className="inline-flex items-center gap-2">
              ⭐ <span className="text-yellow-300">HURRY UP:</span> Limited seats available
            </span>
          </div>
        </div>
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-red-600 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-red-600 to-transparent" />
      </div>

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
              <span>9:30 AM - 5:30 PM</span>
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
