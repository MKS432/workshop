import { useState } from "react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: {
      title: "Day 1: Introduction to Smart Health Systems & Biomedical Signals",
      sessions: [
        { time: "10:00 – 10:30 AM", activity: "Inauguration", facilitator: "Organizing Committee" },
        { time: "10:30 – 11:00 AM", activity: "Introduction to Biomedical Engineering and Smart Healthcare", facilitator: "Dr. Lomas Tomar" },
        { time: "11:00 – 11:30 AM", activity: "Overview of Biosignals: ECG, EMG, EEG", facilitator: "Dr. Shiva Sharma" },
        { time: "11:30 – 12:00 PM", activity: "Introduction to Signal Acquisition Systems", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "12:00 – 12:30 PM", activity: "Group Activity / Interaction Session", facilitator: "All Mentors" },
        { time: "12:30 – 01:00 PM", activity: "Importance of IoT in Healthcare Monitoring", facilitator: "Mrs. Dipika Sharma" },
        { time: "01:00 – 02:00 PM", activity: "Lunch Break", facilitator: "" },
        { time: "02:00 – 02:30 PM", activity: "Overview of the Demo", facilitator: "Mrs. Dipika Sharma" },
        { time: "02:30 – 03:30 PM", activity: "Live Demo: ECG/EMG Acquisition", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "03:30 – 04:00 PM", activity: "Intro to Arduino/ESP32, MATLAB/Python", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "04:00 – 05:00 PM", activity: "Recap, Q&A, Discussion", facilitator: "Mentors" },
      ]
    },
    2: {
      title: "Day 2: Sensors, Electrodes & Signal Conditioning",
      sessions: [
        { time: "10:00 – 10:30 AM", activity: "Types of Sensors & Electrodes: ECG, EMG", facilitator: "Ms. Sweety Pal" },
        { time: "10:30 – 11:30 AM", activity: "Instrumentation Amplifiers (TL074)", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "11:30 – 12:00 PM", activity: "Analog Filtering and Gain Stages", facilitator: "Mrs. Dipika Sharma" },
        { time: "12:00 – 12:30 PM", activity: "Group Activity / Quiz", facilitator: "Mrs. Dipika Sharma/Student coordinator" },
        { time: "12:30 – 01:00 PM", activity: "Safety Standards in Biomedical Circuits", facilitator: "Mrs. Dipika Sharma" },
        { time: "01:00 – 02:00 PM", activity: "Lunch Break", facilitator: "" },
        { time: "02:00 – 02:30 PM", activity: "Intro to ECG, EEG & EMG Signals", facilitator: "Dr. Shiva Sharma" },
        { time: "02:30 – 03:30 PM", activity: "Circuit Simulation: Proteus / Falstad", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "03:30 – 04:00 PM", activity: "Measuring Signals (Oscilloscope/Laptop)", facilitator: "Mrs. Dipika Sharma" },
        { time: "04:00 – 05:00 PM", activity: "Signal Troubleshooting & Discussion", facilitator: "Mentors" },
      ]
    },
    3: {
      title: "Day 3: PCB Design for Biomedical Signal Acquisition",
      sessions: [
        { time: "10:00 – 10:30 AM", activity: "Intro to PCB Design Flow", facilitator: "Mrs. Dipika Sharma" },
        { time: "10:30 – 11:30 AM", activity: "Software Overview: KiCad / EasyEDA / Flux AI", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "11:30 – 12:00 PM", activity: "Handling & Installation of PCB Tools", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "12:00 – 12:30 PM", activity: "Group Activity: PCB Review", facilitator: "Mentors" },
        { time: "12:30 – 01:00 PM", activity: "Safety Guidelines: Biomedical & Wearable PCBs", facilitator: "Mrs. Dipika Sharma" },
        { time: "01:00 – 02:00 PM", activity: "Lunch Break", facilitator: "" },
        { time: "02:00 – 02:30 PM", activity: "Designing 1-Channel Amplifier PCB (EasyEDA Cloud)", facilitator: "Mrs. Dipika Sharma" },
        { time: "02:30 – 03:30 PM", activity: "Layout, Routing, Viewer, Export, Simulation", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "03:30 – 04:00 PM", activity: "Parts, Pricing, Gerber & BOM Generation", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "04:00 – 05:00 PM", activity: "Template Review, Peer Feedback, Q&A", facilitator: "Mentors" },
      ]
    },
    4: {
      title: "Day 4: Introduction to IoT in Health Monitoring",
      sessions: [
        { time: "10:00 – 10:30 AM", activity: "Role of IoT in Smart Health Systems", facilitator: "Mrs. Dipika Sharma" },
        { time: "10:30 – 11:00 AM", activity: "Embedded Systems in Biomedical Devices", facilitator: "Dr. Rakhi Bhardwaj" },
        { time: "11:00 – 12:00 PM", activity: "ESP32/ESP8266/Arduino Nano 33 IoT Overview", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "12:00 – 12:30 PM", activity: "Group Activity / Circuit Connections", facilitator: "Mentors" },
        { time: "12:30 – 01:00 PM", activity: "Module Amplifier Wiring & Pin Mapping", facilitator: "Mrs. Dipika Sharma" },
        { time: "01:00 – 02:00 PM", activity: "Lunch Break", facilitator: "" },
        { time: "02:00 – 02:30 PM", activity: "Interfacing Sensor Modules with Microcontroller", facilitator: "Mrs. Dipika Sharma" },
        { time: "02:30 – 03:30 PM", activity: "Serial Plotter/MATLAB/Python Visualization", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "03:30 – 04:00 PM", activity: "Debugging and Device Handling Tips", facilitator: "Mrs. Dipika Sharma" },
        { time: "04:00 – 05:00 PM", activity: "Testing, Q&A, and Discussion", facilitator: "Mentors" },
      ]
    },
    5: {
      title: "Day 5: Real-Time Data Logging & Health Dashboard Design",
      sessions: [
        { time: "10:00 – 10:30 AM", activity: "Getting Started with Python for IoT", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "10:30 – 11:00 AM", activity: "Python Setup & IDE Installation", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "11:00 – 12:00 PM", activity: "ngrok Setup & Serial Communication", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "12:00 – 12:30 PM", activity: "Group Activity / Data Flow Demo", facilitator: "Mentors" },
        { time: "12:30 – 01:00 PM", activity: "Code Walkthrough: Serial Data Parsing", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "01:00 – 02:00 PM", activity: "Lunch Break", facilitator: "" },
        { time: "02:00 – 02:30 PM", activity: "Sending Data to Cloud via Wi-Fi", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "02:30 – 03:30 PM", activity: "Logging to Google Sheets / ThingSpeak", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "03:30 – 04:00 PM", activity: "Designing Real-Time Dashboards", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "04:00 – 05:00 PM", activity: "Review, Q&A, Feedback Session", facilitator: "Mentors" },
      ]
    },
    6: {
      title: "Day 6: Final Project – Smart Health Monitoring Prototype",
      sessions: [
        { time: "10:00 – 10:30 AM", activity: "Planning Final Project Prototype", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "10:30 – 11:00 AM", activity: "Sensor + Embedded + Cloud Integration", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "11:00 – 12:00 PM", activity: "Testing Real-Time Alerts & Signal Flow", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "12:00 – 12:30 PM", activity: "Group Activity: Readiness Check", facilitator: "Mrs. Dipika Sharma" },
        { time: "12:30 – 01:00 PM", activity: "Final Touches, Debugging", facilitator: "Dr. Manoj Kr. Sharma" },
        { time: "01:00 – 02:00 PM", activity: "Lunch Break", facilitator: "" },
        { time: "02:00 – 02:30 PM", activity: "Project Presentations (Group-wise)", facilitator: "Participants/Students" },
        { time: "02:30 – 03:30 PM", activity: "Example Demos: ECG Monitor, EMG Logger", facilitator: "Participants/Students" },
        { time: "03:30 – 04:00 PM", activity: "Feedback and Final Q&A", facilitator: "Participants/Students" },
        { time: "04:00 – 05:00 PM", activity: "Certificate Distribution & Valedictory", facilitator: "Organizing Committee" },
      ]
    },
  };

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          SDP Schedule
        </h2>

        <div className="flex justify-center mb-8 flex-wrap">
          <div className="inline-flex rounded-lg border border-gray-200 flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((day) => (
              <button
                key={day}
                className={`px-4 py-2 ${
                  day === 1 ? "rounded-l-lg" : ""
                } ${
                  day === 6 ? "rounded-r-lg" : ""
                } ${
                  activeDay === day
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveDay(day)}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-primary-light mb-6 text-center">
          {scheduleData[activeDay as keyof typeof scheduleData].title}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-4 py-2 text-left">Time</th>
                <th className="border px-4 py-2 text-left">Activity</th>
                <th className="border px-4 py-2 text-left">Facilitator</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[activeDay as keyof typeof scheduleData].sessions.map((session, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border px-4 py-3 text-primary-light font-medium">{session.time}</td>
                  <td className="border px-4 py-3">
                    <span className={session.activity === "Lunch Break" ? "font-medium" : ""}>
                      {session.activity}
                    </span>
                  </td>
                  <td className="border px-4 py-3 text-gray-600">{session.facilitator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;