import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Check,
  Shield,
  Zap,
  FileText,
  Database,
  Bell,
  BarChart3,
  Video,
  Lock,
} from "lucide-react";

export function AINativePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm text-gray-400 mb-4">AI-Native</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-native by design — not retrofitted
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              iCMMS captures structured operational knowledge across execution
              workflows—so agents can produce cited insights and assist humans
              with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Institutional knowledge
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Operator assistance
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Management bulletins
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Predictive signals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Legacy Data Fails */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why legacy data fails for AI
              </h2>
              <p className="text-gray-600 mb-6">
                AI is only as reliable as the data behind it. In many portals,
                operations data is fragmented across notes, spreadsheets, and
                detached PDFs—making inference brittle and hard to trust.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Free-text notes replace structured capture
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Documents aren't linked to assets and events
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    No consistent relationship model between objects
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Limited evidence trails for audits and learning
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How iCMMS enables reliable agents
              </h2>
              <p className="text-gray-600 mb-6">
                iCMMS is built as a structured operations graph where assets are
                the spine. Every workflow produces linked, validated records
                with evidence.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">
                    Structured templates
                  </span>
                  <span className="text-gray-600">
                    MOP steps, rounds, checklists
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Evidence</span>
                  <span className="text-gray-600">Docs + photos + video</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">
                    Linked objects
                  </span>
                  <span className="text-gray-600">
                    Asset ↔ WO ↔ incident ↔ spares
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-900">
                    Governance
                  </span>
                  <span className="text-gray-600">
                    Access control + versioning
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Intelligence Layer */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Intelligence layer
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            AI capabilities that directly support your pillars: knowledge
            retention, operator productivity, management insight, and lifecycle
            value.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Database className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Asset auto-enrichment
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                AI uses manufacturer + model to pull reference details and
                manuals from trusted sources, so teams can build accurate asset
                registers faster.
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                Reviewable • Cited sources
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Shield className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Spare obsolescence watch
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                AI monitors manufacturer notices for at-risk spare parts (by
                catalog # + manufacturer) and presents proactive action lists.
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                24/7 monitoring • Impact lists
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <FileText className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Document Q&A (RAG)
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ask questions across organization documents and asset evidence.
                Answers include citations back to the exact source.
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                Citations • Permission-aware
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Zap className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Agents across DB + APIs
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Agents answer questions across your operational database and
                approved integrations, then draft summaries and recommended
                actions.
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                Propose → Review → Execute
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Bell className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Management bulletins
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Auto-generated bulletins highlight repeat failures, backlog
                risk, renewals, spares issues, and site trends—with sources.
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                Portfolio-wide • Cited
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <BarChart3 className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Predictive signals (IoT + history)
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Connect telemetry with meters and work history to estimate risk
                and time-to-failure—supporting planned maintenance and lifecycle
                strategy.
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                Risk estimates • Not black-box
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Operator Assistance */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Operator assistance: video → work order
            </h2>
            <p className="text-gray-600 mb-6">
              Operators capture a short video in the field; vision models draft
              a work order with clear descriptions and supporting
              evidence—reducing dispatch time and improving consistency.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-700 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Faster intake
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-700 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Better descriptions
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-700 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Evidence attached
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Governance */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governance
            </h2>
            <p className="text-gray-600 mb-6">
              <strong>Agents propose; people approve.</strong> All outputs
              respect access control and include citations where applicable.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Lock className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Site-level RBAC and permission-aware responses
                </span>
              </li>
              <li className="flex items-start">
                <Lock className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Version-controlled documents with auto archive
                </span>
              </li>
              <li className="flex items-start">
                <Lock className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  System change visibility + notifications
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
