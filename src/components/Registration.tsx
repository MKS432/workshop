import { useEffect, useState } from "react";
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

  const currentDate = new Date();
  const earlyBirdEnd = new Date("2025-04-15T23:59:59");
  const regularEnd = new Date("2025-05-07");

  const isEarlyBird = currentDate <= earlyBirdEnd;

  const internalBasePrice = 1500;
  const externalBasePrice = 2500;

  const internalPrice = isEarlyBird
    ? internalBasePrice * 0.8
    : internalBasePrice;

  const externalPrice = isEarlyBird
    ? externalBasePrice * 0.8
    : externalBasePrice;

  const discountNote = isEarlyBird
    ? "20% OFF Early Bird Discount till April 15, 2025"
    : currentDate <= regularEnd
    ? "Standard pricing active until May 7, 2025"
    : "Upcoming slots will be announced soon";

  // Countdown logic
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = earlyBirdEnd.getTime() - now;

      if (distance <= 0) {
        setTimeLeft("Early Bird Offer has ended!");
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(
          `${days}d ${hours}h ${minutes}m ${seconds}s left for Early Bird!`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="register" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Register Now
        </h2>

        {/* Flashing Seat Info */}
        <p className="text-center text-sm font-semibold text-white bg-red-500 px-4 py-2 rounded-md animate-pulse mb-3 shadow-md">
          🚨 Limited 20 seats only! Registrations beyond 20 will be waitlisted and auto-considered for future slots.
        </p>

        {/* Countdown Timer */}
        {isEarlyBird && (
          <p className="text-center text-sm text-yellow-700 font-medium mb-6 animate-pulse">
            ⏳ {timeLeft}
          </p>
        )}

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* External Registration */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">External Registration</p>
                <div className="mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {discountNote}
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary">₹{externalPrice}</p>
                {isEarlyBird && (
                  <p className="text-sm text-gray-500 line-through">₹{externalBasePrice}</p>
                )}
                <p className="text-gray-600 mt-2">For industry professionals and external students</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Includes:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Six full days of hands-on training</li>
                  <li>SDP materials and resources</li>
                  <li>PCB design templates</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>

              <Button onClick={handleRegistration} className="w-full">
                Register as External
              </Button>
            </div>
          </div>

          {/* Internal Registration */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">Internal Registration</p>
                <div className="mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {discountNote}
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary">₹{internalPrice}</p>
                {isEarlyBird && (
                  <p className="text-sm text-gray-500 line-through">₹{internalBasePrice}</p>
                )}
                <p className="text-gray-600 mt-2">For Shobhit University students</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Includes:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Six full days of hands-on training</li>
                  <li>SDP materials and resources</li>
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
