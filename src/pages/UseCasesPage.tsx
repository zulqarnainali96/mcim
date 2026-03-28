import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Check,
  Users,
  BarChart3,
  Shield,
  ShoppingCart,
  Leaf,
  Zap,
  FileText,
  Clock,
} from "lucide-react";

export function UseCasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm text-gray-400 mb-4">Use Cases</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Operational visibility at every level
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              iCMMS helps mission-critical teams execute consistently, retain
              institutional knowledge, and surface blind spots across sites— by
              unifying workflows, telemetry, and evidence into one operations
              graph.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md">
                Book a demo
              </Button>
              <Button variant="outline" size="md">
                AI-native approach
              </Button>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                No silos
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Traceable evidence
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Portfolio insight
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* What Teams Use iCMMS For */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What teams use iCMMS for
            </h2>
            <p className="text-gray-600 mb-6">
              Most platforms track tasks. iCMMS is designed to{" "}
              <strong>capture operational knowledge</strong> as structured
              records—so AI can assist reliably, managers can see blind spots,
              and sites can scale without losing consistency.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Unified workflows
                </h3>
                <p className="text-sm text-gray-600">
                  Work orders, procedures, rounds, incidents, spares,
                  contracts—one portal.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Telemetry-to-work
                </h3>
                <p className="text-sm text-gray-600">
                  Thresholds generate work with evidence and accountability.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  AI-native insight
                </h3>
                <p className="text-sm text-gray-600">
                  Cited answers and summaries from trusted operational data.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* By Role */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">By role</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <Users className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Executives
              </h3>
              <p className="text-gray-600 mb-4">
                Portfolio clarity into readiness, recurring patterns, and
                renewal risks—grounded in evidence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Visibility into risk and recurring failure patterns
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Standardization without losing site flexibility
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Audit-ready reporting without manual evidence gathering
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Evidence-backed bulletins that highlight blind spots
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <BarChart3 className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Operations leaders
              </h3>
              <p className="text-gray-600 mb-4">
                Standardize execution across sites and shifts while preserving
                local reality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Comparable execution across sites, shifts, and vendors
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Accountable backlog, due dates, approvals, and follow-ups
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Telemetry-to-work automation for early detection
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Roll-up visibility into cost, labor, and risk exposure
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <Users className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Operators and supervisors
              </h3>
              <p className="text-gray-600 mb-4">
                Mobile execution, collaboration, and evidence capture in the
                flow of work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Mobile workflows for work orders, procedures, and rounds
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Chat and notifications to reduce handoff friction
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Evidence capture to eliminate back-and-forth
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Assistive intake to speed up issue reporting
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <Shield className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Reliability and lifecycle
              </h3>
              <p className="text-gray-600 mb-4">
                Asset timelines tie signals, incidents, work, and
                parts—supporting trend analysis and planning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Asset timelines connecting signals, incidents, work, and
                    parts
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Trend analysis to detect drift and recurring conditions
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Prioritization across sites and asset classes
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Evidence to support repair/replace planning
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <ShoppingCart className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Procurement and vendors
              </h3>
              <p className="text-gray-600 mb-4">
                Commercial readiness tied to execution—so renewals and parts
                risk have context.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Spares movement and cost history tied to execution
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Obsolescence awareness to reduce downtime exposure
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Contracts linked to assets with renewals and YoY tracking
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Faster vendor coordination with shared evidence
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <Leaf className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sustainability programs
              </h3>
              <p className="text-gray-600 mb-4">
                Earlier detection and consistent execution reduce waste and
                extend asset life.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Reduce waste from repeat incidents and rework
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Extend asset life through early detection and consistency
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Traceable evidence for sustainability initiatives
                  </span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#00D9C0] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Thresholds keep systems near intended performance
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Common Outcomes */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Zap className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Faster response
              </h3>
              <p className="text-gray-600 text-sm">
                Signals become accountable work; teams coordinate in the flow of
                work.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Shield className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fewer repeat failures
              </h3>
              <p className="text-gray-600 text-sm">
                Better evidence, better follow-through, and visibility across
                sites.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <FileText className="w-10 h-10 text-[#00D9C0] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Audit readiness
              </h3>
              <p className="text-gray-600 text-sm">
                Reports are produced from execution evidence—no manual
                compilation required.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* CTA */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              See iCMMS for your environment
            </h2>
            <p className="text-gray-600 mb-6">
              We'll tailor a walkthrough to your sites and identify where
              agentic workflows can automate your unique processes.
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

      <Footer />
    </div>
  );
}
