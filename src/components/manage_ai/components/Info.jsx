import React from 'react'

 const inputStyle='border p-3 rounded-md text-base font-normal bg-white focus:border-[#6c63ff]  focus:shadow-md focus:outline-none  '
const Info = () => {
  return (
    <div className='poppins mt-10 flex flex-col justify-center items-center '>
       <div className="mb-2">
          <h2 className="text-2xl font-semibold">1. Business Info</h2>
        </div>
        <div className='mt-6 shadow-lg rounded-lg w-full flex justify-center items-center '> 
        <form  className="mb-0  space-y-4 p-4  w-full " >
           <div className="grid grid-cols-2 gap-4 m-auto text-start text-lg font-medium">
            <div className='flex flex-col'>
               <label htmlFor="full-name">Your Full Name:</label>
            <input
                type="text"
                name='full_name'
                id="full-name"
                placeholder="Full Name"
                className={inputStyle}
                value={'Elon Musk'}
              />
              </div>
              <div className='flex flex-col'>


              <label htmlFor="company-name">Your Company Name:</label>
              <input
                type="text"
                id="company-name"
                placeholder="Company Name"
                name='company_name'
                className={inputStyle}
               value={'Space X'}
              />
              </div>
              <div className='flex flex-col'>

          
              <label htmlFor="website">Your Website:</label>
              <input
                type="text"
                id="website"
                placeholder="Website Url"
                name="website"
                className={inputStyle}
                value={'https://tesla.com'}
              />
              </div>
              <div className='flex flex-col'>

          
             <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                placeholder="email"
                name="email"
                className={inputStyle}
                value={'elon@tesla.com'}
              />
               </div>
               <div className='flex flex-col'>

          
               <label htmlFor="calendar_link">Your Calendar Link:</label>
              <input
                type="text"
                id="calendar_link"
                placeholder="Calendar Link"
                name="calendar_link"
                className={inputStyle}
                value={'https://calendar.tesla.com'}
              />
               </div>
               <div className='flex flex-col'>

          
            
              <label htmlFor="phone-number">Your Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                placeholder="(555) 555-1212"
                name='phone_number'
                className={inputStyle}
                value={'(555) 555-1212'}
              />
               </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={()=>navigate("/dashboard")}>
              Save Changes
            </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Info