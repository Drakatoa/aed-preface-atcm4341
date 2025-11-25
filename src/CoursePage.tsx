import React, { useState } from 'react';
import { 
  Menu, 
  Home as HomeIcon, 
  Bookmark, 
  User, 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight,
  ChevronUp, 
  CheckCircle, 
  Circle, 
  PlayCircle, 
  FileText, 
  ClipboardList, 
  CheckSquare, 
  Square,
  HelpCircle
} from 'lucide-react';

// Import logo assets
import prefaceLogo from './assets/preface-logo.png';
import fidelityLogo from './assets/fidelity-logo-green.png';

interface CoursePageProps {
  onNavigateHome?: () => void;
  onNavigateProfile?: () => void;
  onNavigateIntro?: () => void;
}

const CoursePage: React.FC<CoursePageProps> = ({ onNavigateHome, onNavigateProfile, onNavigateIntro }) => {
  // --- STATE ---
  const [expandedModule, setExpandedModule] = useState<number | null>(3); // Default Module 3 open in sidebar
  const [expandedSectionId, setExpandedSectionId] = useState<string>('technical'); // Default open section in main content

  // --- BRAND LOGO COMPONENT ---
  const BrandLogo = () => (
    <div className="relative flex flex-col items-center justify-center mr-4">
      <div className="relative shadow-sm">
         <img 
           src={prefaceLogo} 
           alt="Preface Logo" 
           className="h-10 md:h-12 w-auto"
         />
      </div>
    </div>
  );

  // --- DATA: SIDEBAR MODULES ---
  const modules = [
    { 
      id: 1, 
      title: 'Module 1', 
      completed: true,
      subItems: [
        { title: 'Introduction to Markets', time: 'Unit 1 • 10 min', active: false },
        { title: 'Financial Instruments', time: 'Unit 2 • 25 min', active: false },
      ]
    },
    { 
      id: 2, 
      title: 'Module 2', 
      completed: true,
      subItems: [
        { title: 'Risk Management', time: 'Unit 1 • 15 min', active: false },
        { title: 'Portfolio Diversity', time: 'Unit 2 • 20 min', active: false },
      ]
    },
    { 
      id: 3, 
      title: 'Module 3', 
      completed: false, 
      subItems: [
        { title: 'Technical Analysis', time: 'Unit 1 • 20 min', id: 'technical' },
        { title: 'Trend Analysis', time: 'Unit 2 • 15 min', id: 'trend' },
        { title: 'Chart Patterns', time: 'Unit 3 • 20 min', id: 'chart' },
        { title: 'Module Proficiency', time: 'Unit 4 • 15 min', id: 'proficiency' },
      ]
    },
    { 
      id: 4, 
      title: 'Module 4', 
      completed: false,
      subItems: [
        { title: 'Advanced Trading', time: 'Unit 1 • 30 min', active: false },
        { title: 'Market Psychology', time: 'Unit 2 • 25 min', active: false },
      ]
    },
  ];

  // --- DATA: MAIN CONTENT SECTIONS ---
  const mainSections = [
    {
      id: 'technical',
      title: 'Technical Analysis',
      items: [
        { type: 'video', title: 'Intro Video', duration: '5 minutes', completed: true },
        { type: 'article', title: 'Basics', duration: 'Article - 12 minutes', completed: true },
        { type: 'article', title: 'Data Analysis', duration: 'Article - 5 minutes', completed: true },
        { type: 'assignment', title: 'Analysis Free Response', duration: 'Assignment - 12 minutes', completed: true },
      ]
    },
    {
      id: 'trend',
      title: 'Trend Analysis',
      items: [
        { type: 'video', title: 'Identifying Trends', duration: '8 minutes', completed: false },
        { type: 'article', title: 'Support & Resistance', duration: 'Article - 15 minutes', completed: false },
        { type: 'quiz', title: 'Trend Spotting Quiz', duration: 'Quiz - 10 minutes', completed: false },
      ]
    },
    {
      id: 'chart',
      title: 'Chart Patterns',
      items: [
        { type: 'video', title: 'Head & Shoulders', duration: '12 minutes', completed: false },
        { type: 'article', title: 'Candlestick Basics', duration: 'Article - 20 minutes', completed: false },
        { type: 'assignment', title: 'Pattern Recognition', duration: 'Assignment - 15 minutes', completed: false },
      ]
    },
    {
      id: 'proficiency',
      title: 'Module 3 Proficiency/ Technical Skills',
      items: [
        { type: 'quiz', title: 'Final Module Exam', duration: 'Exam - 45 minutes', completed: false },
        { type: 'assignment', title: 'Portfolio Project', duration: 'Project - 2 hours', completed: false },
      ]
    }
  ];

  // Helper to toggle main sections
  const toggleSection = (id: string) => {
    setExpandedSectionId(expandedSectionId === id ? id : id);
  };

  return (
    <div className="min-h-screen bg-[#FDF8FF] font-sans text-gray-800 flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="flex items-center justify-between px-4 py-3 md:px-8 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="text-gray-500 w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
             <BrandLogo />
             <div className="hidden md:flex flex-col -mt-1">
               <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400">
                 Applicant Portal
               </span>
               <h1 className="text-[#3e2b4d] text-2xl md:text-3xl font-bold tracking-tight">
                 Fidelity
               </h1>
             </div>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <button onClick={onNavigateHome} className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
            <HomeIcon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
          </button>
          <button className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
            <Bookmark className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
          </button>
          <button 
            onClick={onNavigateProfile}
            className="p-2 text-gray-500 hover:text-[#644D76] transition-colors"
          >
            <User className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* --- MAIN LAYOUT --- */}
      <div className="flex flex-1 flex-col md:flex-row max-w-7xl mx-auto w-full">
        
        {/* --- LEFT SIDEBAR --- */}
        <aside className="w-full md:w-80 p-6 md:border-r border-gray-200/60 bg-[#FDF8FF] md:min-h-[calc(100vh-80px)]">
          <button 
            onClick={onNavigateIntro}
            className="mb-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-start gap-4 mb-8">
            <img 
              src={fidelityLogo} 
              alt="Course Logo" 
              className="w-20 h-25 rounded-full object-cover shadow-sm"
            />
            <div>
              <h2 className="text-lg font-bold text-[#2d2436] leading-tight">Course Letter Application</h2>
              <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Fidelity</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Course Material</h3>
              <ChevronUp className="w-4 h-4 text-gray-500" />
            </div>

            <div className="space-y-1 relative">
              <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-gray-200 z-0"></div>

              {modules.map((mod) => (
                <div key={mod.id} className="relative z-10 bg-[#FDF8FF]">
                  {/* Module Header */}
                  <div 
                    className="flex items-center gap-3 py-2 cursor-pointer hover:bg-purple-50 rounded-md px-1"
                    onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                  >
                    {mod.completed ? (
                      <CheckCircle
                        className="w-6 h-6 text-[#7c6a96]"
                        style={{ fill: 'none', strokeWidth: 2 }}
                      />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 fill-white" />
                    )}
                    
                    <span className={`font-semibold ${mod.id === expandedModule ? 'text-gray-900' : 'text-gray-600'}`}>
                      {mod.title}
                    </span>
                    
                    {mod.id === expandedModule ? (
                      <ChevronUp className="w-4 h-4 ml-auto text-gray-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
                    )}
                  </div>

                  {/* Module Sub-items */}
                  {expandedModule === mod.id && mod.subItems && (
                    <div className="ml-9 mb-4 space-y-3 mt-1">
                      {mod.subItems.map((sub, idx) => {
                        const isSubActive = expandedSectionId === sub.id;
                        return (
                          <div 
                            key={idx} 
                            className="flex flex-col cursor-pointer group"
                            onClick={() => {
                              if (sub.id) setExpandedSectionId(sub.id);
                            }}
                          >
                            <span className={`text-sm font-bold ${isSubActive ? 'text-black' : 'text-gray-500 group-hover:text-gray-800'}`}>
                              {sub.title}
                            </span>
                            <span className="text-[10px] text-gray-400 font-medium">
                              {sub.time}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* --- RIGHT CONTENT AREA --- */}
        <main className="flex-1 p-6 md:p-12 bg-white md:rounded-tl-3xl shadow-sm border-l border-gray-100">
          <div className="max-w-3xl">
            
            {/* Render ALL sections, but change style based on expanded state */}
            {mainSections.map((section) => {
              const isOpen = expandedSectionId === section.id;

              return (
                <div key={section.id} className="mb-6">
                  {/* Section Header */}
                  <div 
                    onClick={() => toggleSection(section.id)}
                    className={`flex items-center gap-2 cursor-pointer group ${isOpen ? 'mb-6' : 'mb-2'}`}
                  >
                    {/* Different visual style for Open vs Closed header */}
                    {isOpen ? (
                      // Expanded Header Style (Active)
                      <>
                        <ChevronUp className="w-5 h-5 text-gray-900" />
                        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                          {section.title}
                        </h1>
                      </>
                    ) : (
                      // Collapsed Header Style (Clean List Item)
                      <div className="flex items-center gap-3">
                         <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                         <h3 className="text-lg font-bold text-gray-600 group-hover:text-[#7c6a96] transition-colors">
                           {section.title}
                         </h3>
                      </div>
                    )}
                  </div>

                  {/* Section Items (Only show if open) */}
                  {isOpen && (
                    <div className="space-y-6 ml-1 md:ml-7 mb-10 animate-in fade-in slide-in-from-top-2 duration-300">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="group">
                          <div className="flex items-start gap-4">
                            {/* Checkbox */}
                            <button className="mt-1 text-black hover:text-gray-700 transition-colors">
                               {item.completed ? (
                                 <CheckSquare
                                   className="w-5 h-5 text-[#644D76]"
                                   strokeWidth={2.4}
                                   style={{ fill: 'none' }}
                                 />
                               ) : (
                                 <Square
                                   className="w-5 h-5 text-gray-400"
                                   strokeWidth={2}
                                   style={{ fill: 'none' }}
                                 />
                               )}
                            </button>

                            {/* Item Details */}
                            <div className="flex flex-col gap-1">
                              <h3 className="font-bold text-lg text-gray-900 leading-none">
                                {item.title}
                              </h3>
                              
                              <div className="flex items-center gap-2 text-gray-500 mt-1">
                                {item.type === 'video' && <PlayCircle className="w-4 h-4" />}
                                {item.type === 'article' && <FileText className="w-4 h-4" />}
                                {item.type === 'assignment' && <ClipboardList className="w-4 h-4" />}
                                {item.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                                
                                <span className="text-sm md:text-base font-medium text-gray-400">
                                  {item.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Progress Bar */}
            <div className="mt-20 md:mt-32 w-full">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#7c6a96] w-3/4 rounded-full"></div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;

