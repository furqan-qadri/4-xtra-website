export default function Footer() {
  return (
    <footer className="relative border-t border-purple-100/50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left side - Logo and Slogan */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">4X</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  4-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Xtra</span>
                </h1>
                <div className="text-sm text-purple-700 font-medium -mt-1">Technologies</div>
              </div>
            </div>
            
            {/* Slogan */}
            <p className="text-lg text-gray-600 text-center md:text-left font-medium">
            Intelligence Beyond Uncertainty
            </p>
          </div>

          {/* Right side - Actions and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://linkedin.com/company/4-xtra-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-600 font-semibold rounded-lg border border-blue-200/50 transition-all duration-300 hover:bg-white hover:border-blue-300/70 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Contact Us
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} 4-Xtra Technologies. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Bottom border decoration */}
        <div className="mt-8 pt-6 border-t border-purple-100/50">
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
} 