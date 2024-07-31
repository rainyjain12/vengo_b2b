import React, { useState } from 'react'
import trash_icon from '../../../assets/icons/trashIcon.svg'
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const inputStyle = 'border p-3 w-[70%] text-black  text-base rounded-md bg-white focus:border-[#360374] placeholder:text-sm placeholder:text-gray-600 focus:shadow-md focus:outline-none  '
const Greetings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [links, setLinks] = useState([
    { label: 'First Greeting', placeholder: 'Hey there, what are you looking for help with?', value: '' },
    { label: 'Second Greeting', placeholder: 'How can I assist you with our services today?', value: '' },
    { label: 'Third Greeting', placeholder: 'Do you have any questions about how our business works?', value: '' },
    { label: 'Fourth Greeting', placeholder: 'Would you like to book a meeting with us?', value: '' },
  ]);

  const addLink = () => {
    setLinks([...links, { label: 'New Greeting', placeholder: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem', value: '' }]);
  };

  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index].value = value;
    setLinks(newLinks);
  };

  const handlePrev = () => {
    navigate('/files')
  };

  const handleNext = () => {
    navigate('/services')
  }
  return (
    <div className='poppins mt-10'>
      <div className="flex flex-col items-center p-4 bg-white ">
        <div className="max-w-[62rem] w-full flex justify-center items-center flex-col">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">6. Add Your Customer Greetings</h2>
          </div>

          <div className="space-y-4 w-full  text-black placeholder:text-black shadow-lg rounded-lg flex justify-center items-center flex-col">
            {links.map((link, index) => (
              <div key={index} className="flex items-center  space-x-2 bg-white p-3 w-[85%] rounded shadow">
                <div className="flex-grow flex-row flex justify-between items-center">
                  <div className="w-[20%]  mb-1 flex text-start text-[#360374]">{link.label}</div>
                  <input
                    className={inputStyle}
                    type="text"
                    placeholder={link.placeholder}
                    value={link.value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteLink(index)}
                >
                  <img src={trash_icon} alt='delete_icon' className='h-5 w-5' />
                </button>
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button
                className="flex items-center  mt-4 p-2 text-[#360374] border border-[#360374] rounded hover:bg-[#360374] hover:text-white transition"
                onClick={addLink}
              >
                <FaPlus />
                <span>Add Greeting</span>
              </button>
            </div>
            <div className="mt-6 pb-6">
              <div className="flex justify-center items-center space-x-4">
                {location.pathname === '/greetings' ? (
                  <>
                    <button type="button" className="bg-gray-500 px-10 py-3 rounded-md text-white" onClick={handlePrev}>
                      Previous
                    </button>
                    <button type="button" className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={handleNext}>
                      Next
                    </button>
                  </>
                ) : (
                  <button type="button" className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={() => navigate("/dashboard")}>
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Greetings