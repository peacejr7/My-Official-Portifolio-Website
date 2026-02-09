// components/Certifications.jsx
import { motion } from "framer-motion"
import { Award, ExternalLink, ZoomIn } from "lucide-react"
import { useState } from "react"

// Import certificate images from assets
import cert1 from '../assets/Images/cert1.png'
import cert2 from '../assets/Images/cert2.png'
import cert3 from '../assets/Images/cert3.png'
import cert4 from '../assets/Images/cert4.png'
import cert5 from '../assets/Images/cert5.png'
import cert6 from '../assets/Images/cert1.png'

const Certificates = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null)

  // Simple data array - just like your Skills component
  const certifications = [
    {
      id: 1,
      title: "Master of Science in Information Technology",
      issuer: "Carnegie Mellon University",
      date: "2025",
      image: cert1,
      url: "https://coursera.org/certificate/frontend"
    },
    {
      id: 2,
      title: "Bachelor of Science in Computer Science",
      issuer: "University of Rwanda",
      date: "2023",
      image: cert2,
      url: "https://coursera.org/certificate/data-analytics"
    },
    {
      id: 3,
      title: "Foundations of Data Science",
      issuer: "Google",
      date: "2024",
      image: cert3,
      url: "https://coursera.org/verify/FK4R8R7ULSE5"
    },
    {
      id: 4,
      title: "SQL for Data Science",
      issuer: "UC Davis",
      date: "2025",
      image: cert4,
      url: "https://coursera.org/verify/GV76MK8RNMJ0"
    },
    {
      id: 5,
      title: "Merketing",
      issuer: "BPN",
      date: "2025",
      image: cert5,
      url: "https://coursera.org/certificate/python-ds"
    },
    {
      id: 6,
      title: "Full Stack Development",
      issuer: "The Odin Project",
      date: "2023",
      image: cert6,
      url: "https://theodinproject.com"
    }
  ]

  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-700',
    cardBg: darkMode ? 'bg-gray-800/50' : 'bg-white/50',
    borderColor: darkMode ? 'border-gray-700' : 'border-gray-200',
  }

  // Close modal when clicking outside
  const closeModal = (e) => {
    if (e.target.id === "cert-modal") {
      setSelectedCert(null)
    }
  }

  return (
    <section 
      id="certifications" 
      className="py-20"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0d182e 0%, #111827 100%)'
          : 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.textPrimary}`}>
            Certifications & <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">Awards</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${theme.textSecondary}`}>
            Professional certifications and recognitions I've earned
          </p>
        </div>

        {/* Certifications Grid - Focus on Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Certificate Card */}
              <div 
                className={`rounded-xl overflow-hidden ${theme.cardBg} backdrop-blur-sm border ${theme.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  {/* Image with hover effect */}
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  {/* Title and Issuer */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-1 ${theme.textPrimary} line-clamp-1`}>
                        {cert.title}
                      </h3>
                      <p className={`text-sm ${theme.textSecondary}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Date and View Button */}
                  <div className="flex items-center justify-between mt-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {cert.date}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedCert(cert)
                      }}
                      className="flex items-center gap-1 text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            View All Certifications
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Modal for Full-size Certificate */}
      {selectedCert && (
        <div
          id="cert-modal"
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
            >
              Close
            </button>
            
            {/* Certificate Image */}
            <img
              src={selectedCert.image}
              alt={`${selectedCert.title} certificate - full view`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Certificate Info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
              <p className="text-gray-300">Issued by {selectedCert.issuer} • {selectedCert.date}</p>
              
              {/* Verify Link */}
              {selectedCert.url && (
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Online
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Certificates