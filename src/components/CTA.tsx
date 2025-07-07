import React from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-[#72858A]/20 to-[#8C947D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-white">
                Start Your
                <span className="bg-gradient-to-r from-[#DCC1A8] to-[#E6E0D2] bg-clip-text text-transparent font-display italic"> Transformation</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-body">
                Whether you're an MNC innovation team or a tech startup, we're here to help you navigate untapped opportunities and build sustainable success.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300 font-body">
                <Mail className="w-5 h-5 text-[#DCC1A8]" />
                <span>hello@loopedge.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 font-body">
                <Phone className="w-5 h-5 text-[#DCC1A8]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#72858A] to-[#8C947D] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group font-body font-medium">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#DCC1A8]/50 text-gray-300 px-8 py-4 rounded-lg hover:bg-[#DCC1A8]/10 transition-colors font-body">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#DCC1A8]/20">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Quick Consultation</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-[#DCC1A8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DCC1A8] font-body"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-[#DCC1A8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DCC1A8] font-body"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-white/10 border border-[#DCC1A8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DCC1A8] font-body"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your challenge"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-[#DCC1A8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DCC1A8] resize-none font-body"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#72858A] to-[#8C947D] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-body font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
