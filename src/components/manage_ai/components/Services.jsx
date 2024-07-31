import React from 'react';
import { TiMicrophone } from "react-icons/ti";

const Services = () => {
  return (
    <div className="mt-10 pb-6  bg-white poppins shadow-2xl rounded-lg">
      <div className="max-w-4xl mx-auto ">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold pt-3">7. Your Business Services</h2>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="servicesProvided" className="flex font-medium text-gray-700 ">
              What services or products does your business provide?
            </label>
            <textarea
              id="servicesProvided"
              name="servicesProvided"
              rows="4"
              placeholder="Describe the services or products your business offers."
              className="w-full p-2 border rounded-md"
            ></textarea>
            <div className="flex items-center justify-end text-blue-500">
              <TiMicrophone /> Speak your answer
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="competitorsDifference" className="flex font-medium text-gray-700">
              How are you different from your competitors?
            </label>
            <textarea
              id="competitorsDifference"
              name="competitorsDifference"
              rows="4"
              placeholder="Explain what sets your business apart from competitors."
              className="w-full p-2 border rounded-md"
            ></textarea>
            <div className="flex items-center justify-end text-blue-500">
              <TiMicrophone /> Speak your answer
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="profitableItems" className="flex font-medium text-gray-700">
              What are your most profitable line items?
            </label>
            <textarea
              id="profitableItems"
              name="profitableItems"
              rows="4"
              placeholder="List the most profitable products or services your business offers."
              className="w-full p-2 border rounded-md"
            ></textarea>
            <div className="flex items-center justify-end text-blue-500">
              <TiMicrophone /> Speak your answer
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="bestSalesLines" className="flex font-medium text-gray-700">
              What are your 5 best sales lines to close a deal?
            </label>
            <textarea
              id="bestSalesLines"
              name="bestSalesLines"
              rows="4"
              placeholder="Share your top sales lines that help close deals."
              className="w-full p-2 border rounded-md"
            ></textarea>
            <div className="flex items-center justify-end text-blue-500">
              <TiMicrophone /> Speak your answer
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
            <button className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={()=>navigate("/dashboard")}>
              Save Changes
            </button>
          </div>
      </div>
    </div>
  );
};

export default Services;
