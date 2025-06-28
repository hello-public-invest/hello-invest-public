
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Plus, Minus, CreditCard, Smartphone, Wallet } from 'lucide-react';

const MyWallet = ({ user, onBack, onUpdateUser }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleDeposit = () => {
    const amount = parseInt(depositAmount);
    if (!amount || amount < 1) {
      alert('Please enter a valid amount');
      return;
    }

    // Simulate payment process
    const updatedUser = {
      ...user,
      wallet: user.wallet + amount,
      withdrawable: user.withdrawable + amount
    };
    
    onUpdateUser(updatedUser);
    alert(`Successfully deposited ₹${amount}!`);
    setDepositAmount('');
  };

  const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount);
    if (!amount || amount < 100) {
      alert('Minimum withdrawal amount is ₹100');
      return;
    }
    
    if (amount > user.withdrawable) {
      alert('Insufficient withdrawable balance!');
      return;
    }

    const updatedUser = {
      ...user,
      withdrawable: user.withdrawable - amount
    };
    
    onUpdateUser(updatedUser);
    alert(`Withdrawal request of ₹${amount} submitted successfully!`);
    setWithdrawAmount('');
  };

  const transactions = [
    { id: 1, type: 'deposit', amount: 500, date: '15 Jan 2024, 10:30 AM', status: 'completed' },
    { id: 2, type: 'withdrawal', amount: 200, date: '14 Jan 2024, 06:45 PM', status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <header className="flex items-center justify-between p-4 bg-purple-800/30">
        <div className="flex items-center space-x-3">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-bold text-lg">My Wallet</h1>
            <p className="text-sm text-gray-300">Manage your funds</p>
          </div>
        </div>
      </header>

      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg p-4">
          <Wallet className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">₹{user.wallet.toLocaleString()}</div>
          <div className="text-sm">Wallet Balance</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4">
          <Plus className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">₹{user.totalEarnings.toLocaleString()}</div>
          <div className="text-sm">Total Earnings</div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4">
          <Minus className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">₹{user.withdrawable.toLocaleString()}</div>
          <div className="text-sm">Withdrawable</div>
        </div>
      </div>

      {/* Deposit Section */}
      <div className="p-4">
        <div className="bg-purple-800/30 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Deposit Funds</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm block mb-2">Amount to Deposit</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="bg-purple-700/50 border-purple-600 text-white"
              />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold"
              onClick={handleDeposit}
            >
              Deposit
            </Button>
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="bg-purple-800/30 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Withdraw Funds</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm block mb-2">Amount to Withdraw</label>
              <Input
                type="number"
                placeholder="Enter amount (Min: ₹100)"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                min="100"
                className="bg-purple-700/50 border-purple-600 text-white"
              />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold"
              onClick={handleWithdraw}
            >
              Withdraw
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-purple-800/30 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-700/50 rounded-lg">
              <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-sm font-semibold">Credit Card</div>
            </div>
            
            <div className="text-center p-4 bg-purple-700/50 rounded-lg">
              <div className="w-8 h-8 mx-auto mb-2 text-2xl">💳</div>
              <div className="text-sm font-semibold">UPI / QR</div>
            </div>
            
            <div className="text-center p-4 bg-purple-700/50 rounded-lg">
              <Wallet className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <div className="text-sm font-semibold">Wallet</div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-purple-800/30 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>
          
          {transactions.length > 0 ? (
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center p-3 bg-purple-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'deposit' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}
                    </div>
                    <div>
                      <div className="font-semibold capitalize">{transaction.type}</div>
                      <div className="text-xs text-gray-300">{transaction.date}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`font-bold ${
                      transaction.type === 'deposit' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}₹{transaction.amount}
                    </div>
                    <div className="text-xs text-green-400 capitalize">{transaction.status}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-400">
              <div className="text-3xl mb-2">💳</div>
              <p>No transactions yet</p>
            </div>
          )}
          
          <Button variant="outline" className="w-full mt-4 border-gray-500 text-gray-300">
            View Full History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
