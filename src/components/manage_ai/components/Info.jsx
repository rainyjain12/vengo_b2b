import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const inputStyle = 'border p-3 rounded-md text-base font-normal bg-white focus:border-[#6c63ff]  focus:shadow-md focus:outline-none';

const Info = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const initialState = {
    full_name: 'Elon Musk',
    company_name: 'Space X',
    website: 'https://tesla.com',
    email: 'elon@tesla.com',
    calendar_link: 'https://calendar.tesla.com',
    phone_number: '(555) 555-1212',
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (location.pathname === '/create-ai') {
      setFormData({
        full_name: '',
        company_name: '',
        website: '',
        email: '',
        calendar_link: '',
        phone_number: '',
      });
    } else if (location.pathname === '/edit-ai') {
      setFormData(initialState);
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
  };

  const handleNext = () => {
   navigate('/photo')
  };

  return (
    <div className='poppins mt-10 flex flex-col justify-center items-center'>
      <div className="mb-2">
        <h2 className="text-2xl font-semibold">1. Business Info</h2>
      </div>
      <div className='mt-6 shadow-lg rounded-lg w-full flex justify-center items-center'>
        <form className="mb-0 space-y-4 p-4 w-full">
          <div className="grid grid-cols-2 gap-4 m-auto text-start text-lg font-medium">
            {['full_name', 'company_name', 'website', 'email', 'calendar_link', 'phone_number'].map((field) => (
              <div key={field} className='flex flex-col'>
                <label htmlFor={field}>Your {field.split('_').join(' ')}:</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  placeholder={field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  name={field}
                  className={inputStyle}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-4">
            {location.pathname === '/create-ai' ? (
              <>
                <button type="button" className="bg-gray-500 px-10 py-3 rounded-md text-white" onClick={handleCancel}>
                  Cancel
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
        </form>
      </div>
    </div>
  );
}

export default Info;
