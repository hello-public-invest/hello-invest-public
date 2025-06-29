
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Calculator } from 'lucide-react';

const InvestmentPlans = ({ user, onBack, onUpdateUser }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [investAmount, setInvestAmount] = useState('');

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for beginners',
      minAmount: 100,
      maxAmount: 500,
      returns: 10,
      days: 10,
      color: 'neon-red',
      icon: '📊'
    },
    {
      id: 2,
      name: 'Basic',
      description: 'Balanced growth option',
      minAmount: 501,
      maxAmount: 1000,
      returns: 18,
      days: 25,
      color: 'neon-blue',
      icon: '📈',
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      description: 'High returns',
      minAmount: 1001,
      maxAmount: 3000,
      returns: 27,
      days: 14,
      color: 'neon-purple',
      icon: '📊'
    },
    {
      id: 4,
      name: 'Elite',
      description: 'Maximum returns',
      minAmount: 3001,
      maxAmount: 5000,
      returns: 35,
      days: 60,
      color: 'neon-gradient',
      icon: '📊'
    },
    {
      id: 5,
      name: 'VIP',
      description: 'Ultimate investment tier',
      minAmount: 5001,
      maxAmount: 999999,
      returns: 45,
      days: 30,
      color: 'neon-red',
      icon: '📊'
    }
  ];

  const calculateProfit = (amount, returns) => {
    return Math.floor((amount * returns) / 100);
  };

  const handleInvest = (plan) => {
    const amount = parseInt(investAmount);
    if (!amount || amount < plan.minAmount || amount > plan.maxAmount) {
      alert(`Please enter amount between ₹${plan.minAmount} - ₹${plan.maxAmount}`);
      return;
    }

    if (amount > user.wallet) {
      alert('Insufficient wallet balance!');
      return;
    }

    const profit = calculateProfit(amount, plan.returns);
    const newInvestment = {
      id: Date.now(),
      plan: plan.name + ' Plan',
      amount,
      returns: plan.returns,
      duration: plan.days,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'active',
      daysLeft: plan.days,
      expectedProfit: profit
    };

    const updatedUser = {
      ...user,
      wallet: user.wallet - amount,
      totalInvested: user.totalInvested + amount,
      investments: [...(user.investments || []), newInvestment]
    };

    onUpdateUser(updatedUser);
    alert(`Successfully invested ₹${amount} in ${plan.name} Plan!`);
    setSelectedPlan(null);
    setInvestAmount('');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      <header className="relative flex items-center justify-between p-6 glass-card-dark mx-4 mt-4 rounded-2xl border border-white/10">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="back-button p-3">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="font-bold text-xl text-white">Investment Plans</h1>
            <p className="text-white/70">Choose your investment strategy</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-white/70">Available Balance</div>
          <div className="text-xl font-bold text-[#FF4E6A]">₹{user.wallet.toLocaleString()}</div>
        </div>
      </header>

      <div className="p-4 space-y-6 mt-4">
        {plans.map((plan) => (
          <div key={plan.id} className="glass-card-dark p-6 rounded-2xl relative border border-white/10">
            {plan.popular && (
              <div className="absolute -top-3 left-6 neon-gradient px-4 py-2 rounded-full text-white font-bold text-sm">
                Most Popular
              </div>
            )}
            
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">{plan.name}</h3>
                  <p className="text-white/70">{plan.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#4EB8FF]">{plan.returns}%</div>
                <div className="text-white/70">Returns</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-[#A94EFF]">{plan.days}</div>
                <div className="text-sm text-white/70">Days</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-white">Investment Range</div>
                <div className="text-xs text-white/70">₹{plan.minAmount.toLocaleString()} - ₹{plan.maxAmount.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-white">Min: ₹{plan.minAmount}</div>
                <div className="text-xs text-white/70">Minimum Amount</div>
              </div>
            </div>

            {selectedPlan === plan.id ? (
              <div className="space-y-4">
                <div>
                  <label className="text-white text-sm block mb-3">Investment Amount</label>
                  <Input
                    type="number"
                    placeholder={`Enter amount (₹${plan.minAmount} - ₹${plan.maxAmount})`}
                    value={investAmount}
                    onChange={(e) => setInvestAmount(e.target.value)}
                    min={plan.minAmount}
                    max={plan.maxAmount}
                    className="glass-input py-4 text-white"
                  />
                </div>

                {investAmount && (
                  <div className="glass-card p-4 rounded-xl border border-white/20">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">Investment:</span>
                      <span className="text-white">₹{Number(investAmount || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">Expected Profit:</span>
                      <span className="text-[#4EB8FF]">₹{Number(calculateProfit(Number(investAmount || 0), plan.returns)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-white">Total Return:</span>
                      <span className="text-[#FF4E6A]">₹{Number(Number(investAmount || 0) + Number(calculateProfit(Number(investAmount || 0), plan.returns))).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button 
                    className={`neon-button ${plan.color} text-white flex-1 py-3`}
                    onClick={() => handleInvest(plan)}
                  >
                    Invest Now
                  </Button>
                  <Button 
                    className="back-button px-6 py-3 text-white"
                    onClick={() => setSelectedPlan(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Button 
                  className={`neon-button ${plan.color} text-white flex-1 py-3`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Invest Now
                </Button>
                <Button 
                  className="back-button px-6 py-3 text-white"
                >
                  <Calculator className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Why Choose Our Investment Plans */}
      <div className="p-4 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Why Choose Our Investment Plans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card-dark p-6 rounded-2xl text-center">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="font-bold mb-3 text-white text-lg">100% Secure</h3>
            <p className="text-white/70">Your investments are protected with bank-grade security</p>
          </div>
          
          <div className="glass-card-dark p-6 rounded-2xl text-center">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="font-bold mb-3 text-white text-lg">Guaranteed Returns</h3>
            <p className="text-white/70">Fixed returns with no hidden charges or fees</p>
          </div>
          
          <div className="glass-card-dark p-6 rounded-2xl text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold mb-3 text-white text-lg">Auto Payout</h3>
            <p className="text-white/70">Profits automatically added to your wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;
