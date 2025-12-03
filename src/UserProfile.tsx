import React, { useRef } from 'react';
import { 
  Home as HomeIcon, 
  Bookmark, 
  User, 
  MoreVertical,
  Linkedin,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import existing assets
import prefaceLogo from './assets/preface-logo.png';
import profilePic from './assets/profile-pic.png';
import fidelityBanner from './assets/fidelity-banner.png';
import edwardJonesBanner from './assets/edward-jones-banner.png';
import schwabBanner from './assets/schwab-banner.png';
import robinhoodBanner from './assets/robinhood-banner.png';
import vanguardBanner from './assets/vanguard-banner.png';

interface UserProfileProps {
  onNavigateHome?: () => void;
  onNavigateCertificate?: (data: { company: string; role: string; completedDate: string }) => void;
  onNavigateLinkedIn?: (data?: { company: string; role: string; completedDate: string }) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigateHome, onNavigateCertificate, onNavigateLinkedIn }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle manual scrolling via buttons
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 380; // Approximate card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  // --- DATA MOCKUPS ---
  const certificates = [
    {
      id: 1,
      company: 'Fidelity',
      completedDate: 'Completed March 2025',
      image: fidelityBanner,
      role: 'Customer Service Representative',
      subTitle: 'Application Cover Letter Course',
      bgColor: 'bg-white'
    },
    {
      id: 2,
      company: 'Edward Jones',
      completedDate: 'Completed April 2025',
      image: edwardJonesBanner,
      role: 'Sales Representative',
      subTitle: 'Application Cover Letter Course',
      bgColor: 'bg-white'
    },
    {
      id: 3,
      company: 'Charles Schwab',
      completedDate: 'Completed June 2025',
      image: schwabBanner,
      role: 'Sales Representative',
      subTitle: 'Application Cover Letter Course',
      bgColor: 'bg-white'
    },
    {
      id: 4,
      company: 'Robinhood',
      completedDate: 'Completed June 2025',
      image: robinhoodBanner,
      role: 'Financial Analyst',
      subTitle: 'Application Cover Letter Course',
      bgColor: 'bg-white'
    },
    {
      id: 5,
      company: 'Vanguard',
      completedDate: 'Completed July 2025',
      image: vanguardBanner,
      role: 'Investment Manager',
      subTitle: 'Application Cover Letter Course',
      bgColor: 'bg-white'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8FF] font-sans text-gray-800 flex">
      
      {/* --- LEFT SIDEBAR (Branding) --- */}
      <aside className="hidden md:flex flex-col items-center w-24 py-6 border-r border-gray-100 bg-white shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] z-20 sticky top-0 h-screen">
        <div className="mb-8">
           <img 
             src={prefaceLogo} 
             alt="Logo" 
             className="h-12 w-auto" 
           />
        </div>
        {/* Placeholder for sidebar icons if needed later, currently just branding area as per image */}
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-h-screen w-0"> {/* w-0 fixes flex child overflow issues */}
        
        {/* --- HEADER --- */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#FDF8FF]">
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="md:hidden">
             <img src={prefaceLogo} alt="Logo" className="h-10 w-auto" />
          </div>
          {/* Right Actions */}
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={onNavigateHome}
              className="p-2 text-gray-500 hover:text-[#644D76] transition-colors"
            >
              <HomeIcon className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
              <Bookmark className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
              <User className="w-7 h-7" strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {/* --- PROFILE CONTENT --- */}
        <main className="flex-1 px-8 md:px-16 pb-12 overflow-hidden">
          <div className="mt-6 mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400">
              Applicant Portal
            </span>
            <h1 className="text-3xl font-bold text-[#3e2b4d] mt-2">
              Candidate Profile
            </h1>
          </div>
          
          {/* User Info Section */}
          <div className="flex flex-col items-start gap-4 mb-16 mt-4">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm bg-gray-200">
              <img 
                src={profilePic} 
                alt="Brad Jones" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Details */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-[#3e2b4d] tracking-tight mb-1">
                Brad Jones
              </h1>
              
              {/* Container for Email, Icons, and Member Date with equal spacing */}
              <div className="flex flex-col gap-3">
                <p className="text-lg text-gray-600 font-medium leading-tight">
                  Brad.Jones225@gmail.com
                </p>
                
                {/* Resume & LinkedIn Icons */}
                <div className="flex items-center gap-4">
                  <button className="text-gray-500 hover:text-[#FF0000] transition-colors" title="Resume PDF">
                    <FileText size={20} />
                  </button>
                  <button 
                    onClick={() => onNavigateLinkedIn?.()}
                    className="text-gray-500 hover:text-[#0a66c2] transition-colors"
                    title="LinkedIn Profile"
                  >
                   <Linkedin size={20} />
                  </button>
                </div>
                <p className="text-gray-500 font-medium leading-tight">
                  Member since 2025
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-600">Certificates</h2>
              
              {/* Carousel Controls */}
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors bg-white shadow-sm"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors bg-white shadow-sm"
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Carousel Container */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} /* Hide scrollbar for standard browsers */
            >
              <style>{`
                /* Hide scrollbar for Chrome/Safari/Opera */
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="min-w-[320px] md:min-w-[360px] min-h-[420px] bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col snap-start hover:shadow-md transition-shadow"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900 uppercase tracking-wide">
                        {cert.company}
                      </h3>
                      <p className="text-[10px] text-gray-500">
                        {cert.completedDate}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  {/* Banner Image */}
                  <div className="w-full h-48 bg-gray-50 rounded-md mb-4 overflow-hidden border border-gray-100 relative group">
                     <img 
                       src={cert.image} 
                       alt={cert.company} 
                       className="w-full h-full object-cover" 
                     />
                  </div>
                  {/* Card Content */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {cert.role}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {cert.subTitle}
                    </p>
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center gap-2 mt-auto w-full">
                    <button 
                      onClick={() => onNavigateCertificate?.({
                        company: cert.company,
                        role: cert.role,
                        completedDate: cert.completedDate
                      })}
                      className="flex-1 py-2 px-2 rounded-full border border-gray-200 text-[10px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors whitespace-nowrap"
                    >
                      View Certificate
                    </button>
                    <button
                      onClick={() => onNavigateLinkedIn?.({
                        company: cert.company,
                        role: cert.role,
                        completedDate: cert.completedDate
                      })}
                      className="flex-1 py-2 px-2 rounded-full bg-[#644D76] hover:bg-[#523d61] text-[10px] font-semibold text-white transition-colors whitespace-nowrap"
                    >
                      Apply Course to LinkedIn
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;

