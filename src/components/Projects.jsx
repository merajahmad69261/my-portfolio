import React, { useState } from 'react';
import { projects, socialLinks } from '../data/portfolioData';

// SVG Icons for clean responsive scaling
const GitHubIcon = () => (
  <svg className="w-5 h-5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const FlagshipCaseStudy = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview'); // overview, architecture, features

  return (
    <div 
      data-aos="fade-up"
      className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#c1b1a1]/60 via-white/10 to-purple-500/40 shadow-2xl overflow-hidden mb-12"
    >
      <div className="rounded-3xl p-6 md:p-10 bg-[#0f0f0f]/95 h-full backdrop-blur-md">
        
        {/* Flagship Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#e0d5cb] bg-[#c1b1a1]/20 px-4 py-1.5 rounded-full border border-[#c1b1a1]/30 mb-3">
              {project.badge}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-md"
              >
                <GitHubIcon />
                Code Base
              </a>
            )}
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Standard details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono font-bold text-[#f2eae1] bg-[#3e342a]/30 rounded-full border border-[#c1b1a1]/20 hover:bg-[#c1b1a1]/20 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex gap-2">
              <span className="text-xs font-bold text-white/40 font-mono">ROLE AUDITS: Student, Recruiter, Admin Dashboards</span>
            </div>
          </div>

          {/* Right Column: Interactive Tabs for Case Study */}
          <div className="lg:col-span-7 bg-zinc-950/60 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col">
            
            {/* Tab Headers */}
            <div className="flex gap-2 border-b border-white/10 pb-4 mb-6 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'overview' 
                    ? 'bg-[#c1b1a1] text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Overview & Challenge
              </button>
              <button 
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'architecture' 
                    ? 'bg-[#c1b1a1] text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Architecture
              </button>
              <button 
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'features' 
                    ? 'bg-[#c1b1a1] text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Key Workspaces
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex flex-col justify-between">
              {activeTab === 'overview' && (
                <div className="animate-fadeIn">
                  <h4 className="text-white text-lg font-bold mb-3">The Challenge</h4>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                    {project.caseStudy.problem}
                  </p>
                  <h4 className="text-[#c1b1a1] text-lg font-bold mb-3">Our Solution</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="animate-fadeIn">
                  <h4 className="text-white text-lg font-bold mb-4">MERN Decoupled Schema</h4>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                    {project.caseStudy.architecture}
                  </p>
                  <div className="bg-[#3e342a]/20 border border-[#c1b1a1]/20 rounded-xl p-4 flex gap-3 items-start">
                    <span className="text-xl">🛡️</span>
                    <div>
                      <h5 className="text-white text-sm font-bold">Authentication Middleware</h5>
                      <p className="text-white/50 text-xs mt-1">
                        Utilizes bcrypt for salted password credentials on MongoDB Atlas and JSON Web Token (JWT) request headers for session state validations across MVC API end-routes.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="animate-fadeIn">
                  <h4 className="text-white text-lg font-bold mb-4">Integrated Portal Roles</h4>
                  <ul className="space-y-3.5">
                    {project.caseStudy.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="text-[#d5c7b8] mt-1">✔</span>
                        <span className="text-white/80 text-sm md:text-base font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

const ProjectCard = ({ project, aosDelay }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="bg-[#111111]/90 hover:bg-[#111111]/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 hover:border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      {/* Badge */}
      {project.badge && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#d5c7b8] bg-[#c1b1a1]/10 px-3 py-1 rounded-full border border-[#c1b1a1]/20 mb-4">
          {project.badge}
        </span>
      )}

      {/* Number + Title */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-4xl font-black text-white/10 font-serif italic">{project.number}</span>
        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techTags.map((tag) => (
          <span 
            key={tag}
            className="px-2.5 py-1 text-[11px] font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-[#c1b1a1]/20 hover:border-[#c1b1a1]/30 hover:text-[#e0d5cb] transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-2">
      {project.links.githubProfile && (
        <a 
          href={project.links.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300"
        >
          <GitHubIcon />
          GitHub Profile
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const flagshipProject = projects.find(p => p.isFlagship);
  const otherProjects = projects.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Engineering experiences,<br className="hidden md:block" /> built to perform
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            Case studies of full-stack implementations and competitive programming creations.
          </p>
        </div>

        {/* Flagship Case Study */}
        {flagshipProject && (
          <FlagshipCaseStudy project={flagshipProject} />
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {otherProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
