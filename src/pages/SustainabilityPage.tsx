import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Check, Leaf, Recycle, TrendingUp, Zap, BarChart3 } from "lucide-react";

export function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm text-gray-400 mb-4">Sustainability</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainability through operational excellence
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sustainable infrastructure is operated, not declared. iCMMS helps
              reduce waste and extend asset life by making execution consistent
              and evidence-based—across sites and over time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md">
                Book a demo
              </Button>
              <Button variant="outline" size="md">
                IoT & sensors
              </Button>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Lifecycle value
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Condition-based maintenance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reliability is Sustainability */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reliability is sustainability
              </h2>
              <p className="text-gray-600 mb-6">
                Emergency work, repeat incidents, and premature replacements
                create waste—materials, energy, and time. Sustainable operations
                come from earlier detection and consistent follow-through.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Fewer repeat failures → less rework and emergency dispatch
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Better maintenance evidence → fewer unnecessary replacements
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Consistent execution across shifts → less variance and drift
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Longer asset life → lower lifecycle waste and cost
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What iCMMS enables
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Structured execution
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      via work orders, procedures, rounds, and checklists
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Telemetry-to-work automation
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      with thresholds and accountable follow-ups
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Traceable evidence
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      for audits and continuous improvement
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Lifecycle planning
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      supported by history and trending signals
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Operational Sustainability Outcomes */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Operational sustainability outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Leaf className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Extend asset life
              </h3>
              <p className="text-gray-600 text-sm">
                Earlier detection and consistent execution reduce premature
                replacement cycles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Recycle className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Reduce waste
              </h3>
              <p className="text-gray-600 text-sm">
                Fewer repeat failures and rework reduce parts waste, labor
                waste, and downtime exposure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <TrendingUp className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Improve efficiency
              </h3>
              <p className="text-gray-600 text-sm">
                Keeping systems closer to intended performance helps sustain
                efficiency over time.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* From Telemetry to Action */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              From telemetry to action
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainability improves when anomalies become accountable work—not
              missed signals.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="primary" size="md">
                Explore IoT & Sensors
              </Button>
              <Button variant="outline" size="md">
                Explore platform
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Note: outcomes vary by facility and process maturity. iCMMS
              provides the structure and traceability to support sustainable
              operations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
