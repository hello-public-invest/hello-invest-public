
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, User, Phone, Mail, Edit } from 'lucide-react';

const ProfileSettings = ({ user, onBack, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone
  });

  const handleUpdateProfile = () => {
    const updatedUser = {
      ...user,
      ...formData
    };
    onUpdateUser(updatedUser);
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <header className="flex items-center justify-between p-4 bg-purple-800/30">
        <div className="flex items-center space-x-3">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-bold text-lg">Profile Settings</h1>
            <p className="text-sm text-gray-300">Manage your account</p>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Profile Header */}
        <div className="bg-purple-800/30 rounded-lg p-6 mb-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
            {user.fullName.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold">{user.fullName}</h2>
          <p className="text-gray-300">{user.email}</p>
          <p className="text-yellow-400 text-sm mt-1">Referral Code: {user.referralCode}</p>
        </div>

        {/* Profile Form */}
        <div className="bg-purple-800/30 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Profile</h3>
            <Button 
              size="sm"
              variant="outline"
              className="border-gray-500 text-gray-300"
              onClick={() => setEditMode(!editMode)}
            >
              <Edit className="w-4 h-4 mr-1" />
              {editMode ? 'Cancel' : 'Edit'}
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm block mb-2 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </label>
              {editMode ? (
                <Input
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="bg-purple-700/50 border-purple-600 text-white"
                />
              ) : (
                <div className="bg-purple-700/50 p-3 rounded border border-purple-600">
                  {user.fullName}
                </div>
              )}
            </div>

            <div>
              <label className="text-sm block mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
              </label>
              {editMode ? (
                <Input
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-purple-700/50 border-purple-600 text-white"
                />
              ) : (
                <div className="bg-purple-700/50 p-3 rounded border border-purple-600">
                  {user.email}
                </div>
              )}
            </div>

            <div>
              <label className="text-sm block mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number
              </label>
              {editMode ? (
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-purple-700/50 border-purple-600 text-white"
                />
              ) : (
                <div className="bg-purple-700/50 p-3 rounded border border-purple-600">
                  {user.phone}
                </div>
              )}
            </div>

            {editMode && (
              <Button 
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                onClick={handleUpdateProfile}
              >
                Update Profile
              </Button>
            )}
          </div>
        </div>

        {/* Account Stats */}
        <div className="bg-purple-800/30 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-lg mb-4">Account Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-purple-700/50 rounded">
              <div className="text-xl font-bold text-green-400">₹{user.totalInvested.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Total Invested</div>
            </div>
            
            <div className="text-center p-3 bg-purple-700/50 rounded">
              <div className="text-xl font-bold text-yellow-400">₹{user.totalEarnings.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Total Earnings</div>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full border-gray-500 text-gray-300">
            Change Password
          </Button>
          
          <Button variant="outline" className="w-full border-gray-500 text-gray-300">
            Download Statement
          </Button>
          
          <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
