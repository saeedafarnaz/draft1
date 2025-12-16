import { BookOpen, TrendingUp, Users, Target, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0A2540] rounded flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-[#0A2540]">AI Learning</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-gray-700 hover:text-[#0A2540] font-medium">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A1F30] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Smarter With AI-Powered Education
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An eLMS platform that democratizes learning using advanced analytics and
            personalized learning paths powered by artificial intelligence.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link
              to="/signup"
              className="px-8 py-3 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A1F30] transition-colors font-medium flex items-center gap-2"
            >
              Start Learning <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-3 border-2 border-[#0A2540] text-[#0A2540] rounded-lg hover:bg-[#0A2540] hover:text-white transition-colors font-medium flex items-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
          <div className="relative bg-gradient-to-b from-blue-50 to-transparent rounded-lg overflow-hidden h-96 flex items-center justify-center border border-gray-200">
            <div className="text-gray-400 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                Hero Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AI Learning?</h2>
            <p className="text-gray-600 text-lg">Powerful features designed for modern learners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                Track your progress with AI-powered analytics that help you identify
                strengths and areas for improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Path</h3>
              <p className="text-gray-600">
                Get personalized learning recommendations tailored to your learning style
                and pace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with fellow learners, share insights, and collaborate on projects
                in a supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Sign Up', desc: 'Create your account in seconds' },
              { number: '02', title: 'Choose Course', desc: 'Select from our curated courses' },
              { number: '03', title: 'Learn & Practice', desc: 'Study with AI-powered guidance' },
              { number: '04', title: 'Track Progress', desc: 'Monitor your learning journey' },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-[#0A2540] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-gray-200 mb-8">Join thousands of students already learning with AI Learning</p>
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-[#0A2540] rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-gray-900" />
                </div>
                <span className="text-lg font-semibold text-white">AI Learning</span>
              </div>
              <p className="text-sm">Democratizing education through AI-powered learning</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 AI Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
