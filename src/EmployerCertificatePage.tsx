import { ArrowLeft, FileText, Linkedin, Award } from 'lucide-react';
import prefaceLogo from './assets/preface-logo.png';
import certificateImage from './assets/completion-cert.png';

type SectionScore = { title: string; score: number; description?: string };

export interface EmployerCertificateInfo {
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
}

interface EmployerCertificatePageProps {
  data?: EmployerCertificateInfo | null;
  onNavigateBack?: () => void;
  onNavigateRoles?: () => void;
}

const fallbackData: EmployerCertificateInfo = {
  applicantName: 'Reba Jones',
  company: 'Fidelity',
  role: 'Customer Service Representative',
  score: 96,
  certifications: ['Certified in Customer Service', 'Certified in Business Intelligence'],
  description: 'Experience working with Fortune 500 companies in high-volume call centers.',
  sections: [
    { title: 'Technical Proficiency', score: 94, description: 'Mastery of Fidelity systems, policy workflows, and escalation steps.' },
    { title: 'Soft Skills & Communication', score: 98, description: 'Handled complex calls with empathy and perfect tone control.' },
    { title: 'Values & Vision Alignment', score: 92, description: 'Consistently links problem-solving back to customer-first principles.' },
  ],
};

const EmployerCertificatePage = ({ data, onNavigateBack, onNavigateRoles }: EmployerCertificatePageProps) => {
  const certificate = data ?? fallbackData;

  const avatarContent = () => {
    if (certificate.avatar) {
      return <img src={certificate.avatar} alt={certificate.applicantName} className="w-full h-full object-cover" />;
    }

    const initials =
      certificate.initials ??
      certificate.applicantName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
      <span className="text-[#3e2b4d] font-semibold">
        {initials}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDF8FF] text-[#3e2b4d]">
      <header className="flex items-center gap-4 px-6 py-4 bg-white/80 border-b border-gray-100 sticky top-0 z-20 backdrop-blur">
        <button
          onClick={onNavigateBack}
          className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <img src={prefaceLogo} alt="Preface" className="h-10 w-auto" />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold">Employer Portal</p>
            <h1 className="text-2xl font-bold">Certificate & Assessment Review</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full border-2 border-white shadow-sm flex items-center justify-center bg-[#F5EEFB]"
                style={{ backgroundColor: certificate.color || '#F5EEFB' }}
              >
                {avatarContent()}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold">{certificate.company}</p>
                <h2 className="text-2xl font-bold">{certificate.applicantName}</h2>
                <p className="text-sm text-gray-500">{certificate.role}</p>
              </div>
            </div>
            <div className="text-center bg-[#F5EEFB] rounded-2xl px-6 py-3 border border-white shadow-inner">
              <p className="text-sm uppercase tracking-[0.3em] font-semibold text-gray-500">Overall Score</p>
              <p className="text-4xl font-extrabold text-[#3e2b4d]">{certificate.score}%</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img src={certificateImage} alt="Certificate Preview" className="w-full object-cover" />
          </div>

          <div className="flex flex-wrap gap-2">
            {certificate.certifications.map((cert) => (
              <span key={cert} className="px-4 py-1.5 bg-[#F5EEFB] border border-white rounded-full text-sm font-semibold">
                {cert}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">{certificate.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-[#3e2b4d] text-white font-semibold py-3 px-4 rounded-full shadow hover:bg-[#2c2038] transition-colors">
              View Certificate <Award size={18} />
            </button>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-[#3e2b4d] font-semibold py-3 px-4 rounded-full hover:bg-gray-50 transition-colors">
                View Resume <FileText size={18} />
              </button>
              <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </section>

        <aside className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold">Assessment</p>
              <h3 className="text-2xl font-bold">Section Breakdown</h3>
            </div>
          </div>
          <div className="space-y-4">
            {certificate.sections.map((section) => (
              <div key={section.title} className="p-4 rounded-2xl border border-gray-100 bg-[#FDF8FF] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold">{section.title}</h4>
                  <span className="text-xl font-bold">{section.score}%</span>
                </div>
                {section.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
                )}
                <div className="h-1.5 w-full bg-white rounded-full mt-3">
                  <div
                    className="h-full rounded-full bg-[#644D76]"
                    style={{ width: `${section.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onNavigateRoles}
            className="mt-8 w-full text-center border border-gray-300 rounded-full py-3 font-semibold text-[#3e2b4d] hover:bg-gray-50 transition-colors"
          >
            Back to Roles
          </button>
        </aside>
      </main>
    </div>
  );
};

export default EmployerCertificatePage;

