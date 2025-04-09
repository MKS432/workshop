import { GraduationCap, BookOpen, Users2, Briefcase } from "lucide-react";

const WhoCanAttend = () => {
  const attendees = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Engineering Students",
      description: "Currently enrolled in AI/ML, Biomedical, CSE, Data Science, Electronics, IoT, Robotics, Agri informatics or related engineering fields",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Researchers",
      description: "Working on biomedical devices and IoT applications",
    },
    {
      icon: <Users2 className="w-8 h-8 text-primary" />,
      title: "Faculty Members",
      description: "Educators or researchers in relevant engineering disciplines",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Industry Professionals",
      description: "Working in healthcare technology or IoT sectors",
    },
  ];

  return (
    <section id="who-can-attend" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Who Can Attend?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attendees.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Basic knowledge of electronics and circuit design</li>
            <li>Familiarity with PCB design concepts</li>
            <li>Basic programming knowledge (any language)</li>
            <li>Laptop with internet connectivity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoCanAttend;