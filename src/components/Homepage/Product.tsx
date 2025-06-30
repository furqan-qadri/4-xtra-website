import { useState, useEffect } from 'react';

// Animated counter component
function AnimatedCounter({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
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

// Risk factor card component
function RiskFactorCard({ 
  category, 
  factors, 
  icon, 
  color,
  delay,
  isVisible 
}: { 
  category: string;
  factors: string[];
  icon: string;
  color: string;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`group relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-2 ${color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500`} />
      
      {/* Main card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 group-hover:bg-white transition-all duration-500 group-hover:scale-105">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
            {category}
          </h3>
        </div>
        
        <div className="space-y-2">
          {factors.map((factor, index) => (
            <div 
              key={index}
              className={`flex items-center text-sm text-gray-600 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${delay + (index * 100)}ms` }}
            >
              <div className={`w-2 h-2 ${color} rounded-full mr-3 animate-pulse`} />
              {factor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
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

    const section = document.getElementById('product-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const riskFactors = [
    {
      category: "Market Dynamics",
      factors: ["Volatility Patterns", "Liquidity Shifts", "Price Correlations", "Trading Volumes"],
      icon: "📈",
      color: "bg-purple-500"
    },
    {
      category: "Economic Indicators", 
      factors: ["Interest Rates", "Inflation Metrics", "GDP Growth", "Employment Data"],
      icon: "🏛️",
      color: "bg-indigo-500"
    },
    {
      category: "Geopolitical Events",
      factors: ["Policy Changes", "Trade Relations", "Political Stability", "Regulatory Shifts"],
      icon: "🌍",
      color: "bg-pink-500"
    },
    {
      category: "Sector Analysis",
      factors: ["Industry Trends", "Company Performance", "Sector Rotation", "Credit Metrics"],
      icon: "🏢",
      color: "bg-emerald-500"
    },
    {
      category: "Alternative Assets",
      factors: ["Real Estate", "Commodities", "Crypto Markets", "Private Equity"],
      icon: "💎",
      color: "bg-amber-500"
    },
    {
      category: "Risk Scenarios",
      factors: ["Stress Testing", "Tail Risk Events", "Black Swan Analysis", "Cascade Effects"],
      icon: "⚠️",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="product-section" className="relative min-h-screen overflow-hidden py-20">
      {/* Custom animations */}
      <style>{`
        @keyframes float-knowledge {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-10px) scale(1.05); }
          66% { transform: translateY(5px) scale(0.95); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes data-flow {
          0% { transform: translateX(-100%) rotate(0deg); }
          50% { transform: translateX(0%) rotate(180deg); }
          100% { transform: translateX(100%) rotate(360deg); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        .animate-data-flow {
          animation: data-flow 8s linear infinite;
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 leading-none tracking-tight mb-4">
              POWERED BY
            </h1>
          </div>
        </div>

        {/* Proprietary Knowledge Layer Section */}
        <div className="mb-12">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl lg:text-4xl font-black text-purple-600 mb-6">
              Proprietary Knowledge Layer
            </h2>
          </div>

         
        </div>

        {/* 250+ Risk Factors Hero Section */}
        <div className="mb-24">
          <div className={`relative overflow-hidden  transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r rounded-3xl from-purple-600 via-indigo-600 via-pink-600 to-purple-600 bg-[length:300%_100%] animate-gradient" />
            
            
            {/* Floating rings */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-white/20 rounded-full animate-pulse-ring"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
            
            {/* Content */}
            <div className="relative z-10 px-8 py-20 text-center">
              <div className="text-8xl lg:text-9xl font-black text-white mb-6 drop-shadow-2xl">
                <AnimatedCounter target={250} suffix="+" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                Pre-trained Risk Factors
              </h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Ready for simulating shock events and synthetic data with unprecedented accuracy and depth
              </p>
            </div>
          </div>
        </div>

        {/* Risk Factor Categories Grid */}
        <div className="mb-16">
          <div className={`text-center mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl lg:text-4xl font-black text-gray-800 mb-4">
              Comprehensive Risk Coverage
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI models are trained across diverse risk categories to provide holistic market intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskFactors.map((category, index) => (
              <RiskFactorCard
                key={index}
                {...category}
                delay={1200 + (index * 150)}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
} 