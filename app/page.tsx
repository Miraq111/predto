import React from "react";
import {
  Brain,
  Coins,
  Lock,
  Scale,
  ChevronRight,
  Trophy,
  Shield,
  Users,
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Disc as Discord,
} from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8" />
              <span className="text-xl font-bold">Predto</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#security"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Security
              </a>
              <a
                href="#community"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Community
              </a>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full font-medium transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-6">
            🚀 The Future of Decentralized Markets
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Project. Stake. Win.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            The future of decentralized projections. Stake your tokens on
            real-world outcomes and earn rewards for being right.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/markets">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                Start Projecting
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
            <button className="border-2 border-purple-500 hover:border-purple-400 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple steps to participate in decentralized projections
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">1. Connect Wallet</h3>
            <p className="text-gray-400">
              Link your Web3 wallet to get started
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">2. Choose Event</h3>
            <p className="text-gray-400">
              Select from available projection events
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Coins className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">3. Stake Tokens</h3>
            <p className="text-gray-400">Place your stake on the outcome</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">4. Earn Rewards</h3>
            <p className="text-gray-400">Win rewards for correct projections</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
              <Coins className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Stake & Earn</h3>
            <p className="text-gray-400">
              Put your tokens behind your projections and earn rewards when
              you're right.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure & Transparent</h3>
            <p className="text-gray-400">
              All projections and stakes are secured by blockchain technology.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
              <Scale className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fair Resolution</h3>
            <p className="text-gray-400">
              Automated and transparent distribution of rewards to winning
              projections.
            </p>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div
        id="security"
        className="container mx-auto px-4 py-20 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-gray-400">
              Your assets are protected by industry-leading security measures
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Smart Contract Audited</h3>
              <p className="text-gray-400">
                Our smart contracts undergo rigorous auditing by leading
                security firms to ensure your assets are safe.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
              <Lock className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Secure Infrastructure</h3>
              <p className="text-gray-400">
                Multi-signature requirements and time-locks protect against
                unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              $10M+
            </div>
            <p className="text-gray-400">Total Value Locked</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              50K+
            </div>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              100K+
            </div>
            <p className="text-gray-400">Projections Made</p>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div
        id="community"
        className="container mx-auto px-4 py-20 border-t border-white/10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Be part of the fastest-growing decentralized projection platform
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
          >
            <Discord className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6" />
              <span className="text-lg font-bold">Predto</span>
            </div>
            <p className="text-gray-400">
              The future of decentralized projections and staking.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 pt-8 border-t border-white/10">
          <p>© 2025 Predto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
