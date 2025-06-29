
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const RefundPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Refund Policy</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Investment Refund Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>At Hello Public Invest, we understand that investment decisions are important. Here's our refund policy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>24-Hour Cooling Period:</strong> You can cancel any investment within 24 hours of making it for a full refund.</li>
                  <li><strong>Investment Plans:</strong> Once an investment plan is active for more than 24 hours, it cannot be cancelled as it's already deployed in our investment strategies.</li>
                  <li><strong>Emergency Situations:</strong> In case of genuine emergencies, we may consider refund requests on a case-by-case basis.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Wallet Refunds</h2>
              <div className="space-y-4 text-gray-700">
                <p>Money added to your wallet can be refunded under the following conditions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Wallet balance that hasn't been invested can be withdrawn at any time</li>
                  <li>Processing time: 3-5 business days</li>
                  <li>Refunds will be processed to the original payment method</li>
                  <li>Transaction fees may apply as per payment gateway charges</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Bonus and Promotional Refunds</h2>
              <div className="space-y-4 text-gray-700">
                <p>Regarding bonus amounts and promotional credits:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Signup bonuses and referral rewards are non-refundable</li>
                  <li>Promotional credits must be used within the specified time period</li>
                  <li>Bonus amounts can only be withdrawn after meeting minimum investment criteria</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. How to Request a Refund</h2>
              <div className="space-y-4 text-gray-700">
                <p>To request a refund, please follow these steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our support team at support@hellopublicinvest.com</li>
                  <li>Provide your account details and reason for refund</li>
                  <li>Our team will review your request within 2 business days</li>
                  <li>If approved, refund will be processed within 5-7 business days</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>For any refund-related queries, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: support@hellopublicinvest.com</li>
                  <li>Phone: +91 9876543210</li>
                  <li>Address: Hello Public Invest, Mumbai, India</li>
                  <li>Working Hours: 9:00 AM - 6:00 PM (Monday to Saturday)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
