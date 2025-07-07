import React from 'react'
import { Brain, Target, TrendingUp, Users, Database, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "Strategic Planning",
    description: "Perspective-shifting analysis for visionaries and change makers in MNCs and startups.",
    features: ["Innovation Strategy", "Digital Roadmaps", "Market Analysis"]
  },
  {
    icon: Target,
    title: "Operational Excellence",
    description: "Uncover hidden inefficiencies and unlock new operational strategies.",
    features: ["Process Optimization", "Performance Metrics", "Resource Allocation"]
  },
  {
    icon: Database,
    title: "Data Mastery",
    description: "Master your data with advanced analytics and AI-driven insights.",
    features: ["Data Architecture", "Predictive Analytics", "Real-time Dashboards"]
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description: "Navigate untapped opportunities for sustainable business success.",
    features: ["Market Expansion", "Revenue Optimization", "Scalability Planning"]
  },
  {
    icon: Users,
    title: "Team Transformation",
    description: "Build native AI working processes for modern digital teams.",
    features: ["AI Integration", "Workflow Automation", "Team Training"]
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "Experimental approaches to breakthrough business challenges.",
    features: ["Rapid Prototyping", "Proof of Concepts", "Innovation Workshops"]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#72858A] to-[#8C947D] bg-clip-text text-transparent font-display italic">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Comprehensive solutions designed for strategic planners, pathfinders, and change makers across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-[#E6E0D2]/20 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#DCC1A8]"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#72858A] to-[#8C947D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 font-body">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 font-body">
                    <div className="w-1.5 h-1.5 bg-[#8C947D] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
