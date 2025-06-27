import { useState, useEffect } from 'react';

// Animated number counter component
function AnimatedNumber({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
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
  
  return <span>{count}{suffix}</span>;
}

// Tech feature card component
function TechFeatureCard({ 
  icon, 
  title, 
  description, 
  accentColor,
  gradientFrom,
  gradientTo,
  delay = 0,
  stats,
  isVisible 
}: { 
  icon: string;
  title: string;
  description: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
  stats?: { value: number; suffix: string; label: string };
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated glow background */}
      <div className={`absolute -inset-4 ${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
      
      {/* Main card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 group-hover:bg-white transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
        {/* Floating icon container */}
        <div className="relative mb-6">
          <div className={`text-6xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${accentColor}`}>
            {icon}
          </div>
          
          {/* Orbiting particles */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 ${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-full animate-ping`}
                  style={{
                    left: `${20 + (i * 25)}%`,
                    top: `${30 + (i * 20)}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className={`text-2xl lg:text-3xl font-black ${accentColor} mb-4 tracking-tight group-hover:scale-105 transition-transform duration-300`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
        
        {/* Stats if provided */}
        {stats && (
          <div className={`${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-2xl p-4 text-center`}>
            <div className="text-3xl font-black text-white mb-1">
              <AnimatedNumber target={stats.value} suffix={stats.suffix} />
            </div>
            <div className="text-white/90 text-sm font-semibold uppercase tracking-wider">
              {stats.label}
            </div>
          </div>
        )}
        
        {/* Animated accent line */}
        <div className={`mt-6 h-1 ${gradientFrom} ${gradientTo} bg-gradient-to-r rounded-full transform origin-left transition-all duration-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: `${delay + 500}ms` }} />
      </div>
    </div>
  );
}

// Tech highlight banner
function TechHighlightBanner({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_100%] animate-gradient" />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 px-8 py-12 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Years badge */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-white/20 rounded-full blur-lg group-hover:bg-white/30 transition-all duration-500" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-full px-8 py-6 shadow-2xl">
              <div className="text-5xl lg:text-6xl font-black text-purple-700 mb-2">
                <AnimatedNumber target={17} />
              </div>
              <div className="text-purple-600 font-bold text-sm uppercase tracking-wider">
                Years of R&D
              </div>
            </div>
          </div>
          
          {/* Main text */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Patented Technology
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Proven high accuracy and open validation capabilities with super-fast conditional modelling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('tech-showcase-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const techFeatures = [
    {
      icon: "⚡",
      title: "Super-Fast Conditional Modelling",
      description: "Builds comprehensive simulations in minutes or hours, not weeks or months. Revolutionary speed meets enterprise-grade precision.",
      accentColor: "text-yellow-600",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-orange-600",
      stats: { value: 10, suffix: "min", label: "Simulation Build Time" }
    },
    {
      icon: "🎯",
      title: "Shock Synthetic Data Engine",
      description: "Generates shock events data on multi-variant input factors with unprecedented accuracy and detail for comprehensive risk analysis.",
      accentColor: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-600",
      stats: { value: 99, suffix: "%", label: "Data Accuracy" }
    },
    {
      icon: "🔍",
      title: "Unknown Risk Driver Identification",
      description: "Identifies many unknown variables and intelligently weights the best fit, uncovering hidden risk patterns in complex market scenarios.",
      accentColor: "text-emerald-600",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-teal-600",
      stats: { value: 500, suffix: "+", label: "Risk Variables" }
    }
  ];

  return (
    <section id="tech-showcase-section" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden py-20">
      {/* Custom animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-tech {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }
        .animate-float-tech {
          animation: float-tech 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full animate-float-tech" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 animate-float-tech" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 animate-float-tech" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Tech circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, purple 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, indigo 2px, transparent 2px),
              linear-gradient(45deg, transparent 48%, purple 49%, purple 51%, transparent 52%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 25px 25px'
          }} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-4">
              <span className="text-2xl lg:text-3xl font-light text-gray-600 tracking-[0.3em] uppercase">
                Our
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 leading-none tracking-tight mb-8">
              TECH
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Revolutionary technology stack powering the future of financial risk intelligence
            </p>
          </div>
        </div>

        {/* <div className={`mt-20 text-center transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur-lg opacity-20 animate-pulse" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-xl border border-white/30">
              <p className="text-lg font-semibold text-gray-800">
                Transforming <span className="text-purple-600 font-black">complexity</span> into 
                <span className="text-indigo-600 font-black"> clarity</span> with cutting-edge AI
              </p>
            </div>
          </div>
        </div> */}

        {/* Tech highlight banner */}
        <div className="mb-20">
          <TechHighlightBanner isVisible={isVisible} />
        </div>

        {/* Tech features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {techFeatures.map((feature, index) => (
            <TechFeatureCard
              key={index}
              {...feature}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom accent section */}
       
      </div>
    </section>
  );
} 