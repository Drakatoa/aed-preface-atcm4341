import React from 'react';
import { Menu, Home as HomeIcon, Bookmark, User, ArrowRight, ArrowLeft } from 'lucide-react';

// Import logo assets
import prefaceLogo from './assets/preface-logo.png';
import fidelityLogo from './assets/fidelity-logo.png';
import checkboxIcon from './assets/checkbox.png';
import certificateIcon from './assets/certificate.png';
import awardIcon from './assets/award.png';

interface IntroProps {
  onNavigateHome?: () => void;
  onNavigateCourse?: () => void;
  onNavigateProfile?: () => void;
  onNavigateEntry?: () => void;
}

const Intro: React.FC<IntroProps> = ({ onNavigateHome, onNavigateCourse, onNavigateProfile, onNavigateEntry }) => {
  // BrandLogo component matching Home page
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

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- HEADER --- */}
      <header className="flex items-center justify-between px-4 py-4 md:px-8 border-b border-transparent">
        {/* Left: Nav & Branding */}
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="text-gray-500 w-6 h-6" />
          </button>
          <button
            onClick={onNavigateEntry}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="text-gray-500 w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
             <BrandLogo />
             <div className="flex flex-col -mt-1">
               <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400">Applicant Portal</span>
               <h1 className="text-[#3e2b4d] text-2xl md:text-3xl font-bold tracking-tight">
                 Fidelity
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

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* --- Hero Section --- */}
        <section className="relative w-full">
          {/* Background Banner */}
          <div className="bg-[#5e3b6e] h-64 md:h-80 w-full rounded-2xl overflow-hidden relative shadow-lg">
            {/* Abstract Background Graphic (Sunburst Placeholder) */}
            <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
               {/* Fidelity Logo */}
               <img 
                 src={fidelityLogo} 
                 alt="Fidelity Logo" 
                 className="absolute right-0 top-1/2 -translate-y-1/2 h-[200%] w-[200%] object-contain opacity-100"
               />
            </div>

            {/* Bottom to top transparent black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Title */}
            <div className="absolute bottom-20 left-8 md:left-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Fidelity</h1>
            </div>
          </div>

          {/* Floating Cards (Stats) */}
          <div className="absolute -bottom-10 left-8 md:left-12 flex flex-row gap-4">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md w-36 h-24 flex flex-col justify-center items-center p-2 text-center border border-gray-200">
              <span className="font-bold text-sm text-gray-900 leading-tight mb-1">Customer Service Rep.</span>
              <div className="w-full border-t border-gray-300 my-1"></div>
              <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wide">Job Position</span>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md w-36 h-24 flex flex-col justify-center items-center p-2 text-center border border-gray-200">
              <span className="font-bold text-2xl text-gray-900">220</span>
              <div className="w-full border-t border-gray-300 my-1"></div>
              <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wide">Spots Currently Available</span>
            </div>
          </div>
        </section>

        {/* --- Description Section --- */}
        <section className="mt-16 bg-[#dcdcdc] rounded-3xl p-8 relative pb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black mb-2">Description:</h2>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
            Being a customer service representative involves assisting clients with their financial accounts via phone. This
            can include resolving issues and answering inquiries about products and services, as well as processing
            transactions. The key responsibilities of this position include handling inquiries about retirement and brokerage
            accounts, providing guidance, and using strong communication skills to ensure a positive client experience.
            Becoming licensed and comfortable with a fast-paced environment with a focus on problem solving and
            continuous learning is crucial. Some of the core responsibilities include client support, problem resolution,
            transaction processing, information and processing, and account management. The required skills and
            qualifications for this position are as follows: Strong communication and interpersonal skills, Problem-solving and
            analytical skills, Empathy and the ability to listen to customers' concerns, Ability to adapt to new technology and
            learn quickly, Interest in the financial services industry and economic trends, a willingness to study for and
            obtain financial licenses like the Series 7 and Series 63 is required, Fluency in English, with additional language
            skills like Spanish, Italian, Korean, or Mandarin often preferred for specific roles.
          </p>

          {/* CTA Button overlapping the bottom */}
          <div className="absolute -bottom-5 left-8">
            <button 
              onClick={onNavigateCourse}
              className="bg-[#785b88] hover:bg-[#6a4f79] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
            >
              Start Course Journey
            </button>
          </div>
        </section>

        {/* --- Course Journey Flow Steps --- */}
        <section className="bg-[#cdc0db] rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-[#4a3b55">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-4">
            {/* Icon Container: Replace SVG with your Image Asset */}
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative p-4">
               <img 
                 src={checkboxIcon} 
                 alt="Answer Questions" 
                 className="w-full h-full object-contain"
               />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-600">Answer Questions</span>
          </div>

          {/* Arrow 1 */}
          <div className="text-[#2d2436]">
            <ArrowRight size={48} strokeWidth={2} />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-4">
             {/* Icon Container: Replace SVG with your Image Asset */}
             <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative p-4">
               <img 
                 src={certificateIcon} 
                 alt="Earn Certificates" 
                 className="w-full h-full object-contain"
               />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-600">Earn Certificates</span>
          </div>

           {/* Arrow 2 */}
           <div className="text-[#2d2436]">
            <ArrowRight size={48} strokeWidth={2} />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-4">
             {/* Icon Container: Replace SVG with your Image Asset */}
             <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative p-4">
               <img 
                 src={awardIcon} 
                 alt="Be Recognized" 
                 className="w-full h-full object-contain"
               />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-600">Be Recognized</span>
          </div>

        </section>

      </main>
    </div>
  );
};

export default Intro;

