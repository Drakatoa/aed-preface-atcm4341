import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Intro from './Intro';
import Home from './Home';
import CoursePage from './CoursePage';
import UserProfile from './UserProfile';
import CertificatePage from './CertificatePage';
import LinkedInProfile from './LinkedInProfile';
import EntryPage from './EntryPage';
import EmployerRoles from './EmployerRoles';
import EmployerApplicants from './EmployerApplicants';
import EmployerCertificatePage, { EmployerCertificateInfo as EmployerCertificateData } from './EmployerCertificatePage';

type CertificateInfo = { company: string; role: string; completedDate: string };
function AppRoutes() {
  const [certificateData, setCertificateData] = useState<CertificateInfo>({
    company: 'Fidelity',
    role: 'Customer Service Representative',
    completedDate: 'Completed March 2025',
  });
  const [employerCertificateData, setEmployerCertificateData] = useState<EmployerCertificateData | null>(null);

  const navigate = useNavigate();

  const updateCertificateData = (data?: CertificateInfo) => {
    if (data) {
      setCertificateData(data);
    }
  };

  const handleNavigateEntry = () => navigate('/');
  const handleNavigateHome = () => navigate('/home');
  const handleNavigateIntro = () => navigate('/intro');
  const handleNavigateCourse = () => navigate('/course');
  const handleContinueCourse = () => navigate('/course');
  const handleNavigateProfile = () => navigate('/profile');
  const handleViewCourseInfo = (_courseId: number) => navigate('/intro');

  const handleNavigateCertificate = (data?: CertificateInfo) => {
    updateCertificateData(data);
    navigate('/certificate');
  };

  const handleEmployerCertificate = (data: EmployerCertificateData) => {
    setEmployerCertificateData(data);
    navigate('/hr/certificate');
  };

  const handleNavigateLinkedIn = (data?: CertificateInfo) => {
    updateCertificateData(data);
    navigate('/linkedin');
  };

  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route
        path="/intro"
        element={
          <Intro
            onNavigateHome={handleNavigateHome}
            onNavigateCourse={handleNavigateCourse}
            onNavigateProfile={handleNavigateProfile}
            onNavigateEntry={handleNavigateEntry}
          />
        }
      />
      <Route
        path="/home"
        element={
          <Home
            onNavigateHome={handleNavigateIntro}
            onContinueCourse={handleContinueCourse}
            onNavigateProfile={handleNavigateProfile}
            onViewCourseInfo={handleViewCourseInfo}
          />
        }
      />
      <Route
        path="/course"
        element={
          <CoursePage
            onNavigateHome={handleNavigateHome}
            onNavigateProfile={handleNavigateProfile}
            onNavigateIntro={handleNavigateIntro}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <UserProfile
            onNavigateHome={handleNavigateHome}
            onNavigateCertificate={handleNavigateCertificate}
            onNavigateLinkedIn={handleNavigateLinkedIn}
          />
        }
      />
      <Route
        path="/certificate"
        element={
          <CertificatePage
            onNavigateHome={handleNavigateHome}
            onNavigateProfile={handleNavigateProfile}
            onNavigateLinkedIn={handleNavigateLinkedIn}
            certificateData={certificateData}
          />
        }
      />
      <Route
        path="/linkedin"
        element={
          <LinkedInProfile
            certificateData={certificateData}
            onNavigateCertificate={() => handleNavigateCertificate()}
          />
        }
      />
      <Route path="/hr/roles" element={<EmployerRoles />} />
      <Route
        path="/hr/roles/:roleId"
        element={<EmployerApplicants onViewCertificate={handleEmployerCertificate} />}
      />
      <Route
        path="/hr/certificate"
        element={
          <EmployerCertificatePage
            data={employerCertificateData}
            onNavigateBack={() => navigate(-1)}
            onNavigateRoles={() => navigate('/hr/roles')}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return <AppRoutes />;
}