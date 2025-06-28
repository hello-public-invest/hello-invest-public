
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Copy, Share, Gift } from 'lucide-react';

const ReferralProgram = ({ user, onBack }) => {
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyReferralLink = () => {
    const link = `https://hellopublicinvest.com/signup?ref=${user.referralCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Hello Public Invest',
        text: `Join me on Hello Public Invest and start earning guaranteed returns! Use my referral code: ${user.referralCode}`,
        url: `https://hellopublicinvest.com/signup?ref=${user.referralCode}`
      });
    }
  };

  const referralHistory = [
    { id: 1, name: 'John Doe', joinDate: '2024-01-15', earnings: 100, status: 'active' },
    { id: 2, name: 'Jane Smith', joinDate: '2024-01-14', earnings: 100, status: 'active' },
    { id: 3, name: 'Mike Johnson', joinDate: '2024-01-13', earnings: 0, status: 'pending' },
    { id: 4, name: 'Sarah Wilson', joinDate: '2024-01-12', earnings: 100, status: 'active' }
  ];

  const totalReferrals = referralHistory.length;
  const activeReferrals = referralHistory.filter(ref => ref.status === 'active').length;
  const totalEarnings = referralHistory.reduce((sum, ref) => sum + ref.earnings, 0);
  const pendingEarnings = referralHistory.filter(ref => ref.status === 'pending').reduce((sum, ref) => sum + 100, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <header className="flex items-center justify-between p-4 bg-purple-800/30">
        <div className="flex items-center space-x-3">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-bold text-lg">Referral Program</h1>
            <p className="text-sm text-gray-300">Earn ₹100 for every referral</p>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4">
          <Users className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">{totalReferrals}</div>
          <div className="text-sm">Total Referrals</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4">
          <div className="w-6 h-6 mb-2">📈</div>
          <div className="text-2xl font-bold">{activeReferrals}</div>
          <div className="text-sm">Active Referrals</div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg p-4">
          <Gift className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">₹{totalEarnings.toLocaleString()}</div>
          <div className="text-sm">Total Earnings</div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg p-4">
          <div className="w-6 h-6 mb-2">📊</div>
          <div className="text-2xl font-bold">₹{pendingEarnings}</div>
          <div className="text-sm">Pending Earnings</div>
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg p-6 mb-6">
          <div className="text-center">
            <Gift className="w-12 h-12 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">Your Referral Code</h2>
            <p className="mb-4">Share with friends and earn ₹100 for each successful referral!</p>
            
            <div className="bg-black/20 rounded-lg p-4 mb-4">
              <div className="text-3xl font-bold tracking-wider">{user.referralCode}</div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <Button 
                className="bg-black text-white hover:bg-gray-800"
                onClick={copyReferralCode}
              >
                <Copy className="w-4 h-4 mr-1" />
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
              
              <Button 
                className="bg-black text-white hover:bg-gray-800"
                onClick={copyReferralLink}
              >
                <Copy className="w-4 h-4 mr-1" />
                Copy Link
              </Button>
              
              <Button 
                className="bg-black text-white hover:bg-gray-800"
                onClick={shareReferral}
              >
                <Share className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* How Referral Program Works */}
        <div className="bg-purple-800/30 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">How Referral Program Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">1</div>
              <h3 className="font-bold mb-2">Share Your Code</h3>
              <p className="text-sm text-gray-300">Share your unique referral code with friends and family</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">2</div>
              <h3 className="font-bold mb-2">They Sign Up</h3>
              <p className="text-sm text-gray-300">Your friends sign up using your referral code</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">3</div>
              <h3 className="font-bold mb-2">You Earn ₹100</h3>
              <p className="text-sm text-gray-300">Get ₹100 bonus when they make their first investment</p>
            </div>
          </div>
        </div>

        {/* Referral History */}
        <div className="bg-purple-800/30 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Referral History</h2>
          
          {referralHistory.length > 0 ? (
            <div className="space-y-3">
              {referralHistory.map((referral) => (
                <div key={referral.id} className="flex justify-between items-center p-3 bg-purple-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {referral.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{referral.name}</div>
                      <div className="text-xs text-gray-300">Joined on {referral.joinDate}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`font-bold ${referral.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
                      ₹{referral.earnings}
                    </div>
                    <div className={`text-xs capitalize ${referral.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {referral.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-400">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No referrals yet</p>
              <p className="text-sm">Start sharing your code to earn rewards!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
