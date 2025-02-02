"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = [
  { title: "Our Solutions", href: "#" },
  { title: "Analysis", href: "#" },
  { title: "Portfolio", href: "#" },
  { title: "FinTech", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0055FF] text-white">
      <div className="container mx-auto px-6">
        <div className="py-12 border-b border-blue-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-2xl font-bold">
                ANYTECH
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {footerLinks.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm hover:text-blue-200 transition-colors">
                  {link.title}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 text-sm text-center md:text-left text-blue-200"
        >
          ©2024 AnyTech Financial Technology Pte Ltd. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

