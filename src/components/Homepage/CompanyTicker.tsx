export default function CompanyTicker() {
  const companies = [
    { id: 1, name: "Company A", logo: "/path/to/logo1.png" },
    { id: 2, name: "Company B", logo: "/path/to/logo2.png" },
    { id: 3, name: "Company C", logo: "/path/to/logo3.png" },
    { id: 4, name: "Company D", logo: "/path/to/logo4.png" },
    { id: 5, name: "Company E", logo: "/path/to/logo5.png" },
    { id: 6, name: "Company F", logo: "/path/to/logo6.png" },
    { id: 7, name: "Company G", logo: "/path/to/logo7.png" },
  ];

  return (
    <div className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 leading-none tracking-tight mb-6">
            TRUSTED BY
          </h1>
        </div>

        {/* Continuous Scrolling Ticker */}
        <div className="relative overflow-hidden">
          {/* CSS for continuous scrolling animation */}
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scroll-animation {
              animation: scroll 30s linear infinite;
            }
          `}</style>

          {/* Ticker Container */}
          <div className="flex items-center space-x-16 scroll-animation">
            {/* First set of companies */}
            {companies.map((company) => (
              <div key={company.id} className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-sm"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company) => (
              <div key={`duplicate-${company.id}`} className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
