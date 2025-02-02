"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function SecuritySection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="text-sm text-blue-600 mb-2 font-semibold tracking-wider">SECURE AND SAFE</div>
            <h2 className="text-3xl font-bold mb-6">Highly secure and safe</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover unparalleled security backed by financial institutions. Our comprehensive security measures
              ensure complete protection and compliance with international security standards, keeping you in control.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join over 40 esteemed FIs, each serving more than 100,000 customers, as we push into our secure, robust
              and reliable infrastructure.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill-rule='evenodd' stroke='%23ffffff' fill='none' stroke-opacity='0.2'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>

              {/* Animated Shield Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Shield className="w-24 h-24 text-white opacity-20" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

