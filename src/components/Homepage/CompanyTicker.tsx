export default function CompanyTicker() {
  const companies = [
    { id: 2, name: "Company B", logo: "/partners/deepbridge.png" },
    { id: 3, name: "Company C", logo: "/partners/dtl.png" },
    { id: 4, name: "Company D", logo: "/partners/uol.png" },
    { id: 4, name: "Company D", logo: "/partners/lbs.gif" },
    { id: 1, name: "Company A", logo: "/partners/aws.png" },
  ];

  return (
    <div className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 leading-none tracking-tight xl:mb-6">
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
              animation: scroll 20s linear infinite;
            }
          `}</style>

          {/* Ticker Container */}
          <div className="flex items-center space-x-16 scroll-animation">
            {/* First set of companies */}
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 items-center space-between"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-40 h-24 bg-white object-contain rounded-lg p-2"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company) => (
              <div key={`duplicate-${company.id}`} className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-44 h-20 object-contain rounded-lg bg-white p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
