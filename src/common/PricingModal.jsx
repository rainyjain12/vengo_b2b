import React from 'react';

const PricingModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center bg-white bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <span className="cursor-pointer text-gray-600 float-right" onClick={closeModal}>&times;</span>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="border p-4 rounded-lg shadow">
                <div className="font-bold text-xl mb-2">{plan.header}</div>
                <h3 className="text-lg mb-2">{plan.description}</h3>
                {plan.features.map((feature, i) => (
                  <p key={i} className="mb-1">{feature}</p>
                ))}
                <div className="font-bold text-2xl mt-4">{plan.price}</div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Select</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const pricingPlans = [
  {
    header: "Trial",
    description: "Free for 14 days",
    features: ["5 chat hours", "Access to 1 AI identity", "Basic email support", "Standard AI conversation style", "No customization options", "For personal use only"],
    price: "Free",
  },
  {
    header: "Starter",
    description: "Great for private individuals",
    features: ["10 chat hours", "Access to 2 AI identities", "Personal email support", "Enhanced AI conversation style", "Limited customization options", "Personal use license"],
    price: "$79/mo",
  },
  {
    header: "Pro",
    description: "Great for small businesses",
    features: ["50 chat hours", "Access to 5 AI identities", "Priority email support", "Premium AI prompts", "Enhanced customization options", "Custom voice chat", "Photo messaging", "Custom branding", "Remove Vengo Watermark", "Personalized AI identity training", "Commercial use license"],
    price: "$349/mo",
  },
  {
    header: "Advanced",
    description: "Great for growing businesses",
    features: ["200 chat hours", "Access to 10 AI identities", "Real-time video avatar", "Charge your customers for usage", "Allow customers to register and login", "Full customization options", "Dashboard analytics", "Includes all features from Pro tier"],
    price: "$1049/mo",
  },
  {
    header: "Enterprise",
    description: "Great for private individuals",
    features: ["Unlimited chat hours", "Unlimited access to AI identities", "Dedicated account manager", "Custom AI identity prompts and training", "Comprehensive analytics", "Dedicated support and custom solutions", "Includes all features from Advanced tier"],
    price: "Let's Talk",
  },
];

export default PricingModal;
