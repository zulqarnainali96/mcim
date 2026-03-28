import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { brandKit } from "../brandkit";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
  FileText,
  Clock,
  Layers,
  Box,
  Settings,
  Bell,
  MessageSquare,
  Workflow,
} from "lucide-react";

export function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm text-gray-400 mb-4">Platform</div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontSize: "40px" }}
            >
              One portal for mission-critical operations
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Assets are the spine. Workflows create clean records. Evidence is
              first-class. This is what makes AI reliable.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Structured capture
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Evidence + versioning
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#152238] text-[#00D9C0]">
                <span className="w-2 h-2 rounded-full bg-[#00D9C0] mr-2"></span>
                Telemetry → work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The iCMMS platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            iCMMS unifies work orders, procedures, rounds, incidents, spares,
            contracts, and telemetry into a single operations graph. The goal is
            consistency: faster execution, stronger audits, and scalable insight
            across sites.
          </p>
          <div className="border-t border-gray-200 my-12"></div>
        </div>
      </section>

      {/* Assets as System of Record */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Assets as the system of record
              </h2>
              <p className="text-gray-600 mb-6">
                Every asset and sub-asset holds the complete operational story:
                profile, documents, media, work history, incidents, parts usage,
                contracts, and sensor trends—organized chronologically for
                troubleshooting and learning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Lifecycle fields: model/serial, install/commission,
                    warranty, book cost, expected life
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Asset and site document vault with version control
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Chronological timeline across work, incidents, spares, and
                    telemetry
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Execution workflows that create clean data
              </h2>
              <p className="text-gray-600 mb-6">
                iCMMS captures execution in a consistent structure—with
                evidence—so outcomes are comparable across shifts and sites.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Work orders</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Preventive, corrective, inspections, deficiencies;
                    recurring, reminders, approvals.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">
                    Digital procedures
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    MOP execution on mobile with step evidence and audit-ready
                    reporting.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Rounds</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Validated readings, non-conformance capture, trends, and
                    historical review.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Incidents</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Tickets tied to assets; tenant updates; convert to work with
                    traceability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-12"></div>
        </div>
      </section>

      {/* Telemetry and Spares */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Telemetry, meters, and threshold automation
              </h2>
              <p className="text-gray-600 mb-6">
                Signals become accountable follow-up—not missed alerts.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Multiple meters per asset/sub-asset: manual, BMS, or
                    device-fed
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Threshold breaches generate work orders and route to teams
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Trends support drift detection and portfolio analytics
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="md">
                  Explore IoT & Sensors
                </Button>
                <Button variant="outline" size="md">
                  AI-native layer
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Spares and contracts readiness
              </h2>
              <p className="text-gray-600 mb-6">
                Connect inventory movement and contract coverage to the work
                that consumes them—so renewals, vendor performance, and part
                risk are visible with context.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Spare parts movement and historical cost records
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Vendors, contacts, contracts, renewals, and YoY price
                    changes
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Link spares and contracts to asset timelines
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 my-12"></div>
        </div>
      </section>

      {/* Reporting and Collaboration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reporting, audits, and evidence
              </h2>
              <p className="text-gray-600 mb-6">
                Audits are produced from day-to-day execution—timestamps,
                approvals, attachments, and reports.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Audit-ready reporting across modules
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Versioned documents and evidence packs
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Traceable history for reviews and continuous improvement
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Collaboration and notifications
              </h2>
              <p className="text-gray-600 mb-6">
                Coordinate in the flow of work with chat, notifications, and
                system change visibility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Chat collaboration in work orders
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Instant user notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#00D9C0] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    System activity visibility for accountability
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 my-12"></div>
        </div>
      </section>

      {/* Process Automation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              One-on-one process automation support
            </h2>
            <p className="text-gray-600 mb-6">
              Every data center has unique approval chains and handoffs. We run
              working sessions to map your workflows and identify where agentic
              automation can reduce manual coordination—without forcing change
              for the sake of change.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md">
                Book a demo
              </Button>
              <Button variant="outline" size="md">
                Explore use cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A1628] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            See how iCMMS can help you streamline workflows, improve asset
            reliability, and gain actionable insights.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Schedule a demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-[#0A1628]"
            >
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
