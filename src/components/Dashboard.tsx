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
          <div className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
            
            {/* Header */}
            <header className="relative flex items-center justify-between p-6 glass-card-dark mx-4 mt-4 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 neon-gradient rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-white">₹</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-white">Hello Public Invest</h1>
                  <p className="text-white/70">Welcome back, {userData.fullName.split(' ')[0]}!</p>
                </div>
              </div>
              <Button 
                className="back-button px-6 py-2 text-white"
                onClick={onLogout}
              >
                Logout
              </Button>
            </header>

            {/* Daily Reward Banner */}
            {showDailyReward && (
              <div className="mx-4 mt-4 glass-card neon-gradient p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Gift className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Daily Reward Available!</h3>
                      <p className="text-white/90">Claim your ₹1 daily bonus</p>
                    </div>
                  </div>
                  <Button 
                    className="neon-button bg-black/20 backdrop-blur-lg text-white hover:bg-black/30 px-6 py-2"
                    onClick={claimDailyReward}
                  >
                    Claim ₹1
                  </Button>
                </div>
              </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 p-4 mt-4">
              <div className="glass-card-dark p-6 rounded-2xl">
                <div className="flex items-center mb-3">
                  <Wallet className="w-6 h-6 mr-3 text-[#FF4E6A]" />
                  <span className="text-white/70 text-sm">Wallet Balance</span>
                </div>
                <div className="text-3xl font-bold text-[#FF4E6A]">₹{userData.wallet.toLocaleString()}</div>
              </div>
              
              <div className="glass-card-dark p-6 rounded-2xl">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 mr-3 text-[#4EB8FF]" />
                  <span className="text-white/70 text-sm">Total Invested</span>
                </div>
                <div className="text-3xl font-bold text-[#4EB8FF]">₹{userData.totalInvested.toLocaleString()}</div>
              </div>
              
              <div className="glass-card-dark p-6 rounded-2xl">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 mr-3 text-2xl">💰</div>
                  <span className="text-white/70 text-sm">Total Earnings</span>
                </div>
                <div className="text-3xl font-bold text-white">₹{userData.totalEarnings.toLocaleString()}</div>
              </div>
              
              <div className="glass-card-dark p-6 rounded-2xl">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 mr-3 text-2xl">🎁</div>
                  <span className="text-white/70 text-sm">Withdrawable</span>
                </div>
                <div className="text-3xl font-bold text-[#A94EFF]">₹{userData.withdrawable.toLocaleString()}</div>
              </div>
            </div>

            {/* Active Investments */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Active Investments</h2>
                <Button 
                  className="neon-button neon-gradient text-white px-6 py-2"
                  onClick={() => setCurrentView('invest')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Investment
                </Button>
              </div>

              {userData.investments && userData.investments.length > 0 ? (
                <div className="space-y-4">
                  {userData.investments.map((investment) => (
                    <div key={investment.id} className="glass-card-dark p-6 rounded-2xl">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-white text-lg">{investment.plan}</h3>
                          <p className="text-white/70">₹{investment.amount.toLocaleString()} invested</p>
                        </div>
                        <div className="text-right">
                          <div className="text-[#4EB8FF] font-semibold text-lg">{investment.returns}% Returns</div>
                          <div className="text-white/70">{investment.daysLeft} days left</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white/70">Progress</span>
                          <span className="text-white">{investment.duration - investment.daysLeft} / {investment.duration} days</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-3">
                          <div 
                            className="neon-gradient h-3 rounded-full transition-all duration-300" 
                            style={{ width: `${((investment.duration - investment.daysLeft) / investment.duration) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-[#FF4E6A] font-semibold mt-3 text-lg">
                          Profit: ₹{investment.expectedProfit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card-dark p-12 rounded-2xl text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-white/70 text-lg mb-6">No active investments yet</p>
                  <Button 
                    className="neon-button neon-gradient text-white px-8 py-3"
                    onClick={() => setCurrentView('invest')}
                  >
                    Start Investing
                  </Button>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 p-4 mt-6">
              <Button 
                className="glass-card-dark neon-blue text-white p-8 h-auto flex flex-col items-center rounded-2xl"
                onClick={() => setCurrentView('invest')}
              >
                <TrendingUp className="w-10 h-10 mb-3" />
                <span className="font-semibold text-lg">Invest</span>
                <span className="text-sm opacity-80">Start earning now</span>
              </Button>
              
              <Button 
                className="glass-card-dark neon-red text-white p-8 h-auto flex flex-col items-center rounded-2xl"
                onClick={() => setCurrentView('wallet')}
              >
                <Wallet className="w-10 h-10 mb-3" />
                <span className="font-semibold text-lg">Wallet</span>
                <span className="text-sm opacity-80">Manage funds</span>
              </Button>
              
              <Button 
                className="glass-card-dark neon-purple text-white p-8 h-auto flex flex-col items-center rounded-2xl"
                onClick={() => setCurrentView('referral')}
              >
                <Users className="w-10 h-10 mb-3" />
                <span className="font-semibold text-lg">Referral</span>
                <span className="text-sm opacity-80">Earn ₹100 each</span>
              </Button>
              
              <Button 
                className="glass-card-dark bg-gradient-to-br from-blue-600/20 to-indigo-600/20 text-white p-8 h-auto flex flex-col items-center rounded-2xl"
                onClick={() => setCurrentView('profile')}
              >
                <User className="w-10 h-10 mb-3" />
                <span className="font-semibold text-lg">Profile</span>
                <span className="text-sm opacity-80">Account settings</span>
              </Button>
            </div>

            {/* Footer */}
            <footer className="glass-card-dark mx-4 my-6 p-8 rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-6 h-6 neon-gradient rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">₹</span>
                    </div>
                    <span className="font-bold text-white">Hello Public</span>
                  </div>
                  <p className="text-white/60 text-xs">India's most trusted investment platform.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Quick Links</h4>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li><a href="#" className="hover:text-white">Dashboard</a></li>
                    <li><a href="#" className="hover:text-white">Investment Plans</a></li>
                    <li><a href="#" className="hover:text-white">Wallet</a></li>
                    <li><a href="#" className="hover:text-white">Calculator</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Legal</h4>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                    <li><a href="#" className="hover:text-white">Recruitment</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white">Help Center</a></li>
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                    <li className="text-xs">support@hellopublicinvest.com</li>
                    <li className="text-xs">📞 +91 9876543210</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/60">
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
