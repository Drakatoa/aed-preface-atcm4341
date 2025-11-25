import { Briefcase, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import prefaceLogo from './assets/preface-logo.png';

const EntryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDF8FF] text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={prefaceLogo} alt="Preface" className="h-14 w-auto" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">Preface Portal</p>
              <h1 className="text-4xl md:text-5xl font-semibold text-[#3e2b4d]">
                Who do you want to explore as?
              </h1>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => navigate('/intro')}
            className="text-left bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#644D76]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F5EEFB] text-[#644D76] flex items-center justify-center mb-6">
              <Users className="w-7 h-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold mb-2">Applicants</p>
            <h2 className="text-3xl font-semibold text-[#3e2b4d] mb-4">I'm exploring roles</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Browse immersive course journeys, complete assessments, and unlock certificates for companies
              such as Fidelity, Schwab, and more.
            </p>
          </button>

          <button
            onClick={() => navigate('/hr/roles')}
            className="text-left bg-[#3e2b4d] text-white rounded-3xl p-8 shadow-lg border border-[#3e2b4d]/30 hover:shadow-xl transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 font-semibold mb-2">Employers & HR</p>
            <h2 className="text-3xl font-semibold mb-4">I'm reviewing applicants</h2>
            <p className="text-base text-white/90 leading-relaxed">
              View current applicant pools, review certificates, and shortlist top talent ready to interview
              for your open roles.
            </p>
          </button>
        </section>
      </div>
    </div>
  );
};

export default EntryPage;

