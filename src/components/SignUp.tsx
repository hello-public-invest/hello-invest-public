
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
    let bonusMessage = 'Signup Bonus ₹100 successfully added';
    
    // Check if referral code is valid (in real app, you'd validate against database)
    if (formData.referralCode && formData.referralCode.length > 0) {
      bonusAmount = 150; // 100 signup + 50 friend gift
      bonusMessage = 'Bonus and Gift successfully added - ₹150 total (₹100 Signup + ₹50 Friend Gift)';
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
    
    // Show simple toast message instead of popup
    toast({
      title: "Account Created Successfully!",
      description: bonusMessage,
      duration: 3000,
    });
    
    // Redirect to login page
    setTimeout(() => {
      onSwitchToLogin();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      <div className="glass-card p-10 w-full max-w-md relative z-10">
        <button onClick={onBack} className="back-button p-3 mb-6 flex items-center transition-all duration-300">
          <ArrowLeft className="w-5 h-5 mr-2 text-white" />
          <span className="font-medium text-white">Back</span>
        </button>
        
        <div className="text-center mb-10">
          <div className="w-20 h-20 neon-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-white">₹</span>
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Hello Public</h1>
          <p className="text-[#FF4E6A] font-semibold text-lg">Invest</p>
          <h2 className="text-white text-2xl mt-6 font-semibold">Join Us Today!</h2>
          <div className="glass-card neon-gradient p-4 rounded-2xl text-white font-semibold mt-4">
            💰 ₹100 Welcome Bonus + ₹50 Friend Gift*
          </div>
          <div className="text-xs text-white/60 mt-3">
            *₹50 Friend Gift when you use a referral code
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-white text-sm font-medium block mb-3">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="glass-input py-4 text-white font-medium"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-3">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="glass-input py-4 text-white font-medium"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-3">Phone Number</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="glass-input py-4 text-white font-medium"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-3">Password</label>
            <Input
              type="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="glass-input py-4 text-white font-medium"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-3">Referral Code (Optional)</label>
            <Input
              type="text"
              placeholder="Enter referral code for ₹50 bonus"
              value={formData.referralCode}
              onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
              className="glass-input py-4 text-white font-medium"
            />
            {formData.referralCode && (
              <div className="text-[#4EB8FF] text-sm font-medium mt-3">
                ✓ Great! You'll get ₹150 total (₹100 + ₹50 Friend Gift)
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="neon-button neon-gradient text-white font-semibold py-4 w-full text-lg"
          >
            Create Account
          </Button>
        </form>

        <div className="text-center mt-8">
          <span className="text-white/70">Already have an account? </span>
          <button 
            onClick={onSwitchToLogin}
            className="text-[#FF4E6A] hover:underline font-medium"
          >
            Login here
          </button>
        </div>

        <div className="text-center mt-6">
          <button onClick={onBack} className="text-[#4EB8FF] hover:underline text-sm">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
