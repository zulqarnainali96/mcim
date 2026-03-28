import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { FeatureCard } from './components/Card';
import {
  Database,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D9C0] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#152238] px-4 py-2 rounded-full text-sm mb-6">
              <span className="text-[#00D9C0] font-semibold">MISSION-CRITICAL OPERATIONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The only platform built exclusively for data centers
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Manage your mission-critical facilities with unprecedented clarity and control.
              From asset management to operational efficiency, MCIM delivers the insights
              and tools you need to keep your operations running at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get a demo
              </Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section variant="light">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            TRUSTED BY THE WORLD'S LEADERS IN CRITICAL INFRASTRUCTURE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">KEPPEL</div>
            <div className="text-2xl font-bold text-gray-400">NOVVA</div>
            <div className="text-2xl font-bold text-gray-400">NTT</div>
            <div className="text-2xl font-bold text-gray-400">MCIM</div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One platform for all of your data center operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline workflows, maximize uptime, and gain real-time visibility across
            your entire portfolio of mission-critical facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={Database}
            title="Master your assets, maximize your potential"
            description="Get complete visibility and control over every asset in your facility. Track lifecycle, performance, and maintenance with precision."
          />
          <FeatureCard
            icon={BarChart3}
            title="From incidents to insights"
            description="Transform reactive maintenance into proactive intelligence. Identify patterns, predict issues, and optimize performance before problems arise."
          />
          <FeatureCard
            icon={Shield}
            title="Smarter rounds. Stronger ops."
            description="Digitize inspection rounds and ensure compliance with intelligent workflows that adapt to your facility's unique requirements."
          />
        </div>
      </Section>

      <Section variant="dark">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why mission-critical facilities choose MCIM
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built specifically for the unique demands of data centers and other
            mission-critical infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#00D9C0' }}
            >
              <Zap className="w-8 h-8 text-[#0A1628]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No Silos</h3>
            <p className="text-gray-300 leading-relaxed">
              Break down operational barriers with a unified platform that connects
              every aspect of your facility management.
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#00D9C0' }}
            >
              <Globe className="w-8 h-8 text-[#0A1628]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No Blind Spots</h3>
            <p className="text-gray-300 leading-relaxed">
              Gain complete visibility across all systems, assets, and operations
              with real-time monitoring and analytics.
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#00D9C0' }}
            >
              <Users className="w-8 h-8 text-[#0A1628]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No Going it Alone</h3>
            <p className="text-gray-300 leading-relaxed">
              Partner with experts who understand mission-critical operations and
              provide dedicated support every step of the way.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <Database className="w-24 h-24 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <div className="inline-block bg-[#E8F5FF] text-[#0066FF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ENTERPRISE ASSET MANAGEMENT
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Master your assets, maximize your potential
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Track, manage, and optimize every asset across your facilities with
              comprehensive lifecycle management and real-time performance insights.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D9C0] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Complete asset visibility and tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D9C0] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Predictive maintenance scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D9C0] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Automated compliance documentation</span>
              </li>
            </ul>
            <Button variant="secondary" size="md">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-[#F0E8FF] text-[#6B46C1] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              INTELLIGENT MONITORING
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Clarity that drives performance
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform raw data into actionable insights with intelligent analytics
              and real-time monitoring across your entire operation.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D9C0] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Real-time performance dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D9C0] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Advanced analytics and reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D9C0] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Automated alerts and notifications</span>
              </li>
            </ul>
            <Button variant="secondary" size="md">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-[#0066FF] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            It's time to uncap your potential
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Book a demo today to see how you can make every data center stronger with MCIM
          </p>
          <Button variant="primary" size="lg">
            Get a demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
