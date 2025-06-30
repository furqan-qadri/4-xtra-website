import { useState, useEffect } from 'react';

// Team member card component
function TeamMemberCard({ 
  name, 
  title, 
  expertise, 
  skills,
  imageUrl,
  delay,
  isVisible,
  index
}: { 
  name: string;
  title: string;
  expertise: string;
  skills: string[];
  imageUrl?: string;
  delay: number;
  isVisible: boolean;
  index: number;
}) {
  const gradients = [
    'from-purple-600 to-indigo-600',
    'from-indigo-600 to-pink-600', 
    'from-pink-600 to-purple-600'
  ];

  const glowColors = [
    'bg-purple-500',
    'bg-indigo-500',
    'bg-pink-500'
  ];

  return (
    <div 
      className={`group relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-4 ${glowColors[index]} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />
      
      {/* Main card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 group-hover:bg-white transition-all duration-500 group-hover:scale-105 h-full">
        
        {/* Image with gradient fallback */}
        <div className={`relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500 ${!imageUrl ? `bg-gradient-to-br ${gradients[index]}` : ''}`}>
          {imageUrl ? (
            <>
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback gradient placeholder (hidden by default) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} hidden items-center justify-center`}>
                <div className="text-white text-4xl font-bold opacity-60">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-60">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          )}
          {/* Pulse rings */}
          <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-pulse" />
        </div>

        {/* Name and title */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
            {name}
          </h3>
          <p className={`text-sm font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent px-3 py-1 rounded-full border border-purple-200 inline-block`}>
            {title}
          </p>
        </div>

        {/* Expertise summary */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 leading-relaxed text-center">
            {expertise}
          </p>
        </div>

        {/* Skills with staggered animation */}
        <div className="space-y-3">
          {skills.map((skill, skillIndex) => (
            <div 
              key={skillIndex}
              className={`flex items-center text-sm text-gray-700 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${delay + 200 + (skillIndex * 100)}ms` }}
            >
              <div className={`w-2 h-2 ${glowColors[index]} rounded-full mr-3 animate-pulse flex-shrink-0`} />
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index]} rounded-b-3xl opacity-60`} />
      </div>
    </div>
  );
}

export default function Team() {
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

    const section = document.getElementById('team-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Dr. Janos Gyarmati-Szabo",
      title: "Founder & CSPO",
      expertise: "20 years experience in Quantitative modelling. Expert in Advanced Mathematics and Extreme Value Theory. 10 years in risk management in major investment banks.",
      skills: [
        "Advanced Mathematics",
        "Extreme Value Theory", 
        "Quantitative Modelling",
        "Risk Management",
        "Investment Banking"
      ],
      imageUrl: "public/janos.png"
    },
    {
      name: "Ben Mein",
      title: "CEO & CCO",
      expertise: "20+ years in Data, ML & SaaS tech. Founded ventures in TMT, Fintech and Proptech. Early-stage fundraising and PE-backed ventures.",
      skills: [
        "Data & ML Strategy",
        "SaaS Technology",
        "Venture Building",
        "TMT & Fintech",
        "Fundraising & PE"
      ],
      imageUrl: "public/ben.png"
    },
    {
      name: "Dr. Lukas Cironis", 
      title: "CTO",
      expertise: "10 years in Statistical Modelling and AI. Specialising in GAN, Transformer, and Diffusion models. ML-focussed technologist.",
      skills: [
        "Statistical Modelling",
        "Generative AI (GANs)",
        "Transformer Models",
        "Diffusion Models",
        "ML Technology"
      ],
      imageUrl: "public/lukas.png"
    }
  ];

  return (
    <section id="team-section" className="relative min-h-screen overflow-hidden pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 leading-none tracking-tight mb-6">
              THE EXEC TEAM
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              A blend of seasoned experience and expertise in data, finance, advanced science, commercialisation and tech venture-building
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
              delay={500 + (index * 200)}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
} 