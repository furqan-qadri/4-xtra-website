import { useState, useEffect } from "react";

// Animated counter component
function AnimatedCounter({
  target,
  suffix = "",
  duration = 700,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Floating metric card component
function FloatingMetricCard({
  value,
  suffix,
  label,
  colorClass,
  gradientFrom,
  gradientTo,
  delay = 0,
  tilt = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  colorClass: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
  tilt?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 hover:scale-110 animate-float`}
      style={{
        animationDelay: `${delay}ms`,
        transform: `rotate(${tilt}deg)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect background */}
      <div
        className={`absolute -inset-4 ${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      />

      {/* Main card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/30 group-hover:bg-white transition-all duration-500">
        {/* Animated border */}
        <div
          className={`absolute inset-0 ${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div
            className={`text-3xl sm:text-5xl lg:text-6xl font-black ${colorClass} mb-2 sm:mb-3 tracking-tight transition-transform duration-300 group-hover:scale-105`}
          >
            <AnimatedCounter target={value} suffix={suffix} />
          </div>
          <div className="text-gray-600 font-semibold xl:text-md text-sm tracking-wider uppercase">
            {label}
          </div>
        </div>

        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 ${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-full animate-ping`}
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const benefits = [
  //   "Real-time cross-asset intelligence",
  //   "Custom extreme scenario modeling",
  //   "AI-driven risk insights & analysis",
  // ];

  const metrics = [
    {
      value: 15,
      suffix: " Years +",
      label: "of patented R&D",
      colorClass: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-600",
      tilt: -3,
    },
    {
      value: 250,
      suffix: "+",
      label: "Risk Factors Coverage",
      colorClass: "text-purple-700",
      gradientFrom: "from-purple-600",
      gradientTo: "to-pink-600",
      tilt: 2,
    },
    // {
    //   value: 10,
    //   suffix: "ms",
    //   label: "Response Time",
    //   colorClass: "text-purple-800",
    //   gradientFrom: "from-indigo-600",
    //   gradientTo: "to-purple-700",
    //   tilt: -1,
    // },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden">
      {/* Add floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Wave layers */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc)",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: "linear-gradient(-45deg, #7c3aed, #8b5cf6, #a855f7)",
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)",
          }}
        />

        {/* Animated SVG wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1200,160,1248,128,1296,112L1344,96L1344,200L1296,200C1248,200,1152,200,1056,200C960,200,864,200,768,200C672,200,576,200,480,200C384,200,288,200,192,200C96,200,48,200,24,200L0,200Z"
              fill="url(#waveGradient)"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 pb-8">
        <div
          className={`text-center space-y-6 sm:space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main headline */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              WHAT IF ...
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 block">
                Market Scenario Generation
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto px-2 sm:px-0">
              Transform hypothetical user-defined shock events into actionable
              risk intelligence with our disruptive scenario generation
              platform.
            </p>
          </div>

          {/* Key metrics - Simplified floating design */}
          <div className="relative max-w-6xl mx-auto py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12">
              {metrics.map((metric, index) => (
                <FloatingMetricCard
                  key={index}
                  value={metric.value}
                  suffix={metric.suffix}
                  label={metric.label}
                  colorClass={metric.colorClass}
                  gradientFrom={metric.gradientFrom}
                  gradientTo={metric.gradientTo}
                  delay={index * 200}
                  tilt={metric.tilt}
                />
              ))}
            </div>
          </div>

          {/* Key benefits */}
          {/* <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center justify-center sm:justify-start space-x-3 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base lg:text-lg text-center sm:text-left">
                  {benefit}
                </span>
              </div>
            ))}
          </div> */}

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 px-4 sm:px-0">
            <a
              href="https://4-xtra-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 text-sm sm:text-base text-center"
            >
              Demo
            </a>
            <a
              href="mailto:getinfo@4-xtra.com"
              className="px-8 sm:px-10 py-3 bg-white/80 backdrop-blur-sm text-purple-700 font-semibold rounded-lg border border-purple-300/50 transition-all duration-300 hover:bg-white/90 hover:border-purple-400/70 text-sm sm:text-base shadow-lg text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
