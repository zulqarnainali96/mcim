export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">mcim</h3>
            <p className="text-gray-400 text-sm">
              The only platform built exclusively for data centers and other mission-critical facilities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Asset Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Work Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Intelligent CMMS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Rounds Monitoring
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  By Role
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Mission-Critical Executives
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Facilities and Operations Managers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  By Use Case
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D9C0] transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 MCIM All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#00D9C0] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00D9C0] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
