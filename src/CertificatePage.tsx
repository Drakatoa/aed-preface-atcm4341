import React, { useEffect } from 'react';
import { 
  Menu, 
  Home as HomeIcon, 
  Bookmark, 
  User, 
  Share2
} from 'lucide-react';

// TypeScript declaration for canvas-confetti
declare global {
  interface Window {
    confetti: (options?: any) => void;
  }
}

// Import existing assets
import prefaceLogo from './assets/preface-logo.png';
// TODO: Replace this URL with your local import after dropping the image in your project
import certificateImage from './assets/completion-cert.png';
// const certificateImage = "https://placehold.co/1200x850/ffffff/3e2b4d?text=Certificate+Image+Placeholder";

interface CertificatePageProps {
  onNavigateHome?: () => void;
  onNavigateProfile?: () => void;
  onNavigateLinkedIn?: (data?: { company: string; role: string; completedDate: string }) => void;
  certificateData?: {
    company: string;
    role: string;
    completedDate: string;
  };
}

const CertificatePage: React.FC<CertificatePageProps> = ({ 
  onNavigateHome, 
  onNavigateProfile,
  onNavigateLinkedIn,
  certificateData 
}) => {
  const company = certificateData?.company || 'Fidelity';
  const role = certificateData?.role || 'Customer Service Representative';
  const completedDate = certificateData?.completedDate || 'Completed March 2025';

  // --- CONFETTI EFFECT ---
  // Loads canvas-confetti from CDN and fires it
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    script.async = true;
    script.onload = () => {
      if (window.confetti) {
        // Fire confetti
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
        
        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) {
            return clearInterval(interval);
          }
          const particleCount = 50 * (timeLeft / duration);
          window.confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
          }));
          window.confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
          }));
        }, 250);
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8FF] font-sans text-gray-800 flex flex-col relative overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="flex items-center justify-between px-4 py-3 md:px-8 bg-[#FDF8FF] z-10 sticky top-0">
        {/* Left: Nav & Branding */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="text-gray-500 w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
             <img 
               src={prefaceLogo} 
               alt="Preface Logo" 
               className="h-10 w-auto" 
             />
          </div>
        </div>
        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={onNavigateHome}
            className="p-2 text-gray-500 hover:text-[#644D76] transition-colors"
          >
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

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-7xl mx-auto w-full z-10">
        
        {/* Page Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400">
              Applicant Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3e2b4d] mt-2 mb-2 tracking-tight">
              Congratulations!
            </h1>
            <p className="text-gray-600 text-lg">
              You've completed your PreFace course for {company}
            </p>
          </div>
          
          <button
            onClick={() => onNavigateLinkedIn?.({ company, role, completedDate })}
            className="bg-[#644D76] hover:bg-[#523d61] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <Share2 size={18} />
            Upload to LinkedIn
          </button>
        </div>

        {/* --- CERTIFICATE IMAGE CONTAINER --- */}
        <div className="w-full flex justify-center">
          <img 
            src={certificateImage} 
            alt="Certificate of Completion" 
            className="w-full max-w-5xl h-auto rounded-xl shadow-2xl border border-gray-100"
          />
        </div>
      </main>
    </div>
  );
};

export default CertificatePage;

