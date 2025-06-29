
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = ({ onLogin, onSwitchToSignUp, onBack }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, create a mock user or retrieve from localStorage
    const savedUser = localStorage.getItem('hpiUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      toast({
        title: "Login Successful!",
        description: `Welcome back, ${user.fullName}!`,
        duration: 2000,
      });
      onLogin(user);
    } else {
      // Create demo user for testing
      const demoUser = {
        id: 1,
        fullName: 'John Doe',
        email: formData.email,
        phone: '+91 9876543210',
        referralCode: 'HPI71UFMQ',
        wallet: 5000,
        totalInvested: 10000,
        totalEarnings: 2500,
        withdrawable: 7500,
        joinDate: '2024-01-15',
        dailyRewardClaimed: false,
        investments: [
          {
            id: 1,
            plan: 'Growth Plan',
            amount: 6000,
            returns: 18,
            duration: 25,
            startDate: '2024-01-15',
            endDate: '2024-02-09',
            status: 'active',
            daysLeft: 12,
            expectedProfit: 900
          },
          {
            id: 2,
            plan: 'Starter Plan',
            amount: 1000,
            returns: 12,
            duration: 15,
            startDate: '2024-01-10',
            endDate: '2024-01-25',
            status: 'active',
            daysLeft: 3,
            expectedProfit: 120
          }
        ]
      };
      localStorage.setItem('hpiUser', JSON.stringify(demoUser));
      toast({
        title: "Login Successful!",
        description: `Welcome, ${demoUser.fullName}!`,
        duration: 2000,
      });
      onLogin(demoUser);
    }
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
          <h2 className="text-white text-2xl mt-6 font-semibold">Welcome Back!</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <label className="text-white text-sm font-medium block mb-3">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="glass-input py-4 text-white font-medium"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="neon-button neon-blue text-white font-semibold py-4 w-full text-lg"
          >
            Login
          </Button>
        </form>

        <div className="text-center mt-8">
          <span className="text-white/70">Don't have an account? </span>
          <button 
            onClick={onSwitchToSignUp}
            className="text-[#FF4E6A] hover:underline font-medium"
          >
            Sign up here
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

export default Login;
