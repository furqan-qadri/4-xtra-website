import { useState, useEffect } from 'react';

// Morphing text component
function MorphingText({ text, delay = 0 }: { text: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span 
      className={`inline-block transition-all duration-1500 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-150 blur-sm'
      }`}
    >
      {text}
    </span>
  );
}

// Diagonal section component
function DiagonalSection({ 
  title, 
  description, 
  side,
  colorGradient,
  textColor,
  delay = 0
}: {
  title: string;
  description: string;
  side: 'left' | 'right';
  colorGradient: string;
  textColor: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const isLeft = side === 'left';

  return (
    <div className={`relative transition-all duration-1500 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`}`}>
      {/* Diagonal background element */}
      <div 
        className={`absolute ${isLeft ? '-left-20 lg:-left-40' : '-right-20 lg:-right-40'} top-0 w-full h-full ${colorGradient} opacity-10`}
        style={{
          clipPath: isLeft 
            ? 'polygon(0 0, 80% 0, 60% 100%, 0 100%)'
            : 'polygon(20% 0, 100% 0, 100% 100%, 40% 100%)'
        }}
      />
      
             {/* Content */}
       <div className={`relative z-10 p-6 lg:p-8 ${isLeft ? 'pl-0 lg:pl-6 text-left' : 'pl-6 lg:pl-12 text-right'}`}>
                 <h3 className={`text-3xl lg:text-5xl font-black ${textColor} mb-4 tracking-tight leading-tight`}>
           {title}
         </h3>
        <p className={`text-gray-700 text-lg lg:text-xl leading-relaxed max-w-md ${isLeft ? '' : 'ml-auto'}`}>
          {description}
        </p>
        
        {/* Accent line */}
        <div className={`mt-6 h-1 w-20 ${colorGradient} rounded-full ${isLeft ? '' : 'ml-auto'}`} />
      </div>
    </div>
  );
}

export default function Mission() {
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

    const section = document.getElementById('mission-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="relative min-h-screen bg-white overflow-hidden">
      {/* Custom styles for unique animations */}
      <style>{`
        @keyframes morphWave {
          0%, 100% { 
            transform: translateX(0) scaleY(1);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(20px) scaleY(1.1);
            opacity: 0.6;
          }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-morph-wave {
          animation: morphWave 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>

      {/* Large geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main diagonal sweep */}
        <div 
          className="absolute -top-20 -left-20 w-full h-full bg-gradient-to-br from-purple-100 via-purple-50 to-transparent opacity-40 animate-morph-wave"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
          }}
        />
        
        {/* Intersecting diagonal */}
        <div 
          className="absolute -top-20 -right-20 w-full h-full bg-gradient-to-bl from-indigo-100 via-indigo-50 to-transparent opacity-30 animate-morph-wave"
          style={{
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)',
            animationDelay: '4s'
          }}
        />

        {/* Floating accent shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-10 animate-float-slow" />
        <div className="absolute bottom-40 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-15 animate-float-slow" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '6s' }} />
      </div>

             {/* Main content container */}
       <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        
                 {/* Mission header - Creative typography */}
         <div className="text-center mb-20">
          <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Stylized "OUR" */}
            <div className="mb-4">
              <span className="text-4xl lg:text-3xl font-light text-gray-600 tracking-[0.5em]">
                <MorphingText text="OUR" />
              </span>
            </div>
            
            {/* Giant "MISSION" */}
            <div className="relative">
              <h1 className="text-xl lg:text-7xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 leading-none tracking-tight">
                <MorphingText text="MISSION" delay={300} />
              </h1>
              
              {/* Floating accent dot */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-6 h-6 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

                 {/* Core mission statement - Flowing design */}
         <div className={`text-center mb-12 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-5xl mx-auto">
            {/* Flowing background ribbon */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-100 opacity-50 rounded-full"
              style={{ transform: 'skewY(-1deg)' }}
            />
            
                         <p className="relative text-2xl lg:text-4xl text-gray-800 font-light leading-relaxed py-8 px-8">
              To empower every decision-maker in{' '}
              <span className="font-bold text-purple-700">Alternative Assets</span>{' '}
              to better anticipate the impacts of{' '}
              <span className="font-bold text-indigo-700">macro-level shock events</span>{' '}
              and immediately react
            </p>
          </div>
        </div>

                 {/* Three mission pillars - Asymmetric diagonal layout */}
         <div className="space-y-12 lg:space-y-14">
          
          {/* Fast Reaction - Left side */}
          <DiagonalSection
            title="FAST REACTION"
            description="Enhances real-time strategic decision making within periods of volatility"
            side="left"
            colorGradient="bg-gradient-to-r from-purple-500 to-purple-600"
            textColor="text-purple-600"
            delay={800}
          />

          {/* Better Returns - Right side */}
          <DiagonalSection
            title="BETTER RETURNS"
            description="Amplifies opportunities to make additional margin gains"
            side="right"
            colorGradient="bg-gradient-to-r from-indigo-500 to-purple-600"
            textColor="text-indigo-600"
            delay={1200}
          />

          {/* Stress Test - Left side */}
          <DiagonalSection
            title="STRESS-TEST SHOCK EVENTS"
            description="Complies with increasing internal and regulatory demands on stress-testing for shock events"
            side="left"
            colorGradient="bg-gradient-to-r from-purple-600 to-indigo-700"
            textColor="text-purple-700"
            delay={1600}
          />
        </div>
      </div>
    </section>
  );
} 