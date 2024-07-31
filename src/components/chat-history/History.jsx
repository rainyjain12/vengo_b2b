import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Import Flatpickr CSS

const History = () => {
  const conversations = {
    user1: [
      { type: 'message', text: 'Hello! How can I help you today?', time: '14:32' },
      { type: 'response', text: 'Hi, I need information about insurance quotes for my business.', time: '14:33' },
      { type: 'message', text: 'Sure, we offer various insurance plans for businesses. Can you provide more details about your business?', time: '14:34' },
      { type: 'response', text: 'We are a small tech startup with 20 employees.', time: '14:35' },
      { type: 'message', text: 'Great! We have specific plans tailored for tech startups. Would you like to know about health insurance or liability insurance?', time: '14:36' },
      { type: 'response', text: 'I\'d like to know about both.', time: '14:37' },
    ],
    user2: [
      { type: 'message', text: 'Hello! How can I assist you with your marketing needs?', time: '10:45' },
      { type: 'response', text: 'Hi, I need help with improving our social media presence.', time: '10:46' },
      { type: 'message', text: 'We can help with that! We offer social media management and content creation services. What platforms are you currently using?', time: '10:47' },
      { type: 'response', text: 'We are using Facebook, Twitter, and Instagram.', time: '10:48' },
      { type: 'message', text: 'Excellent! We have packages for all these platforms. Would you like to see our pricing plans?', time: '10:49' },
      { type: 'response', text: 'Yes, please.', time: '10:50' },
    ],
    user3: [
      { type: 'message', text: 'Hello! How can I help you with building your website?', time: '09:15' },
      { type: 'response', text: 'Hi, I\'m looking to create an e-commerce site for my products.', time: '09:16' },
      { type: 'message', text: 'We have various options for e-commerce sites. Do you have a specific platform in mind, like Shopify or WooCommerce?', time: '09:17' },
      { type: 'response', text: 'I was thinking about using Shopify.', time: '09:18' },
      { type: 'message', text: 'Great choice! We can help set up your Shopify store and customize it according to your needs. Would you like to know more about our services?', time: '09:19' },
      { type: 'response', text: 'Yes, that would be helpful.', time: '09:20' },
    ],
  };

  const [activeTab, setActiveTab] = useState('user1');
  const [chatContent, setChatContent] = useState(conversations['user1']);

  useEffect(() => {
    setChatContent(conversations[activeTab]);
  }, [activeTab]);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="sidebar bg-gray-200 w-full lg:w-64 p-4 flex flex-col">
       
        <div className="filter-container mb-4 flex flex-wrap gap-3 text-[15px] ">
          <div className="ai-dropdown flex flex-col w-full  items-start ">
            <label htmlFor="aiSelect" className="font-medium" style={{color:'#222222'}}>Select AI:</label>
            <select id="aiSelect" className="p-2 border border-gray-300 rounded-[8px] w-full focus:outline-none" style={{color:'#7C7C7C'}}>
              <option value="joeMarkland">Joe Markland</option>
              <option value="silverMarketing">Silver Marketing</option>
              <option value="jasonSherman">Jason Sherman</option>
              <option value="kristinLaSalle">Kristin LaSalle</option>
            </select>
          </div>
          <div className="date-picker flex flex-col items-start w-full">
            <label htmlFor="dateFrom" className="font-medium" style={{color:'#222222'}}>From:</label>
            <Flatpickr id="dateFrom" className="w-full p-2 border border-gray-300 rounded-[8px] focus:outline-none" placeholder='Select Date' style={{color:'#7C7C7C'}}/>
          </div>
          <div className="date-picker flex flex-col items-start w-full ">
            <label htmlFor="dateTo" className="font-medium" style={{color:'#222222'}}>Over:</label>
            <Flatpickr id="dateTo" className="w-full p-2 border border-gray-300 rounded-[8px] focus:outline-none" placeholder='Select Date' style={{color:'#7C7C7C'}} />
          </div>
        </div>
        <div className="users-tabs flex flex-col gap-2">
          {['user1', 'user2', 'user3'].map(user => (
            <button
              key={user}
              style={{
                backgroundColor: activeTab === user ? '#360374' : '#F5F5F5',
                color: activeTab === user ? '#FFFFFF' : '#7C7C7C',
                padding: '8px 16px',
                borderRadius: '8px',
              }}
              onClick={() => setActiveTab(user)}
            >
              {user === 'user1' ? 'John Doe' : user === 'user2' ? 'Jane Smith' : 'Mike Johnson'}
            </button>
          ))}
        </div>
      </div>
      <div className="chatbox flex-1 p-4 bg-gray-100">
        <div className="chat-history-container bg-white shadow-md rounded-lg p-4 h-full">
          <div className="chat-box space-y-4">
            {chatContent.map((entry, index) => (
              <div key={index} className={`chat-entry flex ${entry.type === 'message' ? 'justify-end' : 'justify-start'}`}>
                <div className={`chat-bubble p-3 rounded-lg max-w-xs text-sm ${entry.type === 'message' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  <p>{entry.text}</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">{entry.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
