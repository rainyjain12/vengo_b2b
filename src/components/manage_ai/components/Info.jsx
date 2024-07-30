import React from 'react'

 const inputStyle='border p-3 rounded-md  bg-white focus:border-[#6c63ff]  focus:shadow-md focus:outline-none  '
const Info = () => {
  return (
    <div className='poppins mt-10'>
        <span className='text-black text-2xl font-semibold '>1. Business Info</span>
        <form  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg  " >
           <div className="flex flex-col gap-[10px] m-auto text-start">
               <label htmlFor="full-name">Your Full Name:</label>
            <input
                type="text"
                name='full_name'
                id="full-name"
                placeholder="Full Name"
                className={inputStyle}
              />

              <label htmlFor="company-name">Your Company Name:</label>
              <input
                type="text"
                id="company-name"
                placeholder="Company Name"
                name='company_name'
                className={inputStyle}
               
              />
          
              <label htmlFor="website">Your Website:</label>
              <input
                type="text"
                id="website"
                placeholder="Website Url"
                name="website"
                className={inputStyle}
              />
             
             <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                placeholder="email"
                name="email"
                className={inputStyle}
              />
               <label htmlFor="calendar_link">Your Calendar Link:</label>
              <input
                type="text"
                id="calendar_link"
                placeholder="Calendar Link"
                name="calendar_link"
                className={inputStyle}
              />
            
              <label htmlFor="phone-number">Your Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                placeholder="(555) 555-1212"
                name='phone_number'
                className={inputStyle}
              />
              
             
             
             
              <label htmlFor="website-url">Website URL</label>
              <input
                type="url"
                id="website-url"
                placeholder="Website URL"
                name="website_url"
                className={inputStyle}
              />
              
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={()=>navigate("/dashboard")}>
              Save Changes
            </button>
          </div>
        </form>
    </div>
  )
}

export default Info