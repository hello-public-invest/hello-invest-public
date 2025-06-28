
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gift, Wallet, TrendingUp, Users, User, Plus } from 'lucide-react';
import InvestmentPlans from './InvestmentPlans';
import MyWallet from './MyWallet';
import ReferralProgram from './ReferralProgram';
import ProfileSettings from './ProfileSettings';

const Dashboard = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userData, setUserData] = useState(user);
  const [showDailyReward, setShowDailyReward] = useState(!user.dailyRewardClaimed);

  useEffect(() => {
    localStorage.setItem('hpiUser', JSON.stringify(userData));
  }, [userData]);

  const claimDailyReward = () => {
    const updatedUser = {
      ...userData,
      wallet: userData.wallet + 1,
      withdrawable: userData.withdrawable + 1,
      dailyRewardClaimed: true
    };
    setUserData(updatedUser);
    setShowDailyReward(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'invest':
        return <InvestmentPlans user={userData} onBack={() => setCurrentView('dashboard')} onUpdateUser={setUserData} />;
      case 'wallet':
        return <MyWallet user={userData} onBack={() => setCurrentView('dashboard')} onUpdateUser={setUserData} />;
      case 'referral':
        return <ReferralProgram user={userData} onBack={() => setCurrentView('dashboard')} />;
      case 'profile':
        return <ProfileSettings user={userData} onBack={() => setCurrentView('dashboard')} onUpdateUser={setUserData} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
            {/* Header */}
            <header className="flex items-center justify-between p-4 bg-purple-800/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">₹</span>
                </div>
                <div>
                  <h1 className="font-bold text-lg">Hello Public Invest</h1>
                  <p className="text-sm text-gray-300">Welcome back, {userData.fullName.split(' ')[0]}!</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white text-white hover:bg-white hover:text-purple-900"
                onClick={onLogout}
              >
                Logout
              </Button>
            </header>

            {/* Daily Reward Banner */}
            {showDailyReward && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 m-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Gift className="w-6 h-6" />
                    <div>
                      <h3 className="font-bold">Daily Reward Available!</h3>
                      <p className="text-sm">Claim your ₹1 daily bonus</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={claimDailyReward}
                  >
                    Claim ₹1
                  </Button>
                </div>
              </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg p-4">
                <Wallet className="w-6 h-6 mb-2" />
                <div className="text-2xl font-bold">₹{userData.wallet.toLocaleString()}</div>
                <div className="text-sm">Wallet Balance</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4">
                <TrendingUp className="w-6 h-6 mb-2" />
                <div className="text-2xl font-bold">₹{userData.totalInvested.toLocaleString()}</div>
                <div className="text-sm">Total Invested</div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg p-4">
                <div className="w-6 h-6 mb-2">💰</div>
                <div className="text-2xl font-bold">₹{userData.totalEarnings.toLocaleString()}</div>
                <div className="text-sm">Total Earnings</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg p-4">
                <div className="w-6 h-6 mb-2">🎁</div>
                <div className="text-2xl font-bold">₹{userData.withdrawable.toLocaleString()}</div>
                <div className="text-sm">Withdrawable</div>
              </div>
            </div>

            {/* Active Investments */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Active Investments</h2>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600"
                  onClick={() => setCurrentView('invest')}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  New Investment
                </Button>
              </div>

              {userData.investments && userData.investments.length > 0 ? (
                <div className="space-y-3">
                  {userData.investments.map((investment) => (
                    <div key={investment.id} className="bg-purple-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{investment.plan}</h3>
                          <p className="text-sm text-gray-300">₹{investment.amount.toLocaleString()} invested</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-semibold">{investment.returns}% Returns</div>
                          <div className="text-sm text-gray-300">{investment.daysLeft} days left</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{investment.duration - investment.daysLeft} / {investment.duration} days</span>
                        </div>
                        <div className="w-full bg-purple-700 rounded-full h-2 mt-1">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" 
                            style={{ width: `${((investment.duration - investment.daysLeft) / investment.duration) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-yellow-400 font-semibold mt-2">
                          Profit: ₹{investment.expectedProfit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <div className="text-4xl mb-4">📈</div>
                  <p>No active investments yet</p>
                  <Button 
                    className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                    onClick={() => setCurrentView('invest')}
                  >
                    Start Investing
                  </Button>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 p-4">
              <Button 
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 h-auto flex flex-col items-center"
                onClick={() => setCurrentView('invest')}
              >
                <TrendingUp className="w-8 h-8 mb-2" />
                <span className="font-semibold">Invest</span>
                <span className="text-sm opacity-80">Start earning now</span>
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 h-auto flex flex-col items-center"
                onClick={() => setCurrentView('wallet')}
              >
                <Wallet className="w-8 h-8 mb-2" />
                <span className="font-semibold">Wallet</span>
                <span className="text-sm opacity-80">Manage funds</span>
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 h-auto flex flex-col items-center"
                onClick={() => setCurrentView('referral')}
              >
                <Users className="w-8 h-8 mb-2" />
                <span className="font-semibold">Referral</span>
                <span className="text-sm opacity-80">Earn ₹100 each</span>
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6 h-auto flex flex-col items-center"
                onClick={() => setCurrentView('profile')}
              >
                <User className="w-8 h-8 mb-2" />
                <span className="font-semibold">Profile</span>
                <span className="text-sm opacity-80">Account settings</span>
              </Button>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 px-4 mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">₹</span>
                    </div>
                    <span className="font-bold">Hello Public</span>
                  </div>
                  <p className="text-xs text-gray-400">India's most trusted investment platform.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Quick Links</h4>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li><a href="#" className="hover:text-white">Dashboard</a></li>
                    <li><a href="#" className="hover:text-white">Investment Plans</a></li>
                    <li><a href="#" className="hover:text-white">Wallet</a></li>
                    <li><a href="#" className="hover:text-white">Calculator</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Legal</h4>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                    <li><a href="#" className="hover:text-white">Recruitment</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white">Help Center</a></li>
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                    <li className="text-xs">support@hellopublicinvest.com</li>
                    <li className="text-xs">📞 +91 9876543210</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-4 pt-3 text-center text-xs text-gray-400">
                © 2024 Hello Public Invest. All rights reserved. | Made in India 🇮🇳
              </div>
            </footer>
          </div>
        );
    }
  };

  return renderView();
};

export default Dashboard;
