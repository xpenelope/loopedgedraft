import React, { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#72858A] to-[#8C947D] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-gray-900">Loop Edge</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#72858A] transition-colors font-body">Services</a>
            <a href="#about" className="text-gray-600 hover:text-[#72858A] transition-colors font-body">About</a>
            <a href="#process" className="text-gray-600 hover:text-[#72858A] transition-colors font-body">Process</a>
            <button className="bg-gradient-to-r from-[#72858A] to-[#8C947D] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-body font-medium">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-[#72858A] transition-colors font-body">Services</a>
              <a href="#about" className="text-gray-600 hover:text-[#72858A] transition-colors font-body">About</a>
              <a href="#process" className="text-gray-600 hover:text-[#72858A] transition-colors font-body">Process</a>
              <button className="bg-gradient-to-r from-[#72858A] to-[#8C947D] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 w-fit font-body font-medium">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
