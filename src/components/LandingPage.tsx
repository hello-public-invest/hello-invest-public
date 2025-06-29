import React from 'react';
import { Button } from '@/components/ui/button';

const LandingPage = ({ onLogin, onSignUp, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Header */}
      <header className="relative flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 neon-gradient rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-white">₹</span>
          </div>
          <div>
            <span className="font-bold text-xl text-white">Hello Public</span>
            <span className="text-[#FF4E6A] text-sm ml-2 font-semibold">Invest</span>
          </div>
        </div>
        <Button 
          className="neon-button neon-blue text-white border-0 px-6 py-3"
          onClick={onSignUp}
        >
          Get Started
        </Button>
      </header>

      {/* Welcome Banner */}
      <div className="relative text-center px-6 py-12">
        <div className="glass-card inline-block px-6 py-3 mb-8 neon-gradient">
          <span className="text-white font-bold">💰 Welcome Bonus ₹100 for New Users!</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          Invest Smart, <span className="text-[#FF4E6A]">Earn More</span>
        </h1>
        <p className="text-xl mb-10 px-4 text-white/80 max-w-2xl mx-auto">
          Join thousands of smart investors earning guaranteed returns with our AI-powered investment platform
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center px-4 mb-12">
          <Button 
            className="neon-button neon-gradient text-white px-8 py-4 text-lg"
            onClick={onSignUp}
          >
            Start Investing Now
          </Button>
          <Button 
            className="neon-button back-button px-8 py-4 text-lg text-white"
            onClick={onLogin}
          >
            Login
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 mb-12 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#FF4E6A] mb-2">50,000+</div>
            <div className="text-sm text-white/80">Active Investors</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#4EB8FF] mb-2">₹2.5 Cr+</div>
            <div className="text-sm text-white/80">Total Payouts</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#A94EFF] mb-2">99.8%</div>
            <div className="text-sm text-white/80">Success Rate</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">18%</div>
            <div className="text-sm text-white/80">Avg. Returns</div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="relative px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Hello Public Invest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 neon-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-white">Smart Investment Plans</h3>
            <p className="text-white/70">5 curated plans with guaranteed returns up to 45%</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 neon-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-white">Auto Profit System</h3>
            <p className="text-white/70">Earnings automatically added to your wallet</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 neon-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-white">Secure Platform</h3>
            <p className="text-white/70">Bank-grade security for all transactions</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 neon-red rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-white">Referral Rewards</h3>
            <p className="text-white/70">Earn ₹150 for every successful referral</p>
          </div>
        </div>
      </div>

      {/* Investment Plans Preview */}
      <div className="relative px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Investment Plans</h2>
        <p className="text-center text-white/70 mb-12 text-lg">Choose from our carefully curated investment options</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-8 text-center">
            <div className="text-3xl font-bold text-[#4EB8FF] mb-2">₹1,000</div>
            <div className="text-[#4EB8FF] font-semibold text-lg mb-2">12% Returns</div>
            <div className="text-white/70 mb-6">15 Days</div>
            <Button className="neon-button neon-blue text-white w-full py-3">Invest Now</Button>
          </div>
          
          <div className="glass-card p-8 text-center border-2 border-[#FF4E6A]/30">
            <div className="text-3xl font-bold text-[#FF4E6A] mb-2">₹5,000</div>
            <div className="text-[#FF4E6A] font-semibold text-lg mb-2">18% Returns</div>
            <div className="text-white/70 mb-6">25 Days</div>
            <Button className="neon-button neon-red text-white w-full py-3">Invest Now</Button>
          </div>
          
          <div className="glass-card p-8 text-center">
            <div className="text-3xl font-bold text-[#A94EFF] mb-2">₹10,000</div>
            <div className="text-[#A94EFF] font-semibold text-lg mb-2">25% Returns</div>
            <div className="text-white/70 mb-6">45 Days</div>
            <Button className="neon-button neon-purple text-white w-full py-3">Invest Now</Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative neon-gradient py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🎁</div>
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Investment Journey?</h2>
          <p className="mb-8 text-lg text-white/90">Join now and get ₹100 welcome bonus + daily rewards!</p>
          <Button 
            className="neon-button bg-black/20 backdrop-blur-lg text-white hover:bg-black/30 px-10 py-4 text-lg"
            onClick={onSignUp}
          >
            Create Account - It's Free!
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black/40 backdrop-blur-lg text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 neon-gradient rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">₹</span>
                </div>
                <span className="font-bold text-lg text-white">Hello Public</span>
              </div>
              <p className="text-white/70">India's most trusted investment platform. Start your investment journey with guaranteed returns.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button onClick={() => onNavigate('dashboard')} className="hover:text-[#4EB8FF] transition-colors duration-200">Dashboard</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('investment')} className="hover:text-[#4EB8FF] transition-colors duration-200">Investment Plans</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('wallet')} className="hover:text-[#4EB8FF] transition-colors duration-200">Wallet</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('calculator')} className="hover:text-[#4EB8FF] transition-colors duration-200">Calculator</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('referral')} className="hover:text-[#4EB8FF] transition-colors duration-200">Referral</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('history')} className="hover:text-[#4EB8FF] transition-colors duration-200">History</button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button onClick={() => onNavigate('privacy')} className="hover:text-[#4EB8FF] transition-colors duration-200">Privacy Policy</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('terms')} className="hover:text-[#4EB8FF] transition-colors duration-200">Terms & Conditions</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('refund')} className="hover:text-[#4EB8FF] transition-colors duration-200">Refund Policy</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('recruitment')} className="hover:text-[#4EB8FF] transition-colors duration-200">Recruitment</button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-[#4EB8FF] transition-colors duration-200">Contact Us</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('help')} className="hover:text-[#4EB8FF] transition-colors duration-200">Help Center</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-[#4EB8FF] transition-colors duration-200">FAQ</button>
                </li>
                <li className="text-white/60">support@hellopublicinvest.com</li>
                <li className="text-white/60">📞 +91 9876543210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
            © 2024 Hello Public Invest. All rights reserved. | Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
