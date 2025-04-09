import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const FAQ = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    // Send email using mailto
    const mailtoLink = `mailto:bhmsshobhituniversity@gmail.com?subject=SDP Inquiry&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
    window.open(mailtoLink);
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const faqs = [
    {
      question: "What are the prerequisites for this SDP?",
      answer: "Basic knowledge of electronics and PCB design concepts is required. Participants should bring their own laptop with internet connectivity.",
    },
    {
      question: "Is the SDP suitable for beginners?",
      answer: "While some basic knowledge is required, the SDP is structured to accommodate participants with varying levels of experience.",
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, all participants will receive a certificate of completion from Shobhit University upon successfully completing the SDP.",
    },
    {
      question: "What software will we use?",
      answer: "We will use industry-standard PCB design software and Google Cloud Platform. Detailed setup instructions will be provided before the SDP.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="h-full flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 flex-grow bg-white p-6 rounded-lg shadow-sm">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="h-full flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-8">Contact Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 flex-grow">
              <div className="space-y-4">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.3036401607965!2d77.70255287640552!3d28.99037197559742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7bdd7bf69c3f%3A0x4f8abee54072a1!2sShobhit%20University!5e0!3m2!1sen!2sin!4v1709709408975!5m2!1sen!2sin"
                    className="w-full h-64 rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Shobhit Institute of Engineering & Technology, Meerut</p>
                      <p className="text-gray-600">(A NAAC Accredited Deemed-to-be University)</p>
                      <p className="text-gray-600">NH-58, Modipuram, Meerut - 250 110</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary flex-shrink-0" />
                    <div>
                      <p>mail@shobhituniversity.ac.in</p>
                      <p>bmhsshobhituniversity@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p>Phone: +91-9675190001</p>
                      <p>Fax: +91-121-2575724</p>
                      <p>Admission Helpline: +91-7617505016</p>
                      <p>SDP Contact: +91 7906960860, +91 9027283856</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
              <Textarea name="message" placeholder="Your Message" required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
