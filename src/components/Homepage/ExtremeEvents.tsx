import { useState, useEffect } from 'react';

export default function ExtremeEvents() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative py-16 bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden min-h-[600px]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Wave layers */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc)',
            clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-12"
          style={{
            background: 'linear-gradient(-135deg, #7c3aed, #8b5cf6, #a855f7)',
            clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            background: 'linear-gradient(45deg, #a855f7, #c084fc, #e879f9)',
            clipPath: 'polygon(0 30%, 100% 10%, 100% 70%, 0 90%)'
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />

      {/* Animated extreme event scenarios - covering entire section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { text: "Trump Tariffs introduced and BTC surges", position: "top-16 left-8", delay: "1s" },
          { text: "Federal Reserve emergency rate cut", position: "top-20 right-8", delay: "2s" },
          { text: "Oil supply shock from Middle East", position: "top-40 left-16", delay: "3s" },
          { text: "Major tech earnings miss triggers selloff", position: "top-32 right-16", delay: "4s" },
          { text: "Currency devaluation in emerging markets", position: "bottom-40 left-8", delay: "5s" },
          { text: "Cryptocurrency regulation announcement", position: "bottom-32 right-8", delay: "6s" },
          { text: "Natural disaster affects supply chains", position: "bottom-16 left-16", delay: "7s" },
          { text: "Geopolitical tensions escalate globally", position: "bottom-24 right-16", delay: "8s" },
          { text: "Central bank digital currency launch", position: "top-60 left-12", delay: "9s" },
          { text: "AI regulation shock announcement", position: "bottom-60 right-12", delay: "10s" }
        ].map((scenario, index) => (
          <div
            key={index}
            className={`absolute ${scenario.position} animate-pulse opacity-0`}
            style={{
              animation: `scenarioFlash 2s ease-in-out ${scenario.delay} infinite alternate`,
              animationFillMode: 'both'
            }}
          >
            <span className="text-lg lg:text-xl font-semibold text-purple-800 whitespace-nowrap">
              {scenario.text}
            </span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 lg:px-20 xl:px-32 flex flex-col justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main headline */}
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Extreme Scenarios
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"></div>
          </div>
          
          {/* Main feature card - centered */}
          <div className="flex justify-center items-center">
            <div className="max-w-2xl relative z-10">
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-4 lg:p-6 shadow-2xl border border-white/30 hover:bg-white transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-6 transition-transform duration-300">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
                          Generate highly custom extreme scenarios
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          AI-powered precision meets market intelligence to create unprecedented scenario modeling capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 