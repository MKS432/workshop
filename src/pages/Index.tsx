
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import WhoCanAttend from "@/components/WhoCanAttend";
import KeyDeliverables from "@/components/KeyDeliverables";
import FAQ from "@/components/FAQ";
import Experts from "@/components/Experts";
import VideoBackground from "@/components/VideoBackground";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navbar />
      <div className="relative overflow-hidden">
        <VideoBackground>
          <div className="relative">
            <Hero />
            <Overview />
            <Schedule />
            <WhoCanAttend />
            <KeyDeliverables />
            <Registration />
            <Experts />
            <FAQ />
          </div>
        </VideoBackground>
      </div>
    </div>
  );
};

export default Index;
