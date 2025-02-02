"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF] to-[#00A3FF] transform -skew-y-6 origin-top-right scale-110" />

      <div className="relative py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Legacy no longer</h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
              Talk to us to find out how we can transform your organization for the future
            </p>
            <Button className="bg-[#FF6B00] hover:bg-[#FF5500] text-white px-8 py-3 text-base rounded-md">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

