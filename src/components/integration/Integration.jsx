import React, { useState } from 'react';
import { IoIosCopy } from "react-icons/io";

const Integration = () => {
  const [selectedAI, setSelectedAI] = useState('joeMarkland');

  const handleCopy = () => {
    const code = document.getElementById('widgetCode');
    code.select();
    document.execCommand('copy');
    alert('Chat widget code copied to clipboard!');
  };

  const handleSelectChange = (e) => {
    setSelectedAI(e.target.value);
  };

  return (
    <div className="flex mt-8">
      <div className="flex-1 ">
        <div className="space-y-6 md:w-[60%] bg-white shadow-2xl rounded-lg p-6">
          <div>
            <label htmlFor="aiSelect" className="flex mb-2 text-xl font-medium">Select AI:</label>
            <select
              id="aiSelect"
              className="w-full p-2 border rounded focus:outline-none"
              value={selectedAI}
              onChange={handleSelectChange}
            >
              <option value="joeMarkland">Joe Markland</option>
              <option value="silverMarketing">Silver Marketing</option>
              <option value="jasonSherman">Jason Sherman</option>
              <option value="kristinLaSalle">Kristin LaSalle</option>
            </select>
          </div>
          <button
            id="copyButton"
            className="flex items-center space-x-2 bg-[#360374] text-white px-4 py-2 rounded"
            onClick={handleCopy}
          >
            <IoIosCopy /><span>Copy to Clipboard</span>
          </button>
          <textarea
            id="widgetCode"
            className="w-full p-2 border rounded focus:outline-none"
            rows="6"
            readOnly
            value={`<!-- Chat Widget Code -->
<script src="https://example.com/chat-widget.js"></script>
<div id="chat-widget" data-ai="${selectedAI}"></div>`}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Integration;
