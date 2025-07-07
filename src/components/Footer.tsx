import React from 'react'
import { Zap, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#72858A] to-[#8C947D] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold">Loop Edge</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-body">
              Empowering businesses to uncover core challenges through perspective-shifting processes that unlock new operational strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#72858A] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#72858A] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#72858A] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-accent font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 font-body">
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Operational Excellence</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Data Mastery</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Growth Acceleration</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Team Transformation</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-accent font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400 font-body">
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Finance</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-[#DCC1A8] transition-colors">Retail</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-accent font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400 font-body">
              <p>hello@loopedge.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Innovation Drive<br />San Francisco, CA 94105</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-body">
            © 2024 Loop Edge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0 font-body">
            <a href="#" className="hover:text-[#DCC1A8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#DCC1A8] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#DCC1A8] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
