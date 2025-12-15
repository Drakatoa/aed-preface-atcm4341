import React, { useState } from 'react';
import { 
  Menu, 
  Home as HomeIcon, 
  Bookmark, 
  User, 
  ArrowLeft, 
  ChevronDown, 
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
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null); // Track which item is expanded

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
        { id: 'tech-video-1', type: 'video', title: 'Intro Video', duration: '5 minutes', completed: true },
        { id: 'tech-article-1', type: 'article', title: 'Basics', duration: 'Article - 12 minutes', completed: true },
        { id: 'tech-article-2', type: 'article', title: 'Data Analysis', duration: 'Article - 5 minutes', completed: true },
        { id: 'tech-assignment-1', type: 'assignment', title: 'Analysis Free Response', duration: 'Assignment - 12 minutes', completed: true },
      ]
    },
    {
      id: 'trend',
      title: 'Trend Analysis',
      items: [
        { id: 'trend-video-1', type: 'video', title: 'Identifying Trends', duration: '8 minutes', completed: false },
        { id: 'trend-article-1', type: 'article', title: 'Support & Resistance', duration: 'Article - 15 minutes', completed: false },
        { id: 'trend-quiz-1', type: 'quiz', title: 'Trend Spotting Quiz', duration: 'Quiz - 10 minutes', completed: false },
      ]
    },
    {
      id: 'chart',
      title: 'Chart Patterns',
      items: [
        { id: 'chart-video-1', type: 'video', title: 'Head & Shoulders', duration: '12 minutes', completed: false },
        { id: 'chart-article-1', type: 'article', title: 'Candlestick Basics', duration: 'Article - 20 minutes', completed: false },
        { id: 'chart-assignment-1', type: 'assignment', title: 'Pattern Recognition', duration: 'Assignment - 15 minutes', completed: false },
      ]
    },
    {
      id: 'proficiency',
      title: 'Module 3 Proficiency/ Technical Skills',
      items: [
        { id: 'prof-quiz-1', type: 'quiz', title: 'Final Module Exam', duration: 'Exam - 45 minutes', completed: false },
        { id: 'prof-assignment-1', type: 'assignment', title: 'Portfolio Project', duration: 'Project - 2 hours', completed: false },
      ]
    }
  ];

  // Helper to toggle main sections
  const toggleSection = (id: string) => {
    setExpandedSectionId(expandedSectionId === id ? id : id);
  };

  // Quiz Component
  const QuizContent: React.FC = () => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

    const handleTextChange = (questionId: string, value: string) => {
      setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleOptionChange = (questionId: string, option: string) => {
      setSelectedOptions(prev => ({ ...prev, [questionId]: option }));
    };

    // Prevent copy, paste, and cut operations
    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCopy = (e: React.ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e: React.ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      return false;
    };

    return (
      <div className="mt-6 p-6 bg-[#FDF8FF] rounded-lg border border-purple-100 animate-in fade-in slide-in-from-top-2 duration-300">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#2d2436] mb-2">Trend Spotting Quiz</h3>
        </div>

        <div className="space-y-8">
          {/* Free Response Question 1 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-3">
                  Explain the difference between an uptrend and a downtrend. What are the key characteristics that help identify each?
                </label>
                <textarea
                  value={answers['q1'] || ''}
                  onChange={(e) => handleTextChange('q1', e.target.value)}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  onCut={handleCut}
                  onContextMenu={handleContextMenu}
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c6a96] focus:border-transparent resize-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Free Response Question 2 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-3">
                  Describe how support and resistance levels are formed and why they are important in trend analysis.
                </label>
                <textarea
                  value={answers['q2'] || ''}
                  onChange={(e) => handleTextChange('q2', e.target.value)}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  onCut={handleCut}
                  onContextMenu={handleContextMenu}
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c6a96] focus:border-transparent resize-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Free Response Question 3 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-3">
                  What role do volume indicators play in confirming trend strength? Provide a specific example.
                </label>
                <textarea
                  value={answers['q3'] || ''}
                  onChange={(e) => handleTextChange('q3', e.target.value)}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  onCut={handleCut}
                  onContextMenu={handleContextMenu}
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c6a96] focus:border-transparent resize-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Multiple Choice Question 1 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-4">
                  Which of the following best describes a trend reversal signal?
                </label>
                <div className="space-y-3">
                  {['A break of a key support level with increasing volume', 'A consolidation pattern forming at the top', 'A continuation of the current trend', 'A decrease in trading volume'].map((option, idx) => {
                    const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
                    const isSelected = selectedOptions['q4'] === option;
                    return (
                      <label
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-md border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#7c6a96] bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="q4"
                          value={option}
                          checked={isSelected}
                          onChange={() => handleOptionChange('q4', option)}
                          onPaste={handlePaste}
                          onCopy={handleCopy}
                          onCut={handleCut}
                          onContextMenu={handleContextMenu}
                          className="w-4 h-4 text-[#7c6a96] focus:ring-[#7c6a96]"
                        />
                        <span className="font-medium text-gray-700 min-w-[24px]">{optionLabel}.</span>
                        <span className="text-gray-700">{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Free Response Question 4 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                5
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-3">
                  How would you use trend lines to make trading decisions? Walk through your analytical process.
                </label>
                <textarea
                  value={answers['q5'] || ''}
                  onChange={(e) => handleTextChange('q5', e.target.value)}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  onCut={handleCut}
                  onContextMenu={handleContextMenu}
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c6a96] focus:border-transparent resize-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Multiple Choice Question 2 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                6
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-4">
                  What is the primary purpose of identifying trend direction in technical analysis?
                </label>
                <div className="space-y-3">
                  {['To predict exact price movements', 'To align trading strategies with market momentum', 'To eliminate all trading risks', 'To guarantee profitable trades'].map((option, idx) => {
                    const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
                    const isSelected = selectedOptions['q6'] === option;
                    return (
                      <label
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-md border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#7c6a96] bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="q6"
                          value={option}
                          checked={isSelected}
                          onChange={() => handleOptionChange('q6', option)}
                          onPaste={handlePaste}
                          onCopy={handleCopy}
                          onCut={handleCut}
                          onContextMenu={handleContextMenu}
                          className="w-4 h-4 text-[#7c6a96] focus:ring-[#7c6a96]"
                        />
                        <span className="font-medium text-gray-700 min-w-[24px]">{optionLabel}.</span>
                        <span className="text-gray-700">{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Free Response Question 5 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#7c6a96] text-white rounded-full flex items-center justify-center font-bold text-sm">
                7
              </span>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-900 mb-3">
                  Discuss the limitations of trend analysis. What factors should traders consider beyond trend identification?
                </label>
                <textarea
                  value={answers['q7'] || ''}
                  onChange={(e) => handleTextChange('q7', e.target.value)}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  onCut={handleCut}
                  onContextMenu={handleContextMenu}
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c6a96] focus:border-transparent resize-none text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-[#7c6a96] text-white font-semibold rounded-md hover:bg-[#644D76] transition-colors shadow-sm">
            Submit Quiz
          </button>
        </div>
      </div>
    );
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
                        const isSubActive = 'id' in sub && expandedSectionId === sub.id;
                        return (
                          <div 
                            key={idx} 
                            className="flex flex-col cursor-pointer group"
                            onClick={() => {
                              if ('id' in sub && sub.id) setExpandedSectionId(sub.id);
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
                      {section.items.map((item, idx) => {
                        const isItemExpanded = expandedItemId === item.id;
                        const isQuiz = item.type === 'quiz';
                        return (
                          <div key={idx} className="group">
                            <div 
                              className="flex items-start gap-4 cursor-pointer hover:bg-purple-50/50 p-2 rounded-md transition-colors"
                              onClick={() => {
                                if (isQuiz) {
                                  setExpandedItemId(isItemExpanded ? null : item.id);
                                }
                              }}
                            >
                              {/* Checkbox */}
                              <button 
                                className="mt-1 text-black hover:text-gray-700 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle checkbox toggle
                                }}
                              >
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
                              <div className="flex-1 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-bold text-lg text-gray-900 leading-none">
                                    {item.title}
                                  </h3>
                                </div>
                                
                                <div className="flex items-center gap-2 text-gray-500 mt-1">
                                  {item.type === 'video' && <PlayCircle className="w-4 h-4" />}
                                  {item.type === 'article' && <FileText className="w-4 h-4" />}
                                  {item.type === 'assignment' && <ClipboardList className="w-4 h-4" />}
                                  {item.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                                  
                                  <span className="text-sm md:text-base font-medium text-gray-400">
                                    {item.duration}
                                  </span>
                                  {isQuiz && (
                                    <span className="text-xs text-[#7c6a96] font-medium ml-2">
                                      Click to view questions
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Chevron for quiz items */}
                              {isQuiz && (
                                <div className="mt-3.5 mr-2.5">
                                  {isItemExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Quiz Content */}
                            {isQuiz && isItemExpanded && (
                              <QuizContent />
                            )}
                          </div>
                        );
                      })}
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

