import { BookOpen, Facebook, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#0A2540]" />
              </div>
              <span className="text-lg font-semibold">AI learning</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              An eLMS education platform that democratize learning using
              smarter and smarter analytics.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#0A2540]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#0A2540]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Twitter className="w-5 h-5 text-[#0A2540]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Useful Link</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Latest Posts</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lecture 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lecture 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lecture 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lecture 4
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+92300-9924922</li>
              <li>
                <a href="mailto:Official.Me.com" className="hover:text-white transition-colors">
                  Official.Me.com
                </a>
              </li>
              <li>Office 49, Faisal Street,</li>
              <li>Madina Lahore, Barkat Road,</li>
              <li>Lahore.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
