import React from 'react'
import { CheckCircle, Award, Globe, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#E6E0D2]/30 to-[#DCC1A8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900">
                Why Choose
                <span className="bg-gradient-to-r from-[#72858A] to-[#8C947D] bg-clip-text text-transparent font-display italic"> Loop Edge</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-body">
                We specialize in working with strategic planning teams, innovation departments, and digital transformation leaders who need to adapt and build native AI working processes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#8C947D] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-accent font-semibold text-gray-900 mb-2 text-lg">MNC Innovation Teams</h3>
                  <p className="text-gray-600 font-body">Specialized support for large enterprise innovation and digital teams navigating complex transformations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#8C947D] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-accent font-semibold text-gray-900 mb-2 text-lg">Tech Startup Acceleration</h3>
                  <p className="text-gray-600 font-body">Help startups adapt and build native AI working processes for competitive advantage.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#8C947D] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-accent font-semibold text-gray-900 mb-2 text-lg">Data-Driven Approach</h3>
                  <p className="text-gray-600 font-body">Leverage advanced analytics and AI to uncover insights that drive sustainable success.</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#DCC1A8]">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-[#72858A]" />
                <div>
                  <div className="font-display font-bold text-gray-900">Industry Leader</div>
                  <div className="text-sm text-gray-600 font-body">Digital Transformation</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-8 h-8 text-[#8C947D]" />
                <div>
                  <div className="font-display font-bold text-gray-900">Global Reach</div>
                  <div className="text-sm text-gray-600 font-body">50+ Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full h-48 object-cover border border-[#E6E0D2]"
              />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Data analytics"
                className="rounded-2xl shadow-lg w-full h-32 object-cover border border-[#E6E0D2]"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Innovation workspace"
                className="rounded-2xl shadow-lg w-full h-32 object-cover border border-[#E6E0D2]"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Strategic planning"
                className="rounded-2xl shadow-lg w-full h-48 object-cover border border-[#E6E0D2]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
