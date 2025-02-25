interface VideoBackgroundProps {
    children: React.ReactNode;
  }
  const VideoBackground = ({ children }: VideoBackgroundProps) => {
    return (
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/lovable-uploads/174086-850404739_small.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };
  export default VideoBackground;