import React from 'react'
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "Deep dive into your current challenges and identify core issues through our perspective-shifting methodology.",
    duration: "Week 1-2"
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Develop data-driven strategies and innovative solutions tailored to your specific business context.",
    duration: "Week 3-4"
  },
  {
    icon: Cog,
    title: "Implementation",
    description: "Execute the transformation plan with our expert team, ensuring seamless integration with existing systems.",
    duration: "Week 5-8"
  },
  {
    icon: Rocket,
    title: "Optimization & Scale",
    description: "Monitor performance, optimize processes, and scale successful initiatives across your organization.",
    duration: "Ongoing"
  }
]

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#72858A] to-[#8C947D] bg-clip-text text-transparent font-display italic">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            A proven methodology that transforms challenges into opportunities through systematic analysis and strategic implementation.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#72858A] to-[#8C947D]"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-[#72858A] to-[#8C947D] rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="bg-[#E6E0D2]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-[#E6E0D2]/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#72858A] to-[#8C947D] rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-[#8C947D]/10 text-[#8C947D] rounded-full text-sm font-medium font-body">
                      {step.duration}
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 font-body">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#72858A] to-[#8C947D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto font-body">
              Join hundreds of successful companies that have unlocked their potential with our perspective-shifting approach.
            </p>
            <button className="bg-white text-[#72858A] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-body">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
