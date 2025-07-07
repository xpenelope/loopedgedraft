import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-[#E6E0D2] to-[#DCC1A8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-[#8C947D]/10 text-[#8C947D] rounded-full text-sm font-medium font-body">
                <span className="w-2 h-2 bg-[#8C947D] rounded-full mr-2"></span>
                Perspective-Shifting Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Uncover Core
                <span className="bg-gradient-to-r from-[#72858A] to-[#8C947D] bg-clip-text text-transparent font-display italic"> Challenges</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-body">
                Loop Edge empowers businesses to uncover core challenges through a perspective-shifting process that unlocks new operational strategies. Leveraging digital solutions and a data-driven approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#72858A] to-[#8C947D] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group font-body font-medium">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#DCC1A8] text-gray-700 px-8 py-4 rounded-lg hover:bg-[#E6E0D2]/50 transition-colors flex items-center justify-center font-body">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#DCC1A8]">
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-body">Businesses Transformed</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600 font-body">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 font-body">Support Available</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#72858A] to-[#8C947D] rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business team collaborating"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-[#E6E0D2]">
              <div className="text-2xl font-display font-bold text-[#72858A]">AI-Powered</div>
              <div className="text-sm text-gray-600 font-body">Data Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
