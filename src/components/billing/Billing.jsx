import React, { useState } from 'react';
import PricingModal from '../../common/PricingModal';
import { IoChatbubbleEllipses } from "react-icons/io5"; 
import { FaUsers } from "react-icons/fa";

const Billing = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex  ">
      <div className="flex p-8 bg-white text-start">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Plan & Billing</h2>
          <div className="mb-6">
            <p className="font-bold">Pro Plan (50 chat hours)</p>
            <p className="mt-2 flex items-center gap-1"><IoChatbubbleEllipses /> Chat Hours left: <strong>32</strong></p>
            <p className="mt-2 flex items-center gap-1"><FaUsers /> AI Identities left: <strong>3</strong></p>
            <p className="mt-2">Your next billing cycle begins on 09/02/2025.</p>
            <div className="mt-4 flex">
              <button className="bg-[#360374] text-white px-4 py-2 rounded mr-2" onClick={openModal}>Change plan</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Cancel plan</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Billing Information</h3>
            <p><strong>Name:</strong> John Doe</p>
            <p className="mt-2"><strong>Company:</strong> VengoAI Inc.</p>
            <p className="mt-2"><strong>Billing address:</strong> 1234 Elm Street, Some City, CA 12345</p>
            <p className="mt-2"><strong>Email address:</strong> johndoe@vengoai.com</p>
            <div className='mt-4 flex'>
              <button className="bg-[#360374] text-white px-4 py-2 rounded mr-2" >Update billing info</button>
            </div>
          </div>
        </div>
      <PricingModal isOpen={isModalOpen} closeModal={closeModal} />

      </div>
    </div>
  );
};

export default Billing;
