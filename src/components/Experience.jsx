// components/Experience.jsx
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

// Import company logos from assets
import rwema from '../assets/images/rwema.png'
import auca from '../assets/images/auca.png'
import cmu from '../assets/images/cmu.png'

const Experience = ({ darkMode }) => {
  // Direct data in component - just like Skills.jsx
  const experiences = [
    {
      id: 1,
      title: "AI Reasearcher and Software Developer",
      company: "Rwema Hub Ltd",
      location: "Kigali, Rwanda",
      period: "June 2025 - Present",
      type: "Part-time",
      logo: rwema,
      description: ".",
      responsibilities: [
        "Developing responsive rwema hub web applications for AI researches , rwema hub car rental and maintaining them.",
        "Conduct research, experimentation, and model optimization, translating findings into practical solutions",
        "Design, develop, and evaluate AI/ML models to solve real-world problems using data-driven approaches",
        
      ],
      skills: ["React", "Node.js", "Python", "Git", "SQL", "Tailwind CSS", "AI/ML", "Data Analysis"]
    },
    {
      id: 2,
      title: "Lecturer",
      company: "Adventist University of Central Africa",
      location: "Kigali, Rwanda",
      period: "September 2025 - Present",
      type: "Contract",
      logo: auca,
      description: "Teach various computer science and IT courses in undergraduate and assist masters programs in Big data.",
      responsibilities: [
        "Design course materials, assignments, and grading rubrics to align with learning outcomes",
        "Supervise student projects and research, guiding them through the research process and providing feedback on their work",
        "Collaborate with colleagues to develop and improve curriculum, ensuring it remains current with industry trends and academic standards",
        "Participate in departmental meetings and contribute to the academic community through service and outreach activities",
      ],
      skills: ["Mentoring", "Teaching", "Facilitation", "Instruction", "Curriculum Design","Supervising", "Research Guidance"]
    },
    {
      id: 3,
      title: "Graduate Teaching Assistant",
      company: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "Sep 2024 - May 2025",
      type: "Part-time",
      logo: cmu,
      description: "Teaching assistantship at Carnegie Mellon University Africa in Advanced Academic skills for Engineers and Mobile Big Data Analytics and Management.",
      responsibilities: [
        "Assist technically the instructor in preparing and delivering workshops",
        " Respond to student concerns and queries during workshop sessions",
        "Hold office hours to support students with exercises and further questions",
        
      ],
      skills: ["Technical Tutoring", "Assessment & Grading", "Student Support", "Communication"]
    }
  ]

  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-700',
    cardBg: darkMode ? 'bg-gray-800/50' : 'bg-white/50',
    borderColor: darkMode ? 'border-gray-700' : 'border-gray-200',
  }

  return (
    <section 
      id="experience" 
      className="py-20 relative"
      style={{
        backgroundColor: darkMode ? '#0f172a' : '#f8fafc'
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.textPrimary}`}>
            Work <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${theme.textSecondary}`}>
            My professional journey and roles
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${index !== experiences.length - 1 ? 'mb-12' : ''}`}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-6 top-16 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />
              )}
              
              <div className="flex items-start">
                {/* Timeline dot with company logo */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'} border-2 border-purple-500 overflow-hidden`}>
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Experience card */}
                <div className={`ml-8 flex-1 ${theme.cardBg} backdrop-blur-sm rounded-xl p-6 border ${theme.borderColor} shadow-lg`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${theme.textPrimary}`}>{exp.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'} mt-2 md:mt-0`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-gray-500">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className={theme.textSecondary}>{exp.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className={theme.textSecondary}>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className={`mb-4 ${theme.textSecondary}`}>{exp.description}</p>
                  
                  {/* Responsibilities */}
                  <ul className="mb-4 space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5">•</span>
                        <span className={theme.textSecondary}>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Skills/Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience