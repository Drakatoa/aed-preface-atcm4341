import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Home as HomeIcon,
  Bookmark,
  User,
  CheckCircle,
  FileText,
  Linkedin,
  Award,
} from 'lucide-react';
import prefaceLogo from './assets/preface-logo.png';
import profilePic from './assets/profile-pic.png';

type SectionScore = { title: string; score: number; description?: string };

type Applicant = {
  id: number;
  name: string;
  score: number;
  certifications: string[];
  description: string;
  sections: SectionScore[];
  avatar?: string;
  initials?: string;
  color?: string;
};

const applicantPools: Record<
  string,
  {
    title: string;
    company: string;
    newApplicants: number;
    applicants: Applicant[];
  }
> = {
  'fidelity-csr': {
    title: 'Customer Service Representative',
    company: 'Fidelity',
    newApplicants: 4,
    applicants: [
      {
        id: 1,
        name: 'Reba Jones',
        avatar: profilePic,
        score: 98,
        certifications: ['Certified in Customer Service', 'Certified in Business Intelligence'],
        description: 'Experience working with Fortune 500 companies in high-volume call centers.',
        sections: [
          { title: 'Technical Proficiency', score: 94, description: 'Mastery of Fidelity systems, policy workflows, and escalation steps.' },
          { title: 'Soft Skills & Communication', score: 98, description: 'Handled 12 simulated calls with empathy and perfect tone control.' },
          { title: 'Values & Vision Alignment', score: 92, description: 'Consistently links problem-solving back to customer-first principles.' },
        ],
      },
      {
        id: 2,
        name: 'John Doe',
        initials: 'JD',
        color: '#DEF7EC',
        score: 85,
        certifications: ['Certified in Sales', 'Certified in Conflict Resolution'],
        description: 'Top-performing sales representative with a focus on tech solutions.',
        sections: [
          { title: 'Technical Proficiency', score: 80, description: 'Understands core CRM tooling; needs polish on documentation flow.' },
          { title: 'Soft Skills & Communication', score: 86, description: 'Great rapport, slight rush when answering tough questions.' },
          { title: 'Values & Vision Alignment', score: 88, description: 'Creative win-back strategy that mirrors Fidelity service standards.' },
        ],
      },
      {
        id: 3,
        name: 'Maria Sanchez',
        initials: 'MS',
        color: '#FFF4E6',
        score: 92,
        certifications: ['Certified in Project Management', 'Certified in Agile Methodologies'],
        description: 'Skilled project lead with 5+ years managing cross-functional teams.',
        sections: [
          { title: 'Technical Proficiency', score: 93, description: 'Precise with verification scripts and complex account workflows.' },
          { title: 'Soft Skills & Communication', score: 91, description: 'Calm under pressure and quickly builds rapport.' },
          { title: 'Values & Vision Alignment', score: 90, description: 'Demonstrates curiosity and continuous-learning mindset.' },
        ],
      },
      {
        id: 4,
        name: 'Alex Lee',
        initials: 'AL',
        color: '#E0EAFF',
        score: 78,
        certifications: ['Certified in Data Analytics', 'Certified in Python Programming'],
        description: 'Data analyst passionate about uncovering actionable insights from big data.',
        sections: [
          { title: 'Technical Proficiency', score: 78, description: 'Understands tooling but needs more practice on policy branching.' },
          { title: 'Soft Skills & Communication', score: 81, description: 'Friendly tone, but should slow pacing on complex calls.' },
          { title: 'Values & Vision Alignment', score: 84, description: 'Shows accountability and eagerness to improve.' },
        ],
      },
    ],
  },
  'schwab-fa': {
    title: 'Financial Analyst',
    company: 'Charles Schwab',
    newApplicants: 3,
    applicants: [
      {
        id: 5,
        name: 'Priya Sharma',
        initials: 'PS',
        color: '#FFE6F1',
        score: 91,
        certifications: ['Certified Financial Analyst', 'Certified in Risk Management'],
        description: 'Financial analyst specializing in equities and derivatives pricing.',
        sections: [
          { title: 'Technical Proficiency', score: 96, description: 'Accurate model adjustments and scenario math.' },
          { title: 'Soft Skills & Communication', score: 90, description: 'Explains portfolio shifts clearly to stakeholders.' },
          { title: 'Values & Vision Alignment', score: 88, description: 'Connects recommendations to Schwab client ethos.' },
        ],
      },
      {
        id: 6,
        name: 'Nathan Kim',
        initials: 'NK',
        color: '#E6F4FF',
        score: 84,
        certifications: ['Certified in Python Programming', 'Certified in Tableau'],
        description: 'Data-driven analyst with 3+ years in investment research.',
        sections: [
          { title: 'Technical Proficiency', score: 84, description: 'Strong derivatives coverage with one math slip.' },
          { title: 'Soft Skills & Communication', score: 82, description: 'Could tighten client briefing structure.' },
          { title: 'Values & Vision Alignment', score: 86, description: 'Highlights Schwab’s transparency in every recommendation.' },
        ],
      },
      {
        id: 7,
        name: 'Lena Torres',
        initials: 'LT',
        color: '#F1F5F9',
        score: 79,
        certifications: ['Certified in Business Intelligence', 'Certified in SQL'],
        description: 'Excellent communicator experienced in investor reporting.',
        sections: [
          { title: 'Technical Proficiency', score: 80, description: 'Solid thesis, needs deeper data references.' },
          { title: 'Soft Skills & Communication', score: 89, description: 'Persuasive client education plan.' },
          { title: 'Values & Vision Alignment', score: 84, description: 'Reinforces Schwab’s investor-first approach.' },
        ],
      },
    ],
  },
};

const defaultRoleKey = 'fidelity-csr';

