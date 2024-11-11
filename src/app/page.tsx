/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-light tracking-wider">INTIFY</div>
            <div className="space-x-12">
              <button className="text-gray-600 hover:text-black transition-colors text-sm">
                Opportunities
              </button>
              <button className="text-gray-600 hover:text-black transition-colors text-sm">
                Approach
              </button>
              <button className="text-gray-600 hover:text-black transition-colors text-sm">
                About
              </button>
              <button className="border border-gray-900 px-5 py-2 hover:bg-gray-900 hover:text-white transition-colors text-sm">
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-green-800 text-sm font-medium tracking-wider">SECURING TOMORROW'S COFFEE PRODUCTION</span>
            </div>
            <h1 className="text-6xl font-light leading-tight mb-8 tracking-tight">
              Coffee's Great Migration: A Once-in-a-Generation Investment
            </h1>
            <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
              We identify and secure the world's most climate-resilient coffee growing regions, creating unique investment opportunities in a $200B+ market transformation.
            </p>
            <div className="flex gap-6 justify-center">
              <button className="bg-green-900 text-white px-8 py-4 hover:bg-green-800 transition-colors text-sm tracking-wide">
                Investment Opportunities
              </button>
              <button className="border border-green-900 text-green-900 px-8 py-4 hover:bg-green-900 hover:text-white transition-colors text-sm tracking-wide">
                Our Approach
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-12 mt-20 text-left">
              <div className="border-l-2 border-green-900 pl-6">
                <div className="text-3xl font-light text-green-900 mb-2">50%</div>
                <p className="text-sm text-gray-600">of current growing regions at risk by 2050</p>
              </div>
              <div className="border-l-2 border-green-900 pl-6">
                <div className="text-3xl font-light text-green-900 mb-2">15-20%</div>
                <p className="text-sm text-gray-600">target IRR through strategic positioning</p>
              </div>
              <div className="border-l-2 border-green-900 pl-6">
                <div className="text-3xl font-light text-green-900 mb-2">2025</div>
                <p className="text-sm text-gray-600">first mover advantage window</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Focus */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl text-white group hover:shadow-xl transition-all duration-300">
              <div className="border-b border-white/10 pb-6 mb-6">
                <h3 className="text-2xl font-light">Premium Coffee</h3>
              </div>
              <p className="text-green-100/80 text-sm leading-relaxed mb-8">
                Securing and developing optimal growing conditions for specialty coffee in climate-resilient regions.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60">Target IRR: 15-20%</span>
                <span className="text-white/60 group-hover:text-white transition-colors">Learn more →</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-8 rounded-xl text-white group hover:shadow-xl transition-all duration-300">
              <div className="border-b border-white/10 pb-6 mb-6">
                <h3 className="text-2xl font-light">Wine & Vineyards</h3>
              </div>
              <p className="text-green-100/80 text-sm leading-relaxed mb-8">
                Developing new terroirs in emerging premium wine regions with proven climate resilience.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60">Coming Q3 2024</span>
                <span className="text-white/60 group-hover:text-white transition-colors">Learn more →</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-800 to-emerald-700 p-8 rounded-xl text-white group hover:shadow-xl transition-all duration-300">
              <div className="border-b border-white/10 pb-6 mb-6">
                <h3 className="text-2xl font-light">Fine Cocoa</h3>
              </div>
              <p className="text-green-100/80 text-sm leading-relaxed mb-8">
                Strategic acquisition of prime cocoa-growing regions with long-term climate stability.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60">Coming Q4 2024</span>
                <span className="text-white/60 group-hover:text-white transition-colors">Learn more →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Now Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-16">Why Now</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center text-white text-sm shrink-0">01</div>
                <div>
                  <h3 className="text-xl font-light mb-2">Critical Timing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Current growing regions are already experiencing yield declines. Early movers will secure the best alternative locations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-white text-sm shrink-0">02</div>
                <div>
                  <h3 className="text-xl font-light mb-2">Market Opportunity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    $200B+ market facing unavoidable transformation. Strategic positioning now enables premium pricing later.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white text-sm shrink-0">03</div>
                <div>
                  <h3 className="text-xl font-light mb-2">Proven Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Data-driven site selection combined with agricultural expertise ensures optimal location choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Investment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Identify",
                desc: "Data-driven selection of climate-resilient sites"
              },
              {
                step: "02",
                title: "Secure",
                desc: "Strategic land acquisition in optimal zones"
              },
              {
                step: "03",
                title: "Develop",
                desc: "Sustainable infrastructure implementation"
              },
              {
                step: "04",
                title: "Scale",
                desc: "Production optimization and expansion"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-xs text-green-800 font-medium mb-4">{item.step}</div>
                <h3 className="text-lg font-light mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-3 -right-4 w-8 h-[1px] bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-24 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8">Data-Driven Selection</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-white/90 leading-relaxed mb-8">
                  Proprietary analytics platform identifying optimal growing regions through advanced climate modeling and soil analysis.
                </p>
                <button className="border border-white px-6 py-3 text-sm hover:bg-white hover:text-green-900 transition-colors">
                  Our Technology
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Climate Modeling</h4>
                  <p className="text-white/70 text-sm">50-year climate projection analysis</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Site Selection</h4>
                  <p className="text-white/70 text-sm">Multi-factor suitability scoring</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Risk Assessment</h4>
                  <p className="text-white/70 text-sm">Comprehensive risk modeling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Secure Your Position</h2>
            <p className="text-gray-600 mb-12">
              Connect with our team to learn about current investment opportunities in climate-resilient coffee production.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-green-900 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-green-900 text-white px-6 py-3 hover:bg-green-800 transition-colors text-sm whitespace-nowrap"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">About</li>
                <li className="hover:text-gray-900 cursor-pointer">Team</li>
                <li className="hover:text-gray-900 cursor-pointer">News</li>
                <li className="hover:text-gray-900 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Opportunities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">Coffee</li>
                <li className="hover:text-gray-900 cursor-pointer">Wine</li>
                <li className="hover:text-gray-900 cursor-pointer">Cocoa</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">Research</li>
                <li className="hover:text-gray-900 cursor-pointer">Insights</li>
                <li className="hover:text-gray-900 cursor-pointer">Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">Terms</li>
                <li className="hover:text-gray-900 cursor-pointer">Privacy</li>
                <li className="hover:text-gray-900 cursor-pointer">Disclaimer</li></ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                © 2024 INTIFY. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Medium</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
