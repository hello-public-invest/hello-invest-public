
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <button onClick={onBack} className="text-black bg-white/90 hover:bg-white rounded-lg p-2 mb-4 flex items-center transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back</span>
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-black">₹</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Hello Public</h1>
          <p className="text-yellow-400 font-semibold">Invest</p>
          <h2 className="text-white text-xl mt-4 font-semibold">Welcome Back!</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium block mb-2">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-white/20 border-white/30 text-black placeholder-gray-600 focus:border-yellow-400 focus:bg-white/30 font-medium"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="bg-white/20 border-white/30 text-black placeholder-gray-600 focus:border-yellow-400 focus:bg-white/30 font-medium"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 shadow-lg"
          >
            Login
          </Button>
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-200">Don't have an account? </span>
          <button 
            onClick={onSwitchToSignUp}
            className="text-yellow-400 hover:underline font-medium"
          >
            Sign up here
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

export default Login;
