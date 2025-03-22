import React from 'react';
import { FaCreditCard, FaChevronRight } from 'react-icons/fa'; // Using react-icons for icons
import { FaPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";

const PaymentOptions = () => {
  const paymentMethods = [
    { name: "Credit Card", icon: <FaCreditCard className="h-8 w-8" /> },
    { name: "PayPal", icon:<FaPaypal className="h-8 w-8" />    },
    { name: "Apple Pay", icon: <FaCcApplePay className='h-8 w-8' />},
    { name: "Google Pay", icon: <FaGooglePay className='h-8 w-8' />},
  ];

  return (
    <section className="p-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Payment Options</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          We offer flexible and secure payment methods for your convenience
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {paymentMethods.map((payment, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 border rounded-lg">
              {payment.icon}
              <span className="mt-2 text-sm font-medium">{payment.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-primary border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
            See All Payment Options <FaChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;