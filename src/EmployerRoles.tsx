import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users } from 'lucide-react';
import prefaceLogo from './assets/preface-logo.png';

const roles = [
  {
    id: 'fidelity-csr',
    company: 'Fidelity',
    title: 'Customer Service Representative',
    applicants: 4,
    status: 'Reviewing',
  },
  {
    id: 'schwab-fa',
    company: 'Charles Schwab',
    title: 'Financial Analyst',
    applicants: 3,
    status: 'Open',
  },
  {
    id: 'robinhood-fa',
    company: 'Robinhood',
    title: 'Financial Advisor New Grad',
    applicants: 5,
    status: 'Interviewing',
  },
];

const EmployerRoles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDF8FF]">
      <header className="px-6 py-4 border-b border-gray-100 bg-white/70 backdrop-blur sticky top-0 z-20 flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <img src={prefaceLogo} className="h-10 w-auto" alt="Preface" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Employer Portal</p>
            <h1 className="text-2xl font-bold text-[#3e2b4d]">Open Roles & Applicants</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => navigate(`/hr/roles/${role.id}`)}
            className="w-full text-left bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EEFB] text-[#644D76] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold">{role.company}</p>
                  <h2 className="text-xl font-semibold text-[#3e2b4d]">{role.title}</h2>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[#3e2b4d] font-semibold">
                  <Users className="w-5 h-5" />
                  <span>{role.applicants} applicants</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-[#644D76] bg-[#F5EEFB] px-3 py-1 rounded-full">
                  {role.status}
                </span>
              </div>
            </div>
          </button>
        ))}
      </main>
    </div>
  );
};

export default EmployerRoles;

