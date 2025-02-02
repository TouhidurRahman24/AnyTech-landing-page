import { CircleDot } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-sm text-blue-600 mb-2 uppercase tracking-wider">POWERING THE FUTURE OF FINANCE</div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncovering new ways to delight customers</h2>
            <p className="text-gray-600 mb-4">
              AnyTech is revolutionizing financial technology by introducing innovative solutions that transform the
              industry, delivering capabilities specifically designed for retail financial services.
            </p>
            <p className="text-gray-600">
              Our modern approach automates traditional banking and card processing systems, empowering you with the
              most advanced technology for lasting success.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <CircleDot className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

