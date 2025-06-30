import React, { useState } from "react";

// Scenario selector
function ScenarioSelector({
  scenarios,
  activeScenario,
  onSelect,
}: {
  scenarios: any;
  activeScenario: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {scenarios.map((scenario: { name: React.ReactNode }, index: number) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
            activeScenario === index
              ? "bg-blue-600/30 text-blue-300 border border-blue-400/50"
              : "bg-white/5 text-gray-300 border border-gray-600/30 hover:bg-white/10"
          }`}
        >
          {scenario.name}
        </button>
      ))}
    </div>
  );
}

// Prediction Demo Component
export default function PredictionDemo({ isVisible }: { isVisible: boolean }) {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    { name: "Trump Tariffs", description: "Trade war escalation impacts" },
    { name: "Fed Rate Shock", description: "Sudden monetary policy changes" },
    { name: "Crypto Surge", description: "Digital asset volatility spike" },
    { name: "Energy Crisis", description: "Oil market disruption effects" },
  ];

  return (
    <div
      className={`w-full max-w-4xl mx-auto space-y-6 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Scenario selector */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-white text-center">
          Try a Live Scenario
        </h3>
        <ScenarioSelector
          scenarios={scenarios}
          activeScenario={activeScenario}
          onSelect={setActiveScenario}
        />
      </div>

      {/* Mock dashboard */}
      <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-600/20 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Active Scenario</span>
          <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
            {scenarios[activeScenario].name}
          </span>
        </div>

        {/* Mock chart visualization */}
        <div className="h-64 bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded-lg p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform skew-x-12 animate-pulse"></div>
          <div className="relative z-10 h-full flex items-end justify-between">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-t opacity-70 animate-pulse"
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  width: "6%",
                  animationDelay: `${i * 100}ms`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Risk metrics */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-red-900/20 rounded-lg">
            <div className="text-sm text-gray-400">Value at Risk</div>
            <div className="text-2xl font-semibold text-red-400">-2.4%</div>
          </div>
          <div className="p-4 bg-yellow-900/20 rounded-lg">
            <div className="text-sm text-gray-400">Expected Shortfall</div>
            <div className="text-2xl font-semibold text-yellow-400">-4.1%</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-600/20">
          <div className="text-sm text-gray-400 mb-2">Trusted by</div>
          <div className="text-sm text-gray-300">
            Hedge funds, wealth managers, and institutional investors worldwide
          </div>
        </div>
      </div>
    </div>
  );
}
