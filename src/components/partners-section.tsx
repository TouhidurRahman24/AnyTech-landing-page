export default function PartnersSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-70">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-32 h-12 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  