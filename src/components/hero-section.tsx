"use client"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'linear-gradient(135deg, #0055FF, #00A3FF)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative mx-auto px-6 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4"
        >
          Embrace the future of finance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8"
        >
          Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#FF7F00] hover:bg-[#FF6600] text-white px-6 py-3 text-lg rounded-md"
        >
          Reach Out to Us ▸
        </motion.button>
      </div>
    </section>
  )
}