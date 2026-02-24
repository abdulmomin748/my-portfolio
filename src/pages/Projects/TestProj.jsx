import React from 'react';

const HeroCard = ({ 
  title, 
  subtitle,
  description,
  image, 
  tags = [],
  codeUrl,
  demoUrl,
  ctaText = "View Details",
  logoUrl
}) => {
  return (
    <div className="group relative bg-slate-800/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 border border-slate-700/50 backdrop-blur-sm">
      {/* Hero Image with Overlay */}
      <div className="relative h-72 overflow-hidden">
        {/* Background Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
        
        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          {/* Logo */}
          {logoUrl && (
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="logo" className="h-8 w-8" />
              <span className="text-white font-semibold text-sm">{title}</span>
            </div>
          )}
          
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          {subtitle && (
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-2">
              {subtitle}
            </p>
          )}
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>
          
          {description && (
            <p className="text-slate-200 text-base max-w-xl mb-6 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Button */}
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105">
            {ctaText}
          </button>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 left-8 flex items-center gap-3">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/70 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/70 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/70 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/70 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-slate-900/80 backdrop-blur-sm p-4 border-t border-slate-700/50">
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700 hover:border-cyan-500 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-4">
            {codeUrl && (
              <a
                href={codeUrl}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6m0 0l-6-6m6 6H7m6 6v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                View Code
              </a>
            )}
            
            {demoUrl && (
              <a
                href={demoUrl}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example Showcase
const ProjectShowcase = () => {
  const projects = [
    {
      title: "Conceptual Copywriting",
      subtitle: "Creative Agency",
      description: "Transform your brand narrative with compelling copy that resonates. We craft stories that convert visitors into loyal customers.",
      image: "/api/placeholder/800/400",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      codeUrl: "#",
      demoUrl: "#",
      ctaText: "Explore Services",
      logoUrl: "/api/placeholder/32/32"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
      

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <HeroCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;