
import React from 'react';
import { Button } from '@/components/ui/button';

const LandingPage = ({ onLogin, onSignUp, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-black">₹</span>
          </div>
          <span className="font-bold text-lg">Hello Public</span>
          <span className="text-yellow-400 text-sm">Invest</span>
        </div>
        <Button 
          variant="outline" 
          className="border-white text-black bg-white hover:bg-gray-100 font-semibold"
          onClick={onSignUp}
        >
          Get Started
        </Button>
      </header>

      {/* Welcome Banner */}
      <div className="text-center px-4 py-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full inline-block text-sm mb-6">
          💰 Welcome Bonus ₹100 for New Users!
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          Invest Smart, <span className="text-yellow-400">Earn More</span>
        </h1>
        <p className="text-lg mb-8 px-4">
          Join thousands of smart investors earning guaranteed returns with our AI-powered investment platform
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-8">
          <Button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600"
            onClick={onSignUp}
          >
            Start Investing Now
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white bg-transparent hover:bg-white hover:text-black font-semibold"
            onClick={onLogin}
          >
            Login
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">50,000+</div>
            <div className="text-sm">Active Investors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">₹2.5 Cr+</div>
            <div className="text-sm">Total Payouts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">99.8%</div>
            <div className="text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">18%</div>
            <div className="text-sm">Avg. Returns</div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Hello Public Invest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">💡</span>
            </div>
            <h3 className="font-bold mb-2">Smart Investment Plans</h3>
            <p className="text-sm text-gray-300">5 curated plans with guaranteed returns up to 45%</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">📈</span>
            </div>
            <h3 className="font-bold mb-2">Auto Profit System</h3>
            <p className="text-sm text-gray-300">Earnings automatically added to your wallet</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="font-bold mb-2">Secure Platform</h3>
            <p className="text-sm text-gray-300">Bank-grade security for all transactions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">👥</span>
            </div>
            <h3 className="font-bold mb-2">Referral Rewards</h3>
            <p className="text-sm text-gray-300">Earn ₹150 for every successful referral</p>
          </div>
        </div>
      </div>

      {/* Investment Plans Preview */}
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Investment Plans</h2>
        <p className="text-center text-gray-300 mb-8">Choose from our carefully curated investment options</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-400">₹1,000</div>
            <div className="text-green-400 font-semibold">12% Returns</div>
            <div className="text-gray-300">15 Days</div>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Invest Now</Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-400">₹5,000</div>
            <div className="text-green-400 font-semibold">18% Returns</div>
            <div className="text-gray-300">25 Days</div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">Invest Now</Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-400">₹10,000</div>
            <div className="text-green-400 font-semibold">25% Returns</div>
            <div className="text-gray-300">45 Days</div>
            <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white">Invest Now</Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="mb-6">Join now and get ₹100 welcome bonus + daily rewards!</p>
          <Button 
            className="bg-black text-white hover:bg-gray-800 px-8 py-3"
            onClick={onSignUp}
          >
            Create Account - It's Free!
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">₹</span>
                </div>
                <span className="font-bold">Hello Public</span>
              </div>
              <p className="text-sm text-gray-400">India's most trusted investment platform. Start your investment journey with guaranteed returns.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => onNavigate('dashboard')} className="hover:text-white">Dashboard</button></li>
                <li><button onClick={() => onNavigate('investment')} className="hover:text-white">Investment Plans</button></li>
                <li><button onClick={() => onNavigate('wallet')} className="hover:text-white">Wallet</button></li>
                <li><button onClick={() => onNavigate('calculator')} className="hover:text-white">Calculator</button></li>
                <li><button onClick={() => onNavigate('referral')} className="hover:text-white">Referral</button></li>
                <li><button onClick={() => onNavigate('history')} className="hover:text-white">History</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => onNavigate('privacy')} className="hover:text-white">Privacy Policy</button></li>
                <li><button onClick={() => onNavigate('terms')} className="hover:text-white">Terms & Conditions</button></li>
                <li><button onClick={() => onNavigate('refund')} className="hover:text-white">Refund Policy</button></li>
                <li><button onClick={() => onNavigate('recruitment')} className="hover:text-white">Recruitment</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white">Contact Us</button></li>
                <li><button onClick={() => onNavigate('help')} className="hover:text-white">Help Center</button></li>
                <li><button onClick={() => onNavigate('faq')} className="hover:text-white">FAQ</button></li>
                <li className="text-xs">support@hellopublicinvest.com</li>
                <li className="text-xs">📞 +91 9876543210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
            © 2024 Hello Public Invest. All rights reserved. | Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
