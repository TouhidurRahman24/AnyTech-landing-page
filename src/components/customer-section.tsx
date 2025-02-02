"use client"

import { motion } from "framer-motion"
import { CircleDot } from "lucide-react"

export default function CustomerSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="text-sm text-blue-600 mb-2 font-semibold tracking-wider">
              POWERING THE FUTURE OF FINANCE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Uncovering new ways to delight customers
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AnyTech is revolutionizing financial technology by introducing innovative solutions that transform the
              industry, delivering capabilities specifically designed for retail financial services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our modern approach automates traditional banking and card processing systems, empowering you with the
              most advanced technology for lasting success.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src="/customer-service.png"
                alt="Customer service representative"
                className="rounded-2xl shadow-xl"
              />

              {/* Floating Icons */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `-${10 + i * 5}%`,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <CircleDot className="w-6 h-6 text-blue-600" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

