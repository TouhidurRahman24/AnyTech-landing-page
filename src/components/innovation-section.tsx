"use client"

import { motion } from "framer-motion"
import { Brain, Database, Cloud } from "lucide-react"

const innovationSteps = [
  {
    title: "Artificial Intelligence",
    description: "Smart data processing",
    icon: Brain,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Blockchain",
    description: "Secure transactions",
    icon: Database,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Cloud",
    description: "Scalable infrastructure",
    icon: Cloud,
    color: "from-cyan-400 to-cyan-600",
  },
]

export default function InnovationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Human-centred innovation</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            <div className="flex justify-between items-center">
              {innovationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 w-64">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 -translate-y-1/2 -z-10" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Full suite solutions</h3>
            <p className="text-sm text-gray-600">
              Experience the ease of integration across vehicle leasing and payment services with our comprehensive
              suite of solutions
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Simplify the complex</h3>
            <p className="text-sm text-gray-600">
              Simplify complex processes and optimize your financial operations by leveraging the power of AI, Open
              Data, Cloud Computing, and Big Data
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Cutting-edge tech</h3>
            <p className="text-sm text-gray-600">
              We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for
              financial institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

