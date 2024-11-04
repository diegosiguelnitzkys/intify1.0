export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-900">INTIFY</div>
          <div className="space-x-6">
            <button className="text-gray-700 hover:text-blue-900 transition-colors">
              About
            </button>
            <button className="text-gray-700 hover:text-blue-900 transition-colors">
              For Investors
            </button>
            <button className="text-gray-700 hover:text-blue-900 transition-colors">
              For Farmers
            </button>
            <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Invest in Regenerative Agriculture
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Generate returns from sustainable farming projects while capturing carbon and restoring soil health
            </p>
            <div className="space-y-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded text-lg font-medium hover:bg-gray-100 transition-colors">
                Start Investing Now
              </button>
              <p className="text-blue-100">Starting from €1,000 • Average return 8-12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">€5M+</div>
              <div className="text-gray-600">Projects Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Farmers Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2.5t</div>
              <div className="text-gray-600">CO₂/ha Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Asset-Backed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Current Investment Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Regenerative Grazing Project",
                location: "Catalonia, Spain",
                return: "9.5% Annual ROI",
                raised: "€280,000 / €400,000",
                impact: "150 ha | 375t CO₂",
                rating: "A+",
                term: "36 months",
                progress: 70
              },
              {
                title: "No-Till Farm Transition",
                location: "Andalusia, Spain",
                return: "8.8% Annual ROI",
                raised: "€190,000 / €350,000",
                impact: "200 ha | 500t CO₂",
                rating: "A",
                term: "24 months",
                progress: 54
              }
            ].map((project, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.rating}
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Return Rate</span>
                    <span className="text-blue-900 font-medium">{project.return}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Term</span>
                    <span className="text-blue-900 font-medium">{project.term}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Impact</span>
                    <span className="text-blue-900 font-medium">{project.impact}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">{project.raised}</div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition-colors">
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Create Account",
                description: "Quick sign up and verification process"
              },
              {
                step: 2,
                title: "Choose Projects",
                description: "Select verified regenerative farming projects"
              },
              {
                step: 3,
                title: "Invest",
                description: "Start from €1,000 per project"
              },
              {
                step: 4,
                title: "Earn Returns",
                description: "Receive returns from crops and carbon credits"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get Started Today</h2>
            <p className="text-gray-600 mb-8">
              Leave your email to learn more about investment opportunities in regenerative agriculture
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors whitespace-nowrap"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 INTIFY. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}