
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignUp = ({ onSignUp, onSwitchToLogin, onBack }) => {
  const { toast } = useToast();
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
    
    // Calculate bonus amount
    let bonusAmount = 100; // Default signup bonus
    let bonusMessage = '₹100 Signup Bonus';
    
    // Check if referral code is valid (in real app, you'd validate against database)
    if (formData.referralCode && formData.referralCode.length > 0) {
      bonusAmount = 150; // 100 signup + 50 friend gift
      bonusMessage = '₹100 Signup Bonus + ₹50 Friend Gift = ₹150 Total';
    }
    
    // Create completely fresh user profile
    const newUser = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      referralCode: userReferralCode,
      usedReferralCode: formData.referralCode || null,
      
      // Fresh wallet and financial data
      wallet: bonusAmount,
      totalInvested: 0,
      totalEarnings: 0,
      withdrawable: bonusAmount,
      
      // Fresh account data
      joinDate: new Date().toISOString().split('T')[0],
      dailyRewardClaimed: false,
      lastLoginDate: new Date().toISOString().split('T')[0],
      
      // Empty investment history
      investments: [],
      
      // Empty transaction history
      transactions: [],
      
      // Fresh referral data
      referrals: [],
      referralEarnings: 0,
      
      // Account settings
      notifications: true,
      emailVerified: false,
      phoneVerified: false,
      
      // Profile completion
      profileComplete: false,
      kycStatus: 'pending'
    };
    
    localStorage.setItem('hpiUser', JSON.stringify(newUser));
    
    // Show success toast instead of alert popup
    toast({
      title: "Account Created Successfully!",
      description: `Welcome to Hello Public Invest! ${bonusMessage} has been added to your wallet.`,
      duration: 3000,
    });
    
    // Redirect to login page instead of directly logging in
    setTimeout(() => {
      onSwitchToLogin();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <button onClick={onBack} className="text-white mb-4 flex items-center hover:text-gray-200 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-black">₹</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Hello Public</h1>
          <p className="text-yellow-400 font-semibold">Invest</p>
          <h2 className="text-white text-xl mt-4 font-semibold">Join Us Today!</h2>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold mt-3">
            💰 ₹100 Welcome Bonus + ₹50 Friend Gift*
          </div>
          <div className="text-xs text-gray-200 mt-2">
            *₹50 Friend Gift when you use a referral code
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium block mb-2">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:bg-white/25"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:bg-white/25"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">Phone Number</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:bg-white/25"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">Password</label>
            <Input
              type="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:bg-white/25"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">Referral Code (Optional)</label>
            <Input
              type="text"
              placeholder="Enter referral code for ₹50 bonus"
              value={formData.referralCode}
              onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:bg-white/25"
            />
            {formData.referralCode && (
              <div className="text-green-300 text-sm font-medium mt-2">
                ✓ Great! You'll get ₹150 total (₹100 + ₹50 Friend Gift)
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600 py-3"
          >
            Create Account
          </Button>
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-200">Already have an account? </span>
          <button 
            onClick={onSwitchToLogin}
            className="text-yellow-400 hover:underline font-medium"
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
