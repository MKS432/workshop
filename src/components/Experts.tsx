const Experts = () => {
  const experts = [
    {
      name: "Dr. Manoj Kr. Sharma",
      role: "Signal Processing and Machine Learning",
      image: "/lovable-uploads/Dr.Manojkumarsharma.png",
      bio: "Research focuses on AI, Biomedical Signal Processing, and Embedded Systems, specializing in AI-driven biomedical applications, deep learning, and real-time health monitoring.",
    },
    {
      name: "Mrs. Dipika Sharma",
      role: "PCB Design Expert", 
      image: "/lovable-uploads/Dipika Sharma.png",
      bio: "Research focuses on PCB Design and Implementation for Biomedical Applications, specializing in nanoscale fabrication for advanced biomedical technologies.",
    },
    {
      name: "Dr. Shiva Sharma",
      role: "Biomedical Instrumentation",
      image: "/lovable-uploads/Shiva sharma.png",
      bio: "Research focuses on research areas include Medical Physics, Biomedical Instrumentation, Electrophysiology, and Advanced Materials Science.",
    },
    {
      name: "Dr. Lomas Tomar",
      role: "Director of SBHS Shobhit University, Meerut",
      image: "/lovable-uploads/Lomas tomar.png",
      bio: "Research focuses on Biomedical Engineering, specializing in biomaterials, nanostructures, and advanced drug delivery systems.",
    },
  ];

  return (
    <section id="experts" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Meet Our Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mt-6">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{expert.name}</h3>
                <p className="text-primary-light mb-3">{expert.role}</p>
                <p className="text-gray-600">{expert.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
