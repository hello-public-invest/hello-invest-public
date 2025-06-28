
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Calculator } from 'lucide-react';

const InvestmentPlans = ({ user, onBack, onUpdateUser }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [investAmount, setInvestAmount] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for beginners',
      minAmount: 100,
      maxAmount: 500,
      returns: 10,
      days: 10,
      color: 'from-blue-400 to-blue-600',
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
      color: 'from-green-400 to-green-600',
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
      color: 'from-purple-400 to-purple-600',
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
      color: 'from-orange-400 to-orange-600',
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
      color: 'from-red-400 to-red-600',
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <header className="flex items-center justify-between p-4 bg-purple-800/30">
        <div className="flex items-center space-x-3">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-bold text-lg">Investment Plans</h1>
            <p className="text-sm text-gray-300">Choose your investment strategy</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-300">Available Balance</div>
          <div className="text-lg font-bold text-yellow-400">₹{user.wallet.toLocaleString()}</div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-purple-800/30 rounded-lg p-4 relative">
            {plan.popular && (
              <div className="absolute -top-2 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center text-xl`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <p className="text-sm text-gray-300">{plan.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{plan.returns}%</div>
                <div className="text-sm text-gray-300">Returns</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">{plan.days}</div>
                <div className="text-xs text-gray-300">Days</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold">Investment Range</div>
                <div className="text-xs text-gray-300">₹{plan.minAmount.toLocaleString()} - ₹{plan.maxAmount.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold">Min: ₹{plan.minAmount}</div>
                <div className="text-xs text-gray-300">Minimum Amount</div>
              </div>
            </div>

            {selectedPlan === plan.id ? (
              <div className="space-y-3">
                <div>
                  <label className="text-sm block mb-2">Investment Amount</label>
                  <Input
                    type="number"
                    placeholder={`Enter amount (₹${plan.minAmount} - ₹${plan.maxAmount})`}
                    value={investAmount}
                    onChange={(e) => setInvestAmount(e.target.value)}
                    min={plan.minAmount}
                    max={plan.maxAmount}
                    className="bg-purple-700/50 border-purple-600 text-white"
                  />
                </div>

                {investAmount && (
                  <div className="bg-purple-700/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span>Investment:</span>
                      <span>₹{parseInt(investAmount || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Expected Profit:</span>
                      <span className="text-green-400">₹{calculateProfit(parseInt(investAmount || 0), plan.returns).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold">
                      <span>Total Return:</span>
                      <span className="text-yellow-400">₹{(parseInt(investAmount || 0) + calculateProfit(parseInt(investAmount || 0), plan.returns)).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                    onClick={() => handleInvest(plan)}
                  >
                    Invest Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-500 text-gray-300"
                    onClick={() => setSelectedPlan(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button 
                  className={`flex-1 bg-gradient-to-r ${plan.color} hover:opacity-90`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Invest Now
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-500 text-gray-300"
                  onClick={() => setShowCalculator(!showCalculator)}
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
        <h2 className="text-xl font-bold mb-4 text-center">Why Choose Our Investment Plans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-bold mb-2">100% Secure</h3>
            <p className="text-sm text-gray-300">Your investments are protected with bank-grade security</p>
          </div>
          
          <div className="bg-purple-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-bold mb-2">Guaranteed Returns</h3>
            <p className="text-sm text-gray-300">Fixed returns with no hidden charges or fees</p>
          </div>
          
          <div className="bg-purple-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold mb-2">Auto Payout</h3>
            <p className="text-sm text-gray-300">Profits automatically added to your wallet</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button className="bg-gradient-to-r from-blue-400 to-purple-500">
            Calculate Returns
          </Button>
          <Button className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
            View Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;
