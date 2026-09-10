import React from "react";
import Topbar from "@/components/Topbar";
import { FaLinkedin, FaCode, FaGraduationCap, FaLaptopCode, FaRocket, FaTerminal, FaBrain, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  avatarGradient: string;
  initials: string;
  linkedin: string;
  skills: string[];
  bio: string[];
  isPendingInfo?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ninad Hirani",
    role: "Full-Stack Engineer & Co-Creator",
    tagline: "Software Engineering • Full-Stack Development • AI & Problem Solving",
    avatarGradient: "from-brand-orange via-dark-yellow to-amber-500",
    initials: "NH",
    linkedin: "https://www.linkedin.com/in/ninad-hirani-478038287?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    skills: ["Python", "JavaScript", "React.js", "Node.js", "HTML & CSS", "SQL", "Git / GitHub", "DSA", "OOP", "AI"],
    bio: [
      "Ninad Hirani is a Computer Engineering student with a strong interest in software engineering, full-stack development, artificial intelligence, and problem solving. He has hands-on experience with technologies including Python, JavaScript, React.js, Node.js, HTML, CSS, SQL, and Git/GitHub.",
      "His technical interests include Data Structures and Algorithms, Object-Oriented Programming, databases, web development, and modern software engineering practices. Through academic projects, internships, and personal development work, he has gained practical experience in building software solutions, analyzing complex problems, conducting technical research, and applying computational approaches to real-world challenges.",
      "Ninad is a motivated and adaptable learner who enjoys exploring emerging technologies and turning theoretical knowledge into practical solutions. He is focused on continuously strengthening his technical, research, and professional skills while seeking opportunities to work on meaningful projects, collaborate with diverse teams, and grow as a well-rounded software engineer."
    ]
  },
  {
    name: "Kushal Kakadiya",
    role: "Full-Stack Developer & Co-Creator",
    tagline: "Full-Stack Web Development • Software Engineering • Algorithms",
    avatarGradient: "from-dark-green-s via-teal-500 to-emerald-400",
    initials: "KK",
    linkedin: "https://www.linkedin.com/in/kushal-kakadiya-2ba657284?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    skills: ["React.js", "Node.js", "JavaScript", "Python", "HTML & CSS", "SQL", "DSA", "OOP", "Web Systems"],
    bio: [
      "Kushal Kakadiya is a Computer Engineering student with a strong interest in software engineering, full-stack web development, and problem solving. He has hands-on experience with technologies including HTML, CSS, JavaScript, React.js, Node.js, Python, and SQL.",
      "His technical interests also include Data Structures and Algorithms, Object-Oriented Programming, databases, and modern software development practices. Through academic and personal projects, he has gained practical experience in developing web-based solutions, analyzing problems, and working collaboratively on technical challenges.",
      "Kushal is a motivated and adaptable learner who enjoys exploring new technologies and applying his knowledge to real-world problems. He is focused on continuously improving his technical and professional skills while seeking opportunities to contribute to meaningful projects and grow as a software developer."
    ]
  },
  {
    name: "Yash Kacha",
    role: "Data Analyst & Co-Developer",
    tagline: "Data Analytics • Artificial Intelligence • Business Intelligence",
    avatarGradient: "from-dark-pink via-purple-500 to-indigo-500",
    initials: "YK",
    linkedin: "https://www.linkedin.com/in/yashkacha07?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    skills: ["Python", "SQL", "Power BI", "Tableau", "Microsoft Excel", "Data Analytics", "Data Visualization", "EDA", "Dashboards"],
    bio: [
      "Yash Kacha is a Computer Engineering student with a strong interest in Data Analytics and Artificial Intelligence. He is building a solid foundation in Python, SQL, Microsoft Excel, Power BI, Tableau, and data visualization, with a focus on using data to solve practical problems.",
      "Through his academic learning, certifications, and hands-on projects, Yash has developed practical experience in data cleaning, data processing, data analysis, exploratory data analysis, and dashboard development. His projects include an Excel-based Sales Data Analysis Dashboard. He has also completed a Data Analytics Job Simulation with Deloitte through Forage and other professional learning programs.",
      "Yash is a motivated and adaptable learner who enjoys working with data, finding useful insights, and continuously improving his technical skills. His professional goal is to start his career in Data Analytics and gradually grow and gaining real-world experience through internships and meaningful projects while contributing to data-driven solutions."
    ]
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-dark-layer-2 text-foreground" data-testid="team-page">
      <Topbar />

      <div className="relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-dark-pink/5 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-dark-blue-s/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-6"
            >
              <FaRocket className="text-brand-orange text-sm animate-pulse" />
              <span className="text-brand-orange text-xs sm:text-sm font-semibold tracking-wide uppercase">
                The Architects of Code-Hunger
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight"
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-dark-yellow to-brand-orange">Engineering Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-dark-gray-7 text-base sm:text-lg leading-relaxed"
            >
              Passionate Computer Engineering developers building a modern, gamified competitive programming environment designed to empower engineers worldwide.
            </motion.p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * (index + 1) }}
                className="flex flex-col bg-dark-layer-1/90 backdrop-blur-md rounded-2xl border border-dark-divider-border-2 hover:border-brand-orange/50 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-brand-orange/10 group overflow-hidden"
              >
                {/* Card Header with Avatar & Details */}
                <div className="p-6 sm:p-8 pb-4 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarGradient} flex items-center justify-center text-white text-xl font-extrabold shadow-lg shadow-black/40 group-hover:scale-105 transition-transform`}>
                        {member.initials}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                          {member.name}
                        </h2>
                        <p className="text-xs text-brand-orange font-medium mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* LinkedIn button icon link */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-dark-fill-3 hover:bg-[#0077b5] text-[#0077b5] hover:text-white transition-all duration-200 border border-dark-divider-border-2 hover:border-[#0077b5] shadow-sm"
                      title={`Connect with ${member.name} on LinkedIn`}
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>

                  {/* Specialization / Tagline */}
                  <div className="bg-dark-fill-3/60 rounded-xl px-3.5 py-2 mb-6 border border-dark-divider-border-2/50">
                    <p className="text-xs text-dark-gray-8 font-medium">
                      {member.tagline}
                    </p>
                  </div>

                  {/* Skills badges */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-dark-gray-6 mb-2.5 flex items-center gap-1.5">
                      <FaCode className="text-brand-orange text-xs" />
                      <span>Technical Focus</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-lg bg-dark-fill-2 text-dark-gray-8 border border-dark-divider-border-2/80 hover:border-brand-orange/40 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Biography */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-dark-gray-6 mb-2.5 flex items-center gap-1.5">
                      <FaGraduationCap className="text-brand-orange text-xs" />
                      <span>About</span>
                    </div>

                    {member.isPendingInfo && (
                      <div className="inline-block px-2.5 py-1 mb-3 rounded-full text-[11px] font-medium bg-dark-yellow/10 text-dark-yellow border border-dark-yellow/20">
                        Profile details updating soon
                      </div>
                    )}

                    <div className="space-y-3 text-xs sm:text-sm text-dark-gray-7 leading-relaxed">
                      {member.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action / LinkedIn Connect Footer */}
                <div className="p-6 pt-4 border-t border-dark-divider-border-2/60 bg-dark-fill-3/30">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0077b5]/90 to-[#005582] hover:from-[#0077b5] hover:to-[#004165] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#0077b5]/20 hover:shadow-[#0077b5]/40 transform hover:-translate-y-0.5"
                  >
                    <FaLinkedin className="text-base" />
                    <span>Connect on LinkedIn</span>
                    <FaExternalLinkAlt className="text-[10px] opacity-75" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="bg-gradient-to-r from-dark-layer-1 via-dark-fill-3/50 to-dark-layer-1 border border-dark-divider-border-2 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">Want to collaborate or contribute?</h3>
            <p className="text-dark-gray-6 text-sm mb-6">
              Code-Hunger is continually evolving with real-time contests, AI assistants, and developer resources. Feel free to connect with any of our team members on LinkedIn!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/">
                <button className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40">
                  Start Solving Problems
                </button>
              </Link>
              <Link href="/contests">
                <button className="px-6 py-2.5 bg-dark-fill-3 hover:bg-dark-fill-2 text-white font-semibold text-sm rounded-xl border border-dark-divider-border-2 transition-all">
                  Join a Contest
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 mt-12 border-t border-dark-fill-3 text-center">
        <p className="text-dark-gray-6 text-sm">
          Developed with ❤️ by <span className="text-brand-orange font-semibold">Ninad Hirani</span>, <span className="text-brand-orange font-semibold">Kushal Kakadiya</span>, and <span className="text-brand-orange font-semibold">Yash Kacha</span>
        </p>
      </footer>
    </div>
  );
}