const ScoreCircle = ({ score }: { score: number }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const color = score >= 90 ? '#3e2b4d' : score >= 80 ? '#5e3b6e' : '#7c6a96';

  return (
    <div className="flex flex-col items-center text-[#3e2b4d]">
      <div className="relative flex items-center justify-center w-10 h-10">
        <svg className="transform -rotate-90 w-10 h-10">
          <circle stroke="currentColor" strokeWidth="3" className="text-white opacity-40" fill="transparent" r={radius} cx="20" cy="20" />
          <circle
            stroke={color}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="20"
            cy="20"
          />
        </svg>
        <span className="absolute text-[10px] font-bold text-[#3e2b4d]">{score}%</span>
      </div>
    </div>
  );
};

const Avatar = ({ applicant }: { applicant: Applicant }) => {
  if (applicant.avatar) {
    return (
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white">
        <img src={applicant.avatar} alt={applicant.name} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-sm font-semibold text-[#3e2b4d]"
      style={{ backgroundColor: applicant.color || '#F5EEFB' }}
    >
      {applicant.initials}
    </div>
  );
};

interface EmployerApplicantsProps {
  onViewCertificate?: (data: {
    applicantName: string;
    company: string;
    role: string;
    score: number;
    sections: SectionScore[];
    certifications: string[];
    description: string;
    avatar?: string;
    initials?: string;
    color?: string;
  }) => void;
  onNavigateLinkedIn?: (data?: { company: string; role: string; completedDate: string }) => void;
}

const EmployerApplicants: React.FC<EmployerApplicantsProps> = ({ onViewCertificate, onNavigateLinkedIn }) => {
  const navigate = useNavigate();
  const { roleId } = useParams<{ roleId: string }>();

  const role = useMemo(() => {
    if (roleId && applicantPools[roleId]) {
      return applicantPools[roleId];
    }
    return applicantPools[defaultRoleKey];
  }, [roleId]);

  return (
    <div className="min-h-screen bg-[#FDF8FF] font-sans text-gray-800 flex">
      <aside className="hidden md:flex flex-col items-center w-24 py-6 border-r border-gray-100 bg-white shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] z-20 sticky top-0 h-screen">
        <div className="mb-8">
          <img src={prefaceLogo} alt="Logo" className="h-12 w-auto" />
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen w-0">
        <header className="flex items-center justify-between px-6 py-4 bg-[#FDF8FF] sticky top-0 z-10 backdrop-blur-sm bg-opacity-90">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/hr/roles')}
              className="text-gray-500 hover:text-gray-900 transition-colors rounded-full border border-gray-200 p-2"
            >
              <ArrowLeft size={22} />
            </button>
            <div className="md:hidden">
              <img src={prefaceLogo} alt="Logo" className="h-10 w-auto" />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button onClick={() => navigate('/hr/roles')} className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
              <HomeIcon className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#644D76] transition-colors">
              <Bookmark className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#644D76] transition-colors cursor-default" aria-disabled="true">
              <User className="w-7 h-7" strokeWidth={1.5} />
            </button>
          </div>
        </header>

        <main className="flex-1 px-8 md:px-16 py-8 overflow-y-auto">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">{role.company}</p>
            <h1 className="text-3xl font-bold text-[#3e2b4d]">{role.title}</h1>
            <p className="text-gray-500 mt-1">{role.newApplicants} New Applicants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {role.applicants.map((applicant) => (
              <div
                key={applicant.id}
                className="bg-[#C5B4D6] rounded-[24px] p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow min-h-[420px] w-full max-w-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Avatar applicant={applicant} />
                  <h2 className="text-xl font-bold text-[#3e2b4d]">{applicant.name}</h2>
                </div>

                <div className="space-y-2 mb-6">
                  {applicant.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 text-[#5e3b6e] flex-shrink-0"
                        style={{ fill: 'none', strokeWidth: 2.4 }}
                      />
                      <span className="text-xs font-bold text-[#3e2b4d] leading-tight">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4 flex-grow">
                  <p className="text-xs font-semibold text-[#3e2b4d] opacity-80 leading-relaxed">{applicant.description}</p>
                </div>

                <div className="w-full flex items-center justify-between bg-white/30 rounded-lg p-3 mb-4 border border-white/20">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#3e2b4d]">Assessment</span>
                    <span className="text-[10px] text-[#3e2b4d] opacity-70 uppercase tracking-wide">Match Score</span>
                  </div>
                  <ScoreCircle score={applicant.score} />
                </div>

                <div className="flex flex-col gap-2 w-full mt-auto">
                  <button
                    className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#3e2b4d] px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-colors w-full"
                    onClick={() =>
                      onViewCertificate?.({
                        applicantName: applicant.name,
                        company: role.company,
                        role: role.title,
                        score: applicant.score,
                        sections: applicant.sections,
                        certifications: applicant.certifications,
                        description: applicant.description,
                        avatar: applicant.avatar,
                        initials: applicant.initials,
                        color: applicant.color,
                      })
                    }
                  >
                    View Certificate
                    <Award size={14} className="text-[#3e2b4d]" />
                  </button>

                  <div className="flex items-center gap-2 w-full">
                    <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#3e2b4d] px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-colors flex-1 justify-center">
                      View Resume
                      <FileText size={14} className="text-[#3e2b4d]" />
                    </button>
                    <button 
                      onClick={() => {
                        if (applicant.name === 'Reba Jones') {
                          onNavigateLinkedIn?.({
                            company: role.company,
                            role: role.title,
                            completedDate: 'Completed March 2025'
                          });
                        }
                      }}
                      className="w-9 h-9 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-sm transition-colors flex-shrink-0"
                    >
                      <Linkedin size={18} className="text-[#3e2b4d]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployerApplicants;

