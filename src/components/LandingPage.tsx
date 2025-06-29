import React from 'react';
import { Button } from '@/components/ui/button';

const LandingPage = ({ onLogin, onSignUp }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center pink-glow">
            <span className="text-sm font-bold text-black">₹</span>
          </div>
          <span className="font-bold text-lg">Hello Public</span>
          <span className="text-pink-400 text-sm">Invest</span>
        </div>
        <Button 
          variant="outline" 
          className="glow-button border-blue-500 text-black bg-pink-400 hover:bg-pink-500 font-semibold"
          onClick={onSignUp}
        >
          Get Started
        </Button>
      </header>

      {/* Welcome Banner */}
      <div className="text-center px-4 py-8">
        <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-black px-4 py-1 rounded-full inline-block text-sm mb-6 pink-glow">
          💰 Welcome Bonus ₹100 for New Users!
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          Invest Smart, <span className="text-pink-400 pink-glow">Earn More</span>
        </h1>
        <p className="text-lg mb-8 px-4">
          Join thousands of smart investors earning guaranteed returns with our AI-powered investment platform
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-8">
          <Button 
            className="glow-button bg-gradient-to-r from-pink-400 to-pink-600 text-black font-semibold hover:from-pink-500 hover:to-pink-700"
            onClick={onSignUp}
          >
            Start Investing Now
          </Button>
          <Button 
            variant="outline" 
            className="glow-button border-blue-500 text-black bg-white hover:bg-gray-100 font-semibold"
            onClick={onLogin}
          >
            Login
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">50,000+</div>
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
          <div className="bg-black/70 border border-pink-500 rounded-lg p-6 text-center pink-glow">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 pink-glow">
              <span className="text-xl">💡</span>
            </div>
            <h3 className="font-bold mb-2">Smart Investment Plans</h3>
            <p className="text-sm text-gray-300">5 curated plans with guaranteed returns up to 45%</p>
          </div>
          
          <div className="bg-black/70 border border-pink-500 rounded-lg p-6 text-center pink-glow">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 pink-glow">
              <span className="text-xl">📈</span>
            </div>
            <h3 className="font-bold mb-2">Auto Profit System</h3>
            <p className="text-sm text-gray-300">Earnings automatically added to your wallet</p>
          </div>
          
          <div className="bg-black/70 border border-pink-500 rounded-lg p-6 text-center pink-glow">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 pink-glow">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="font-bold mb-2">Secure Platform</h3>
            <p className="text-sm text-gray-300">Bank-grade security for all transactions</p>
          </div>
          
          <div className="bg-black/70 border border-pink-500 rounded-lg p-6 text-center pink-glow">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 pink-glow">
              <span className="text-xl">👥</span>
            </div>
            <h3 className="font-bold mb-2">Referral Rewards</h3>
            <p className="text-sm text-gray-300">Earn ₹100 for every successful referral</p>
          </div>
        </div>
      </div>

      {/* Investment Plans Preview */}
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Investment Plans</h2>
        <p className="text-center text-gray-300 mb-8">Choose from our carefully curated investment options</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-white border border-pink-500 rounded-lg p-6 text-black pink-glow">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">₹1,000</div>
              <div className="text-green-600 font-semibold">12% Returns</div>
              <div className="text-gray-600">15 Days</div>
              <Button className="glow-button w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Invest Now</Button>
            </div>
          </div>
          
          <div className="bg-white border border-pink-500 rounded-lg p-6 text-black pink-glow">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">₹5,000</div>
              <div className="text-green-600 font-semibold">18% Returns</div>
              <div className="text-gray-600">25 Days</div>
              <Button className="glow-button w-full mt-4 bg-green-600 hover:bg-green-700 text-white">Invest Now</Button>
            </div>
          </div>
          
          <div className="bg-white border border-pink-500 rounded-lg p-6 text-black pink-glow">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">₹10,000</div>
              <div className="text-green-600 font-semibold">25% Returns</div>
              <div className="text-gray-600">45 Days</div>
              <Button className="glow-button w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white">Invest Now</Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-black py-12 px-4 text-center pink-glow">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="mb-6">Join now and get ₹100 welcome bonus + daily rewards!</p>
          <Button 
            className="glow-button bg-black text-white hover:bg-gray-800 px-8 py-3"
            onClick={onSignUp}
          >
            Create Account - It's Free!
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 border-t border-pink-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center pink-glow">
                  <span className="text-xs font-bold text-black">₹</span>
                </div>
                <span className="font-bold">Hello Public</span>
              </div>
              <p className="text-sm text-gray-400">India's most trusted investment platform. Start your investment journey with guaranteed returns.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Investment Plans</a></li>
                <li><a href="#" className="hover:text-white">Wallet</a></li>
                <li><a href="#" className="hover:text-white">Calculator</a></li>
                <li><a href="#" className="hover:text-white">Referral</a></li>
                <li><a href="#" className="hover:text-white">History</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white">Recruitment</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li className="text-xs">support@hellopublicinvest.com</li>
                <li className="text-xs">📞 +91 9876543210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-pink-500 mt-8 pt-4 text-center text-sm text-gray-400">
            © 2024 Hello Public Invest. All rights reserved. | Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
