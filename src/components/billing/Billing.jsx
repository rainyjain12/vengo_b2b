import React, { useState } from 'react';
import PricingModal from '../../common/PricingModal';
import { IoChatbubbleEllipses } from "react-icons/io5"; 
import { FaUsers } from "react-icons/fa";

const Billing = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex justify-start mt-8">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pro Plan (50 Chat Hours)</h2>
          <div className="mb-4">
            <p className="flex items-center gap-2 text-lg">
              <IoChatbubbleEllipses className="text-purple-600" /> 
              Chat Hours left: <strong>32</strong>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaUsers className="text-blue-600" /> 
              AI Identities left: <strong>3</strong>
            </p>
            <p className="text-lg">Your next billing cycle begins on 09/02/2025.</p>
          </div>
          <div className="flex space-x-4">
            <button 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              onClick={openModal}
            >
              Change Plan
            </button>
            <button 
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Cancel Plan
            </button>
          </div>
        </div>
        <div>
          <hr className="my-6"/>
          <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
          <p className="text-lg"><strong>Name:</strong> John Doe</p>
          <p className="text-lg mt-2"><strong>Company:</strong> VengoAI Inc.</p>
          <p className="text-lg mt-2"><strong>Billing Address:</strong> 1234 Elm Street, Some City, CA 12345</p>
          <p className="text-lg mt-2"><strong>Email Address:</strong> johndoe@vengoai.com</p>
          <div className='mt-4'>
            <button 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Update Billing Info
            </button>
          </div>
        </div>
      </div>
      <PricingModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Billing;
