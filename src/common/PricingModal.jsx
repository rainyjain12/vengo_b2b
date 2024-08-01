import React, { useRef, useEffect } from 'react';

const PricingModal = ({ isOpen, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSelect = () => {
    // You can add logic here if you want to handle selection
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full max-h-screen mt-40 overflow-y-auto relative"
      >
        <span
          className="absolute top-4 right-4 cursor-pointer text-gray-600 text-2xl"
          onClick={closeModal}
        >
          &times;
        </span>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
          <p className="text-lg text-gray-600">Select the plan that fits your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="font-bold text-2xl mb-2">{plan.header}</div>
              <p className="text-lg mb-4">{plan.description}</p>
              <ul className="mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="font-bold text-3xl mb-4">{plan.price}</div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={handleSelect}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const pricingPlans = [
  {
    header: "Trial",
    description: "Free for 14 days",
    features: [
      "5 chat hours",
      "Access to 1 AI identity",
      "Basic email support",
      "Standard AI conversation style",
      "No customization options",
      "For personal use only",
    ],
    price: "Free",
  },
  {
    header: "Starter",
    description: "Great for private individuals",
    features: [
      "10 chat hours",
      "Access to 2 AI identities",
      "Personal email support",
      "Enhanced AI conversation style",
      "Limited customization options",
      "Personal use license",
    ],
    price: "$79/mo",
  },
  {
    header: "Pro",
    description: "Great for small businesses",
    features: [
      "50 chat hours",
      "Access to 5 AI identities",
      "Priority email support",
      "Premium AI prompts",
      "Enhanced customization options",
      "Custom voice chat",
      "Photo messaging",
      "Custom branding",
      "Remove Vengo Watermark",
      "Personalized AI identity training",
      "Commercial use license",
    ],
    price: "$349/mo",
  },
  {
    header: "Advanced",
    description: "Great for growing businesses",
    features: [
      "200 chat hours",
      "Access to 10 AI identities",
      "Real-time video avatar",
      "Charge your customers for usage",
      "Allow customers to register and login",
      "Full customization options",
      "Dashboard analytics",
      "Includes all features from Pro tier",
    ],
    price: "$1049/mo",
  },
  {
    header: "Enterprise",
    description: "Great for large organizations",
    features: [
      "Unlimited chat hours",
      "Unlimited access to AI identities",
      "Dedicated account manager",
      "Custom AI identity prompts and training",
      "Comprehensive analytics",
      "Dedicated support and custom solutions",
      "Includes all features from Advanced tier",
    ],
    price: "Let's Talk",
  },
];

export default PricingModal;
