import { CheckCircle2, FileText, MonitorPlay, Cloud } from "lucide-react";

const KeyDeliverables = () => {
  const deliverables = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      text: "Fully designed and simulated PCB for a biomedical signal processing circuit",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      text: "Working knowledge of integrating PCBs with IoT modules and Google Cloud",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      text: "A functional prototype capable of sending signals to the cloud and visualizing them",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      text: "Understanding of cloud-based data processing and security compliance",
    },
  ];

  const materials = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      text: "Workshop slides and reference guides",
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-primary" />,
      text: "PCB design templates and example files",
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      text: "Sample Google Cloud project configurations",
    },
  ];

  return (
    <section id="deliverables" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Key Deliverables
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">What You'll Achieve</h3>
            <div className="space-y-6">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {item.icon}
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Materials Provided</h3>
            <div className="space-y-6">
              {materials.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {item.icon}
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDeliverables;