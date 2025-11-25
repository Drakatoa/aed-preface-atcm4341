import React from 'react';
import { Menu, Home as HomeIcon, Bookmark, User } from 'lucide-react';

// Import logo assets
import prefaceLogo from './assets/preface-logo.png';
import fidelityLogoGrey from './assets/fidelity-logo-grey.png';
import schwabLogoGrey from './assets/charles-schwab-logo-grey.png';

/**
 * Shared Types
 */
interface Course {
  id: number;
  company: string;
  role: string;
  modulesCompleted: number;
  totalModules: number;
  attemptsUsed: number;
  maxAttempts: number;
  logoType: 'fidelity' | 'schwab';
}

/**
 * Mock Data
 */
const courses: Course[] = [
  {
    id: 1,
    company: 'Fidelity',
    role: 'Customer Service Representative',
    modulesCompleted: 3,
    totalModules: 4,
    attemptsUsed: 1,
    maxAttempts: 1,
    logoType: 'fidelity',
  },
  {
    id: 2,
    company: 'Charles Schwab',
    role: 'Financial Analyst',
    modulesCompleted: 1,
    totalModules: 4,
    attemptsUsed: 1,
    maxAttempts: 5,
    logoType: 'schwab',
  },
];

/**
 * Component: Custom "Preface" Logo
 */
const BrandLogo = () => (
  <div className="relative flex flex-col items-center justify-center mr-4">
    <div className="relative shadow-sm">
       <img 
         src={prefaceLogo} 
         alt="Preface Logo" 
         className="h-12 w-auto"
       />
    </div>
  </div>
);

/**
 * Component: Fidelity Watermark
 * FIX: Adjusted positioning and increased size.
 */
const FidelityLogo = () => (
  <div className="absolute right-8 bottom-0 z-0 pointer-events-none opacity-100 mix-blend-multiply">
    <img 
      src={fidelityLogoGrey} 
      alt="Fidelity Watermark"
      className="h-52 w-auto object-contain"
    />
  </div>
);

/**
 * Component: Schwab Watermark
 * FIX: Adjusted positioning and increased size.
 */
const SchwabLogo = () => (
  <div className="absolute right-8 bottom-[0px] z-0 pointer-events-none opacity-100 mix-blend-multiply">
    <img
      src={schwabLogoGrey}
      alt="Charles Schwab Watermark"
      className="max-w-[210px] h-auto w-auto object-contain"
    />
  </div>
);

/**
 * Component: CourseCard
 */
const CourseCard: React.FC<{ course: Course; onContinueCourse?: () => void; onViewInfo?: (courseId: number) => void }> = ({
  course,
  onContinueCourse,
  onViewInfo,
}) => {
  const progressPercent = (course.modulesCompleted / course.totalModules) * 100;

  return (
    <div className="relative bg-[#F4F4F5] rounded-[2rem] p-6 md:p-8 mb-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Grid Layout for Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between h-full">
        
        {/* Left Side: Info & Actions */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-[#3e2b4d] text-3xl font-bold mb-1 tracking-tight">
            {course.company}
          </h2>
          <p className="text-gray-500 text-lg font-medium mb-8">
            {course.role}
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex gap-3">
              <button
                onClick={onContinueCourse}
                className="bg-[#644D76] hover:bg-[#523e60] text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors active:transform active:scale-95 whitespace-nowrap"
              >
                Continue Course
              </button>
              <button
                onClick={() => onViewInfo?.(course.id)}
                className="px-6 py-3 rounded-lg border border-gray-300 text-[#3e2b4d] font-semibold bg-white hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Course Info
              </button>
            </div>

            {/* Progress Bar Section */}
            <div className="flex-1 w-full max-w-sm">
              <div className="flex justify-between mb-2 text-gray-600 font-medium">
                <span>{course.modulesCompleted}/{course.totalModules} Modules Complete</span>
              </div>
              <div className="h-2 w-full bg-white rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#644D76] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Attempts Indicator (Desktop) */}
        <div className="mt-6 md:mt-0 flex flex-col justify-end items-end relative min-h-[100px] md:min-h-0">
          <span className="text-[#554066] font-semibold text-lg relative z-20">
            {course.attemptsUsed}/{course.maxAttempts} attempts
          </span>
        </div>
      </div>

      {/* Decorative Watermarks */}
      {course.logoType === 'fidelity' && <FidelityLogo />}
      {course.logoType === 'schwab' && <SchwabLogo />}
    </div>
  );
};

interface HomeProps {
  onContinueCourse?: () => void;
  onNavigateHome?: () => void;
  onNavigateProfile?: () => void;
  onViewCourseInfo?: (courseId: number) => void;
}

// Home Component (My Current Courses)
const Home: React.FC<HomeProps> = ({ onContinueCourse, onNavigateHome, onNavigateProfile, onViewCourseInfo }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-purple-100">
      
      {/* --- HEADER --- */}
      <header className="flex items-center justify-between px-4 py-4 md:px-8 border-b border-transparent">
        {/* Left: Nav & Branding */}
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="text-gray-500 w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
             <BrandLogo />
             <div className="flex flex-col -mt-1">
               <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400">
                 Applicant Portal
               </span>
               <h1 className="text-[#3e2b4d] text-2xl md:text-3xl font-bold tracking-tight">
                 My Current Courses
               </h1>
             </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={onNavigateHome}
            className="p-2 text-gray-500 hover:text-[#644D76] transition-colors"
          >
            <HomeIcon className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <button className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
            <Bookmark className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <button 
            onClick={onNavigateProfile}
            className="p-2 text-gray-500 hover:text-[#644D76] transition-colors"
          >
            <User className="w-7 h-7" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onContinueCourse={onContinueCourse} onViewInfo={onViewCourseInfo} />
          ))}
        </div>
      </main>

      <style>{`
        body {
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Home;

