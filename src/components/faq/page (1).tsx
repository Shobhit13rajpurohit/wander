import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

// FAQ component
const FaqSection = () => {
  const [open, setOpen] = useState(null);

  // Toggle function for opening/closing FAQ items
  const toggleFAQ = (index) => {
    if (open === index) {
      setOpen(null); // If clicked FAQ is already open, close it
    } else {
      setOpen(index); // Open the clicked FAQ
    }
  };

  // FAQ data
  const faqs = [
    {
      question: 'How do I cancel or modify my booking?',
      answer:
        'You can cancel or modify your booking by logging into your account and navigating to "My Trips." Depending on the booking terms, cancellation fees may apply. For assistance, you can also contact our customer service team available 24/7.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and select cryptocurrencies (Bitcoin, Ethereum, USDT). All transactions are secure and encrypted.',
    },
    {
      question: 'Are there any hidden fees?',
      answer:
        'We pride ourselves on transparency. All mandatory fees are displayed before you complete your booking. However, some destinations may have local taxes or resort fees that are collected directly by the property upon arrival.',
    },
    {
      question: 'Do I need travel insurance?',
      answer:
        'While travel insurance is not mandatory, we highly recommend it to protect your trip against unforeseen circumstances such as cancellations, medical emergencies, or lost luggage. We offer comprehensive travel insurance options during the booking process.',
    },
    {
      question: 'How can I find the best deals?',
      answer:
        'To find the best deals, we recommend booking in advance, being flexible with your travel dates, subscribing to our newsletter for exclusive offers, and checking our "Deals" section regularly. You can also set up price alerts for specific destinations.',
    },
  ];

  return (
    <section className=" pt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Find answers to common questions about our services
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 px-6 hover:bg-gray-100 rounded-lg border-b focus:outline-none"
              >
                <div className='flex justify-between items-center'>
                <h3 className="font-semibold text-xl">{faq.question}</h3>
                <h3><RiArrowDropDownLine /></h3>
                </div>
              </button>
              {open === index && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50 rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20 bg-gray-100 py-16 rounded-lg">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">
      Stay Updated
    </h2>
    <p className="text-muted-foreground mb-6 text-gray-600">
      Subscribe to our newsletter and be the first to know about exclusive deals and travel tips.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      {/* Email Input Field */}
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
      />
      {/* Subscribe Button */}
      <button className="w-full sm:w-auto bg-blue-950 text-white py-4 px-6 rounded-lg mt-2 sm:mt-0 hover:bg-blue-700 focus:outline-none transition duration-300">
        Subscribe
      </button>
    </div>
  </div>
</div>

    </section>
    
  );
};

export default FaqSection;
