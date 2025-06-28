
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

const SignUp = ({ onSignUp, onSwitchToLogin, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    referralCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate referral code
    const userReferralCode = 'HPI' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    // Create user with ₹100 signup bonus
    const newUser = {
      ...formData,
      id: Date.now(),
      referralCode: userReferralCode,
      wallet: 100, // ₹100 signup bonus
      totalInvested: 0,
      totalEarnings: 0,
      withdrawable: 100,
      joinDate: new Date().toISOString().split('T')[0],
      dailyRewardClaimed: false,
      investments: []
    };
    
    localStorage.setItem('hpiUser', JSON.stringify(newUser));
    onSignUp(newUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
        <button onClick={onBack} className="text-white mb-4 flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold">₹</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Hello Public</h1>
          <p className="text-yellow-400">Invest</p>
          <h2 className="text-white text-xl mt-4">Join Us Today!</h2>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm mt-2">
            💰 ₹100 Welcome Bonus
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm block mb-2">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="bg-purple-700/50 border-purple-600 text-white placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-2">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-purple-700/50 border-purple-600 text-white placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-2">Phone Number</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-purple-700/50 border-purple-600 text-white placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-2">Password</label>
            <Input
              type="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="bg-purple-700/50 border-purple-600 text-white placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-2">Referral Code (Optional)</label>
            <Input
              type="text"
              placeholder="Enter referral code"
              value={formData.referralCode}
              onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
              className="bg-purple-700/50 border-purple-600 text-white placeholder-gray-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white text-purple-900 hover:bg-gray-100 font-semibold"
          >
            Create Account
          </Button>
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-300">Already have an account? </span>
          <button 
            onClick={onSwitchToLogin}
            className="text-yellow-400 hover:underline"
          >
            Login here
          </button>
        </div>

        <div className="text-center mt-4">
          <button onClick={onBack} className="text-yellow-400 hover:underline text-sm">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
