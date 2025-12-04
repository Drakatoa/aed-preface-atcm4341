import React from 'react';
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Bell,
  Grid,
  Search,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Repeat,
  Send,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

import profilePic from './assets/profile-pic.png';
import bannerImage from './assets/purple-banner.png';
import utdLogo from './assets/utd-logo.png';
import prefaceLogo from './assets/preface-logo.png';
import certificateImage from './assets/completion-cert.png';

interface LinkedInProfileProps {
  certificateData?: {
    company: string;
    role: string;
    completedDate: string;
  };
  onNavigateCertificate?: () => void;
}

const LinkedInProfile: React.FC<LinkedInProfileProps> = ({ certificateData, onNavigateCertificate }) => {
  const company = certificateData?.company ?? 'Fidelity';
  const role = certificateData?.role ?? 'Customer Service Representative';
  const completedDate = certificateData?.completedDate ?? 'Completed March 2025';

  return (
    <div className="min-h-screen bg-[#F3F2EF] font-sans text-gray-900">
      {/* --- LINKEDIN NAVBAR --- */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 md:px-0">
        <div className="max-w-[1128px] mx-auto flex items-center justify-between h-[52px]">
          {/* Left: Logo & Search */}
          <div className="flex items-center gap-2">
            <div className="text-[#0a66c2]">
              <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-2.12-1.55-2.12-1.2 0-1.9.8-2.21 1.58-.11.28-.14.67-.14 1.05V19h-3v-9h3v1.25a3.28 3.28 0 013-1.63c2.18 0 3.8 1.41 3.8 4.45z" />
              </svg>
            </div>
            <div className="hidden md:flex items-center bg-[#EDF3F8] px-2 py-1.5 rounded-[4px] w-64">
              <Search className="w-4 h-4 text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-600"
              />
            </div>
          </div>
          {/* Right: Nav Icons */}
          <ul className="flex items-center gap-6 md:gap-8 h-full">
            <li className="flex flex-col items-center justify-center text-gray-900 border-b-2 border-black h-full px-1 cursor-pointer">
              <Home className="w-6 h-6 fill-current" />
            </li>
            <li className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer">
              <Users className="w-6 h-6" />
            </li>
            <li className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer">
              <Briefcase className="w-6 h-6" />
            </li>
            <li className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer">
              <MessageSquare className="w-6 h-6" />
            </li>
            <li className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer">
              <Bell className="w-6 h-6" />
            </li>
            <li className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                <img src={profilePic} alt="Me" className="w-full h-full object-cover" />
              </div>
            </li>
            <li className="border-l border-gray-300 h-8 mx-1 hidden md:block" />
            <li className="hidden md:flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer">
              <Grid className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-[1128px] mx-auto pt-6 px-0 md:px-4 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
        {/* Left/Main Column */}
        <div className="space-y-4">
          {/* --- PROFILE HEADER CARD --- */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden relative">
            {/* Banner */}
            <div className="h-48 w-full bg-[#5e3b6e] relative">
              <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
            </div>

            {/* Profile Pic */}
            <div className="absolute top-24 left-6 border-4 border-white rounded-full w-40 h-40 overflow-hidden bg-white">
              <img src={profilePic} alt="Brad Jones" className="w-full h-full object-cover" />
            </div>

            {/* Content Below Banner */}
            <div className="pt-16 pb-6 px-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    Brad Jones
                    <span className="text-gray-500 text-sm font-normal bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> He/him
                    </span>
                  </h1>
                  <p className="text-lg text-gray-900 mt-1">Student at The University of Texas at Dallas</p>

                  <div className="flex items-center text-sm text-gray-500 mt-2 gap-2">
                    <span>Richardson, Texas, United States</span>
                    <span className="text-[#0a66c2] font-semibold cursor-pointer hover:underline">Contact info</span>
                  </div>

                  <div className="mt-2 text-[#0a66c2] font-bold text-sm cursor-pointer hover:underline">
                    600 connections
                  </div>
                </div>

                {/* University Logo */}
                <div className="hidden md:flex items-center gap-2 max-w-[200px]">
                  <img src={utdLogo} alt="UTD" className="w-10 h-10 object-contain" />
                  <span className="text-sm font-semibold text-gray-900 hover:text-[#0a66c2] hover:underline cursor-pointer leading-tight">
                    The University of Texas at Dallas
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button className="bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 transition-colors">
                  <Send className="w-4 h-4" /> Message
                </button>
                <button className="bg-white border border-gray-600 text-gray-600 hover:bg-gray-100 font-semibold px-4 py-1.5 rounded-full transition-colors">
                  More
                </button>
              </div>
            </div>
          </section>

          {/* --- ACTIVITY SECTION --- */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Activity</h2>
                <p className="text-sm text-[#0a66c2] font-semibold mt-1 hover:underline cursor-pointer">600 Followers</p>
              </div>
              <button className="px-4 py-1 border border-[#0a66c2] text-[#0a66c2] rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Create a post
              </button>
            </div>

            {/* Post Item */}
            <div className="border border-gray-200 rounded-lg p-4">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-3">
                <img src={profilePic} alt="Brad" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900 text-sm">Brad Jones</span>
                    <ShieldCheck className="w-3 h-3 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-500 leading-tight">Student at The University of Texas at Dallas</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>2yr</span>
                    <span>•</span>
                    <span>🌐</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-sm text-gray-900 mb-3">
                <span className="font-bold text-[#0a66c2] hover:underline cursor-pointer">Today, I completed this course provided by PreFace</span>
                <br />
                on the facets of Customer Service pertaining to <br />
                <span className="font-bold text-[#0a66c2] hover:underline cursor-pointer">{company}</span> business practices
              </p>

              {/* Embedded Content Card */}
              <div className="border border-gray-200 rounded-md overflow-hidden bg-[#F8FAFD]">
                {/* Embedded Header */}
                <div className="flex items-center gap-2 p-3 border-b border-gray-100 bg-white">
                  <div className="flex items-center justify-center">
                    <img src={prefaceLogo} alt="Preface" className="h-8 w-auto" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">PreFace</p>
                    <p className="text-xs text-gray-500">45,000 Followers</p>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="w-full flex justify-center bg-[#FDF8FF] p-4">
                  <img src={certificateImage} alt="Certificate" className="rounded shadow-sm max-h-[200px] object-contain" />
                </div>
              </div>

              {/* Social Counts */}
              <div className="flex items-center gap-2 mt-2 mb-1 text-xs text-gray-500">
                <div className="bg-[#1485BD] rounded-full p-0.5">
                  <ThumbsUp className="w-2 h-2 text-white fill-current" />
                </div>
                <span>7</span>
              </div>

              {/* Social Actions Line */}
              <div className="border-t border-gray-200 mt-2 pt-1 flex justify-between">
                <button className="flex items-center gap-2 px-3 py-3 hover:bg-gray-100 rounded-md text-gray-500 font-semibold text-sm transition-colors">
                  <ThumbsUp className="w-5 h-5" /> Like
                </button>
                <button className="flex items-center gap-2 px-3 py-3 hover:bg-gray-100 rounded-md text-gray-500 font-semibold text-sm transition-colors">
                  <MessageCircle className="w-5 h-5" /> Comment
                </button>
                <button className="flex items-center gap-2 px-3 py-3 hover:bg-gray-100 rounded-md text-gray-500 font-semibold text-sm transition-colors">
                  <Repeat className="w-5 h-5" /> Repost
                </button>
                <button className="flex items-center gap-2 px-3 py-3 hover:bg-gray-100 rounded-md text-gray-500 font-semibold text-sm transition-colors">
                  <Send className="w-5 h-5" /> Send
                </button>
              </div>
            </div>
          </section>

          {/* --- LICENSES & CERTIFICATIONS --- */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Licences & Certifications</h2>
              <div className="flex gap-4">
                <button className="text-gray-500 hover:text-gray-900">
                  <span className="text-2xl leading-none">+</span>
                </button>
                <button className="text-gray-500 hover:text-gray-900">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Certification 1 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center">
                    <img src={prefaceLogo} alt="Preface" className="h-12 w-auto" />
                  </div>
                </div>
                <div className="flex-1 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-900 text-base">{role} {company}</h3>
                  <p className="text-sm text-gray-900">PreFace</p>
                  <p className="text-sm text-gray-500">{completedDate}</p>

                  <button
                    onClick={() => onNavigateCertificate?.()}
                    className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full border border-gray-500 text-gray-600 font-semibold text-sm hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    Show credential <ExternalLink className="w-3 h-3" />
                  </button>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <div className="p-1 rounded-full bg-gray-100">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span>Customer Service</span>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-[#0a66c2]">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-2.12-1.55-2.12-1.2 0-1.9.8-2.21 1.58-.11.28-.14.67-.14 1.05V19h-3v-9h3v1.25a3.28 3.28 0 013-1.63c2.18 0 3.8 1.41 3.8 4.45z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base">User Experience Design</h3>
                  <p className="text-sm text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-500">Issued June 2025</p>

                  <button className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full border border-gray-500 text-gray-600 font-semibold text-sm hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 transition-colors">
                    Show credential <ExternalLink className="w-3 h-3" />
                  </button>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <div className="p-1 rounded-full bg-gray-100">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span>User Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column placeholder */}
        <div className="hidden md:block" />
      </main>
    </div>
  );
};

export default LinkedInProfile;

