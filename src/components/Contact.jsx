// components/Contact.jsx
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import contactImg from '../assets/images/contact.jpg'

const Contact = ({ darkMode }) => {
  // Your contact information
  const contactInfo = {
    email: "rpi@alumni.cmu.edu",
    phone: "+250 782 348 377",
    location: "Kigali, Rwanda",
    linkedin: "https://www.linkedin.com/in/robert-peace-ishimwe-934215162/",
    github: "https://github.com/peacejr7"
  }

  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-700',
    cardBg: darkMode ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-gradient-to-br from-white to-gray-50',
    borderColor: darkMode ? 'border-gray-700' : 'border-gray-200',
    inputBg: darkMode ? 'bg-gray-800/50' : 'bg-gray-50',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert("Message sent! I'll get back to you soon.")
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 ${theme.textPrimary}`}>
            Get In{' '}
            <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl ${theme.textSecondary}`}>
            Let's discuss your project or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className={`rounded-xl p-6 ${theme.cardBg} border ${theme.borderColor} shadow-lg h-full`}>
              <h3 className={`text-xl font-bold mb-6 ${theme.textPrimary}`}>
                Contact Information
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${theme.textSecondary}`}>Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className={`text-base font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'} hover:underline transition-colors`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${theme.textSecondary}`}>Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className={`text-base font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'} hover:underline transition-colors`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${theme.textSecondary}`}>Location</p>
                    <p className={`text-base font-semibold ${theme.textPrimary}`}>
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className={`text-sm font-medium mb-4 ${theme.textSecondary}`}>Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                  >
                    <Linkedin className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                  >
                    <Github className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                  </a>
                </div>
              </div>

              {/* Quick Response Note */}
              <div className={`mt-8 p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-purple-50'} border ${theme.borderColor}`}>
                <p className={`text-sm ${theme.textSecondary}`}>
                  ⚡ I typically respond within <span className="font-semibold">24 hours</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image and Form */}
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-amber-500/20 rounded-2xl blur-xl -z-10" />
                <img
                  src={contactImg}
                  alt="Contact"
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className={`rounded-xl p-6 ${theme.cardBg} border ${theme.borderColor} shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-6 ${theme.textPrimary}`}>
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.borderColor} ${theme.textPrimary} focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.borderColor} ${theme.textPrimary} focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.borderColor} ${theme.textPrimary} focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.borderColor} ${theme.textPrimary} focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.borderColor} ${theme.textPrimary} focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>

              {/* Privacy Note */}
              <p className={`text-xs text-center mt-4 ${theme.textSecondary}`}>
                Your information is secure and will never be shared with third parties.
              </p>
            </motion.form>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className={`text-lg font-medium mb-4 ${theme.textPrimary}`}>
            Prefer to connect directly?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors flex items-center gap-2`}
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors flex items-center gap-2`}
            >
              <Phone className="w-4 h-4" />
              Call Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact