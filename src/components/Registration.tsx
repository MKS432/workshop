
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const Registration = () => {
  const { toast } = useToast();

  const handleRegistration = () => {
    window.open("https://forms.gle/8WcZvNoCqCaVw2Md7", "_blank");
    toast({
      title: "Registration Started",
      description: "Please complete the registration form to secure your spot.",
    });
  };

  const isEarlyBird = new Date() <= new Date('2025-02-25');
  const externalPrice = isEarlyBird ? 400 : 500;

  return (
    <section id="register" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Register Now
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">External Registration</p>
                {isEarlyBird && (
                  <div className="mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      20% OFF Early Bird Discount till Feb 25, 2025
                    </span>
                  </div>
                )}
                <p className="text-3xl font-bold text-primary">₹{externalPrice}</p>
                {isEarlyBird && (
                  <p className="text-sm text-gray-500 line-through">₹500</p>
                )}
                <p className="text-gray-600 mt-2">For industry professionals and external students (maximum 2 in a team)</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Includes:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Two full days of hands-on training</li>
                  <li>Workshop materials and resources</li>
                  <li>PCB design templates</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>

              <Button onClick={handleRegistration} className="w-full">
                Register as External
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">Internal Registration</p>
                <p className="text-3xl font-bold text-primary">₹250</p>
                <p className="text-gray-600 mt-2">For Shobhit University students (maximum 2 in a team)</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Includes:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Two full days of hands-on training</li>
                  <li>Workshop materials and resources</li>
                  <li>PCB design templates</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>

              <Button onClick={handleRegistration} className="w-full">
                Register as Internal Student
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
