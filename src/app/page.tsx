/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Refined */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center h-24">
            <div className="text-2xl tracking-wider font-light">INTIFY</div>
            <div className="flex items-center space-x-12">
              <button className="text-gray-600 hover:text-black transition-colors text-sm tracking-wide">
                Investment Thesis
              </button>
              <button className="text-gray-600 hover:text-black transition-colors text-sm tracking-wide">
                Portfolio
              </button>
              <button className="text-gray-600 hover:text-black transition-colors text-sm tracking-wide">
                Approach
              </button>
              <button className="border-2 border-green-900 px-6 py-2.5 text-green-900 hover:bg-green-900 hover:text-white transition-all duration-300 text-sm tracking-wide">
                Connect
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium */}
      <div className="min-h-screen relative flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white pointer-events-none"/>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] text-green-100 font-light tracking-tight leading-none -z-10">
          Agricultural<br/>Investment
        </div>
        <div className="container mx-auto px-8 relative">
          <div className="max-w-3xl">
            <div className="mb-8">
              <div className="inline-block border-2 border-green-900/10 rounded-full px-4 py-1">
                <span className="text-green-800 text-sm font-medium tracking-wider">INVESTMENT OPPORTUNITY</span>
              </div>
            </div>
            <h1 className="text-6xl font-light leading-tight mb-8 tracking-tight">
              Securing Tomorrow&apos;s<br />Coffee Production<br />Through Strategic Land<br />Acquisition
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Identifying and securing climate-resilient agricultural land in a $200B+ market transformation.
            </p>
            <div className="flex gap-6 items-center">
              <button className="bg-green-900 text-white px-8 py-4 hover:bg-green-800 transition-all duration-300 group">
                <span className="flex items-center gap-2">
                  Investment Deck 
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </button>
              <a href="#approach" className="text-green-900 hover:text-green-800 flex items-center gap-2 transition-colors">
                Our Approach
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics - Refined */}
      <div className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-light text-green-900 mb-4">50%</div>
              <p className="text-gray-600">of current coffee production regions face critical climate risk by 2050</p>
            </div>
            <div>
              <div className="text-5xl font-light text-green-900 mb-4">15-20%</div>
              <p className="text-gray-600">target IRR through strategic positioning in emerging regions</p>
            </div>
            <div>
              <div className="text-5xl font-light text-green-900 mb-4">2025</div>
              <p className="text-gray-600">first-mover advantage window for optimal land acquisition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Thesis - Clean */}
      <div className="py-24 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-light mb-12 leading-tight">
                A Strategic Response to Climate-Driven Market Transformation
              </h2>
              <p className="text-white/80 leading-relaxed mb-12">
                Through advanced climate modeling and soil analysis, we identify and secure agricultural land optimally positioned for future coffee production.
              </p>
              <div className="flex items-center gap-8">
                <button className="border-2 border-white px-6 py-3 hover:bg-white hover:text-green-900 transition-all duration-300">
                  Download Investment Thesis
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-light mb-3">Strategic Positioning</h3>
                <p className="text-white/70">Securing prime agricultural assets before market-wide recognition</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-light mb-3">Data-Driven Selection</h3>
                <p className="text-white/70">Proprietary climate and soil analytics for optimal site identification</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-light mb-3">Value Creation</h3>
                <p className="text-white/70">Development of sustainable, high-yield agricultural operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process - Simplified */}
      <div className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-lg">
            <h2 className="text-4xl font-light mb-16">Investment Process</h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Selection",
                desc: "Data-driven identification of optimal growing regions"
              },
              {
                step: "02",
                title: "Due Diligence",
                desc: "Comprehensive climate and soil analysis"
              },
              {
                step: "03",
                title: "Acquisition",
                desc: "Strategic land purchase and development planning"
              },
              {
                step: "04",
                title: "Development",
                desc: "Implementation of sustainable agricultural operations"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-sm text-green-800 mb-6 font-medium">{item.step}</div>
                <h3 className="text-xl font-light mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="absolute top-2.5 -right-4 w-8 h-[1px] bg-gray-200"/>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Premium */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">Connect With Our Team</h2>
            <p className="text-gray-600 mb-12">
              Learn more about our current investment opportunities in climate-resilient agricultural land.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-green-900 text-sm transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-green-900 text-white px-8 py-3 hover:bg-green-800 transition-all duration-300"
              >
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer - Elegant */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-start">
            <div className="grid grid-cols-4 gap-12 flex-1">
              <div>
                <h3 className="text-sm font-medium mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">About</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Team</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Approach</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Investments</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Portfolio</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Process</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Thesis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Research</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Insights</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Legal</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Privacy</li>
                  <li className="hover:text-gray-900 cursor-pointer transition-colors">Terms</li>
                </ul>
              </div>
            </div>
            <div className="ml-24">
              <div className="text-2xl tracking-wider font-light mb-4">INTIFY</div>
              <p className="text-sm text-gray-600 max-w-xs">
                Strategic investment in climate-resilient agricultural land.
              </p>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 INTIFY. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
