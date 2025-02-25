import { Target, Book, Cloud, Award, Users, Wrench, Database, Shield } from "lucide-react";

const Overview = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8 text-primary-light" />,
      title: "Hands-on Experience",
      description: "Design and simulate PCBs for biomedical applications using industry-standard tools",
    },
    {
      icon: <Book className="w-8 h-8 text-primary-light" />,
      title: "Expert-Led Sessions",
      description: "Learn from industry professionals with years of experience in PCB design and IoT",
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary-light" />,
      title: "Cloud Integration",
      description: "Master IoT connectivity and real-time data visualization using Google Cloud",
    },
    {
      icon: <Award className="w-8 h-8 text-primary-light" />,
      title: "Certification",
      description: "Receive a certificate of completion from Shobhit University",
    },
    {
      icon: <Users className="w-8 h-8 text-primary-light" />,
      title: "Networking",
      description: "Connect with industry experts and like-minded professionals",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary-light" />,
      title: "Practical Skills",
      description: "Gain hands-on experience with professional PCB design tools",
    },
    {
      icon: <Database className="w-8 h-8 text-primary-light" />,
      title: "Real-time Data",
      description: "Learn to collect and analyze biomedical data in real-time",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-light" />,
      title: "Best Practices",
      description: "Learn industry standards and safety protocols for biomedical devices",
    },
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Workshop Overview
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive 2-day workshop covering PCB design fundamentals, IoT integration,
            and cloud connectivity for biomedical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-background-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;