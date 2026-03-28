import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Shield, Lock, FileText, Bell, Eye, Check } from "lucide-react";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm text-gray-400 mb-4">
              Security & Governance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Control, traceability, and audit readiness
            </h1>
            <p className="text-xl text-gray-300">
              Site-scoped access control, versioned evidence, and operational
              transparency for mission-critical work.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three Column Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <Shield className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Access control
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    RBAC by company and site
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Teams and approvals</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Permission-aware AI outputs
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <Lock className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Version control
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Auto versioning + archive
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Evidence stays traceable
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Attachments linked to work
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <Eye className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Transparency
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Instant notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Work-order chat</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    System change visibility
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Audit-Ready Reporting */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Audit-ready reporting
            </h2>
            <p className="text-gray-600 mb-6">
              Generate reports across work, procedures, rounds, incidents,
              spares, and contracts—backed by timestamps and evidence
              attachments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md">
                Book a demo
              </Button>
              <Button variant="outline" size="md">
                Explore platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo Section */}
      <section className="py-16 bg-[#0A1628] text-white" id="demo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold">iCMMS</span>
                <span className="bg-[#152238] text-[#00D9C0] px-3 py-1 rounded-full text-xs">
                  AI-native operations
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                AI-native CMMS for mission-critical data centers. Capture
                structured operational data so agents can retain institutional
                knowledge, assist operators, expose blind spots at scale, and
                extend asset life.
              </p>
            </div>

            <div className="bg-[#152238] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Book a demo</h3>
              <p className="text-gray-400 text-sm mb-6">
                Tell us your portfolio size and current tooling— we'll tailor a
                walkthrough.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9C0]"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9C0]"
                />
                <input
                  type="text"
                  placeholder="Number of sites (e.g., 6)"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9C0]"
                />
                <Button variant="primary" size="md" className="w-full">
                  Request demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
