import { useState } from "react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const schedule = {
    1: [
      {
        time: "9:30 AM - 10:30 AM",
        title: "Introduction to Biomedical-IoT and PCB Design",
        description: "Overview of Biomedical IoT applications and importance of PCB design",
      },
      {
        time: "10:45 AM - 12:30 PM",
        title: "Basics of PCB Design for Biomedical Applications",
        description: "Introduction to PCB design software and understanding PCB layers",
      },
      {
        time: "1:30 PM - 3:30 PM",
        title: "Designing a PCB for Signal Acquisition",
        description: "Circuit design for capturing signals and component placement",
      },
      {
        time: "3:45 PM - 5:00 PM",
        title: "Hands-On PCB Design Session",
        description: "Create a basic biomedical signal processing circuit PCB",
      },
    ],
    2: [
      {
        time: "9:30 AM - 10:30 AM",
        title: "Introduction to IoT and Cloud Platforms",
        description: "Overview of IoT components and Google Cloud services",
      },
      {
        time: "10:45 AM - 12:30 PM",
        title: "Interfacing PCBs with IoT Modules",
        description: "Choosing microcontrollers and designing PCB interfaces",
      },
      {
        time: "1:30 PM - 3:30 PM",
        title: "Cloud Connectivity and Data Visualization",
        description: "Configure Google Cloud for real-time data streaming",
      },
      {
        time: "3:45 PM - 5:00 PM",
        title: "Final Hands-On Project and Q&A",
        description: "Build a complete system from signal acquisition to cloud integration",
      },
    ],
  };

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Workshop Schedule
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200">
            <button
              className={`px-6 py-2 rounded-l-lg ${
                activeDay === 1
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveDay(1)}
            >
              Day 1
            </button>
            <button
              className={`px-6 py-2 rounded-r-lg ${
                activeDay === 2
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveDay(2)}
            >
              Day 2
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {schedule[activeDay as keyof typeof schedule].map((session, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/4">
                  <span className="text-primary-light font-medium">{session.time}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {session.title}
                  </h3>
                  <p className="text-gray-600">{session.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;