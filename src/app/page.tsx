/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl tracking-wider">INTIFY</div>
            <div className="flex items-center space-x-12">
              <a className="text-sm hover:text-green-800 transition-colors">
                Portfolios
              </a>
              <a className="text-sm hover:text-green-800 transition-colors">
                Our Approach
              </a>
              <a className="text-sm hover:text-green-800 transition-colors">
                About Us
              </a>
              <button className="border border-gray-900 px-5 py-2 text-sm hover:bg-gray-900 hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8FAF8]">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light leading-tight mb-8">
              Invest in Climate-Resilient Agriculture
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              We identify and secure the most resilient agricultural regions to protect and transform the future of food production.
            </p>
            <div className="flex gap-6">
              <button className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-all">
                Learn More
              </button>
              <button className="border border-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Returns Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-16">Triple Returns</h2>
          <div className="grid grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-light mb-4">Financial Returns</h3>
              <p className="text-gray-600">Strategic positioning in emerging agricultural regions delivers strong IRR through early-mover advantage</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Climate Returns</h3>
              <p className="text-gray-600">Sustainable agricultural practices enhance soil health and biodiversity while reducing emissions</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Social Returns</h3>
              <p className="text-gray-600">Job creation and community development through sustainable agricultural operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-16">How It Works</h2>
          <div className="grid grid-cols-5 gap-8">
            {[
              {
                step: "1. Search",
                desc: "Using climate modeling & proprietary algorithms to identify optimal growing regions"
              },
              {
                step: "2. Analyze",
                desc: "Comprehensive assessment of soil quality and infrastructure potential"
              },
              {
                step: "3. Structure",
                desc: "Creating investment vehicles tailored to portfolio requirements"
              },
              {
                step: "4. Implement",
                desc: "Developing sustainable agricultural operations with local partners"
              },
              {
                step: "5. Returns",
                desc: "Generating returns through premium agricultural production"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <h3 className="text-lg font-light mb-4">{item.step}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-3 -right-4 w-8 h-[1px] bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-16">
            <div>
              <div className="text-4xl font-light mb-4">50%</div>
              <p className="text-gray-600">of current coffee growing regions at risk by 2050</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-4">15-20%</div>
              <p className="text-gray-600">target IRR through strategic positioning</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-4">$200B+</div>
              <p className="text-gray-600">market undergoing climate-driven transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Driven */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-light mb-8">Intelligence Driven</h2>
              <p className="text-gray-600 mb-8">
                We combine advanced climate modeling with agricultural expertise to identify and develop the most promising regions for future production.
              </p>
              <button className="border border-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-all">
                Learn More
              </button>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white">
                <h3 className="text-lg font-light mb-3">Climate Modeling</h3>
                <p className="text-gray-600">Advanced forecasting identifies optimal future growing conditions</p>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-light mb-3">Soil Analysis</h3>
                <p className="text-gray-600">Comprehensive assessment of soil quality and potential</p>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-light mb-3">Infrastructure Planning</h3>
                <p className="text-gray-600">Strategic evaluation of development requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to get started?</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect with our team to learn about current investment opportunities in climate-resilient agriculture.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
              required
            />
            <button className="bg-white text-gray-900 px-6 py-3 hover:bg-gray-100 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="text-xl tracking-wider mb-6">INTIFY</div>
              <p className="text-gray-600 max-w-sm">
                Strategic investment in climate-resilient agricultural land.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">About</li>
                <li className="hover:text-gray-900 cursor-pointer">Team</li>
                <li className="hover:text-gray-900 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">Research</li>
                <li className="hover:text-gray-900 cursor-pointer">Insights</li>
                <li className="hover:text-gray-900 cursor-pointer">News</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer">Privacy</li>
                <li className="hover:text-gray-900 cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 INTIFY. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
