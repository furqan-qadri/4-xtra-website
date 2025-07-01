import { useState, useEffect } from "react";

// Chart data for the four financial instruments
// const chartData = {
//   BTCUSD: {
//     real: [95000, 92000, 88000, 85000, 87000, 89000, 83000, 81000, 85000],
//     range: { min: 65000, max: 110000 },
//     current: 85000,
//     shockEvent: "Trump tariffs",
//   },
//   CrudeOil: {
//     real: [72, 70, 68, 66, 67, 69, 65, 62, 64],
//     range: { min: 45, max: 85 },
//     current: 64,
//     shockEvent: "Trump tariffs",
//   },
//   Gold: {
//     real: [2950, 2900, 2880, 2920, 3000, 3100, 3050, 2950, 2980],
//     range: { min: 2800, max: 3200 },
//     current: 2980,
//     shockEvent: "Trump tariffs",
//   },
//   Nasdaq100: {
//     real: [22000, 21500, 21000, 20500, 19500, 19000, 18500, 17000, 18500],
//     range: { min: 16000, max: 22000 },
//     current: 18500,
//     shockEvent: "Trump tariffs",
//   },
// };

// Mini chart component
// function MiniChart({ data, title, isVisible }: {
//   data: typeof chartData.BTCUSD,
//   title: string,
//   isVisible: boolean
// }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (!isVisible || !canvasRef.current) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas size
//     canvas.width = 280;
//     canvas.height = 120;

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw range area (confidence interval)
//     const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//     gradient.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
//     gradient.addColorStop(1, 'rgba(168, 85, 247, 0.05)');

//     ctx.fillStyle = gradient;
//     ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);

//     // Draw real data line
//     ctx.strokeStyle = '#dc2626';
//     ctx.lineWidth = 2;
//     ctx.beginPath();

//     const stepX = (canvas.width - 40) / (data.real.length - 1);
//     const maxVal = Math.max(...data.real);
//     const minVal = Math.min(...data.real);
//     const range = maxVal - minVal;

//     data.real.forEach((value, index) => {
//       const x = 20 + index * stepX;
//       const y = 20 + ((maxVal - value) / range) * (canvas.height - 40);

//       if (index === 0) {
//         ctx.moveTo(x, y);
//       } else {
//         ctx.lineTo(x, y);
//       }
//     });

//     ctx.stroke();

//     // Draw shock event line (vertical dashed line)
//     ctx.setLineDash([5, 5]);
//     ctx.strokeStyle = '#6b7280';
//     ctx.lineWidth = 1;
//     ctx.beginPath();
//     ctx.moveTo(canvas.width * 0.7, 20);
//     ctx.lineTo(canvas.width * 0.7, canvas.height - 20);
//     ctx.stroke();
//     ctx.setLineDash([]);

//   }, [data, isVisible]);

//   return (
//     <div className="group relative">
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
//       <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-white/20 hover:bg-white/95 transition-all duration-500">
//         <div className="flex justify-between items-center mb-2">
//           <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
//           <div className="text-xs text-gray-500">Current: {data.current.toLocaleString()}</div>
//         </div>

//         <canvas
//           ref={canvasRef}
//           className="w-full h-24 mb-2"
//           style={{ imageRendering: 'pixelated' }}
//         />

//         <div className="flex justify-between text-xs text-gray-600">
//           <div className="flex items-center">
//             <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
//             <span>Real</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-2 h-2 bg-purple-400 rounded-full mr-1"></div>
//             <span>5%-95% Range</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
//             <span>Shock Event</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Animated keyword card component
function KeywordCard({
  icon,
  title,
  keywords,
  delay,
  isVisible,
}: {
  icon: string;
  title: string;
  keywords: string[];
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Animated border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>

        {/* Card */}
        <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 group-hover:bg-white transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
          {/* Floating icon */}
          <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
            {title}
          </h3>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-semibold rounded-full border border-purple-200 transition-all duration-500 hover:from-purple-200 hover:to-indigo-200 hover:scale-105 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${delay + index * 100}ms` }}
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}

// Floating particle component
function FloatingParticle({
  delay,
  duration,
}: {
  delay: number;
  duration: number;
}) {
  return (
    <div
      className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animation: `float ${duration}ms ease-in-out infinite`,
      }}
    />
  );
}

export default function EngineOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const [chartVisible, setChartVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 200);
    const timer2 = setTimeout(() => setChartVisible(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Multi-Asset Coverage",
      keywords: ["Capital Markets", "Commodities", "Crypto", "Real-Time Data"],
    },
    {
      icon: "⚡",
      title: "Scenario Modeling",
      keywords: [
        "Custom Shocks",
        "Volatility Index",
        "Interest Rates",
        "Money Supply",
      ],
    },
    {
      icon: "🔬",
      title: "Advanced Analytics",
      keywords: [
        "Stress Testing",
        "Risk Analysis",
        "Synthetic Data",
        "Real-World Dynamics",
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white via-purple-50 to-white py-20 px-8 lg:px-16 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle key={i} delay={i * 200} duration={3000 + i * 100} />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Engine
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
              {" "}
              Overview
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"></div>
        </div>

        {/* Features section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <KeywordCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              keywords={feature.keywords}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            chartVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="relative inline-block group">
            {/* Animated glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>

            {/* <button className="relative px-12 py-5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-110 text-xl group-hover:from-purple-500 group-hover:to-pink-600 transform">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Explore Engine</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
