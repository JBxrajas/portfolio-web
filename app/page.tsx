import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-8 overflow-visible">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight pb-2">
              Jesús Barajas Villegas
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
              Senior QA Automation Tester
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Experienced automation and performance tester specializing in designing and implementing 
            automated testing frameworks with Cypress, Playwright, and Selenium. Delivering high-quality 
            software through CI/CD integration and comprehensive testing strategies.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:jbarajasvillegas@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email Me
            </a>
            
            <a
              href="https://www.linkedin.com/in/jes%C3%BAs-barajas-villegas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all font-medium shadow-md hover:shadow-lg border border-slate-200 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
              </svg>
              LinkedIn
            </a>

            <a
              href="tel:+526671382699"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all font-medium shadow-md hover:shadow-lg border border-slate-200 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              +52 667 138 2699
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in animate-delay-100">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-slate-100 animate-slide-in-left animate-delay-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Test Automation Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cypress', 'Playwright', 'Selenium', 'Robot Framework', 'Postman'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Performance Testing
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['JMeter', 'LoadRunner', 'Neoload'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Languages & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  DevOps & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Git/Github', 'Gitlab', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-slate-100 animate-slide-in-right animate-delay-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Work Experience</h3>
            <div className="text-slate-600 space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-900 text-lg">Senior QA Automation Tester</h4>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Nov 2024 - Present</span>
                </div>
                <p className="text-sm font-medium text-blue-600 mb-2">EPAM, Mexico</p>
                <p className="text-sm">Working on Test as a Service projects using JavaScript and Python for design, planning, and implementation of automated testing frameworks with CI/CD integration.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-900 text-lg">Automation Tester</h4>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Jan 2021 - Nov 2024</span>
                </div>
                <p className="text-sm font-medium text-blue-600 mb-2">Improving, Mexico</p>
                <p className="text-sm">QA Automation Engineer for E-Commerce platform, automating tests with Cypress and Playwright using Python and TypeScript, managing test cases in Jira (XRAY).</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-900 text-lg">Automation/Performance Tester</h4>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Oct 2017 - Dec 2020</span>
                </div>
                <p className="text-sm font-medium text-blue-600 mb-2">NEORIS, Mexico</p>
                <p className="text-sm">Automated tests with Selenium and Robot Framework using Python. Conducted performance testing with JMeter, LoadRunner, and Neoload integrated with Jenkins.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Education & Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-slate-100 animate-scale-in animate-delay-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Education</h3>
            <div className="text-slate-600 text-center">
              <p className="font-semibold text-slate-900 mb-1">ICT Engineer</p>
              <p className="text-sm text-blue-600 font-medium mb-1">Instituto Tecnológico de Culiacán</p>
              <p className="text-xs text-slate-500">2015 - 2020</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-slate-100 animate-scale-in animate-delay-400">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.490 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Languages</h3>
            <div className="text-slate-600 space-y-3">
              <div>
                <p className="font-semibold text-slate-900 text-center">Spanish</p>
                <p className="text-sm text-slate-500 text-center">Native</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-center">English</p>
                <p className="text-sm text-slate-500 text-center">Advanced<br />PET Cambridge</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 card-hover text-white animate-scale-in animate-delay-500">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-6 text-center">Portfolio Stats</h3>
            <div className="space-y-4">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-1">7+</div>
                <div className="text-sm opacity-90">Years in QA</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-1">5</div>
                <div className="text-sm opacity-90">Open Source Projects</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-1">3</div>
                <div className="text-sm opacity-90">Major Companies</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
