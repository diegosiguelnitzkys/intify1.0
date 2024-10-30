export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-8 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-light tracking-wider">INTIFY</div>
          <div className="space-x-8">
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              For Investors
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              For Building Owners
            </button>
            <button className="border border-emerald-600 text-emerald-600 px-6 py-2.5 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 font-light">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-7xl font-extralight mb-8 leading-tight tracking-tight">
          Invest in Solar<br />Energy Projects
        </h1>
        <p className="text-2xl text-gray-600 mb-16 max-w-2xl mx-auto font-light tracking-wide">
          Generate sustainable returns while powering the future
        </p>
        <div className="space-y-6">
          <button className="bg-emerald-600 text-white px-12 py-4 rounded-full text-lg hover:bg-emerald-700 transition-all duration-300 font-light tracking-wide">
            Start Investing Now
          </button>
          <p className="text-gray-500 font-light tracking-wide">Starting from €1,000</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24 bg-white">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="p-8">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Asset-Backed</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Your investments are secured by real solar installations, providing tangible asset backing.
            </p>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Regular Returns</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Receive monthly dividend payments generated from clean solar energy production.
            </p>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Sustainable Impact</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Make a positive environmental impact while earning competitive returns.
            </p>
          </div>
        </div>
      </div>

      {/* Commercial Building Owners Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8 tracking-wide">Own a Commercial Building?</h2>
            <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
              Transform your unused roof space into a revenue-generating solar power plant. Zero upfront costs, managed installation, and immediate benefits.
            </p>
            <button className="border-2 border-emerald-600 text-emerald-600 px-12 py-4 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 font-light text-lg tracking-wide">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6 tracking-wide">Let's Connect</h2>
            <p className="text-gray-600 mb-12 font-light leading-relaxed">
              Interested in sustainable investments or solar installation? Leave your email and we'll reach out to discuss opportunities.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-emerald-500 font-light"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 whitespace-nowrap font-light"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500 font-light tracking-wide">
        <p>© 2024 INTIFY. All rights reserved.</p>
      </footer>
    </main>
  );
}