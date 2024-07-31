import React from 'react'

const inputStyle = 'border p-3 rounded-md text-base font-normal  bg-white focus:border-[#6c63ff]  focus:shadow-md focus:outline-none  '

const Account = () => {
    return (
        <div className='poppins mt-8 flex flex-col justify-center items-center w-full'>
            <div className=' shadow-2xl rounded-lg w-full flex justify-start items-start '>
                <form className="mb-0  space-y-4 p-4 w-full" >
                <div className="grid grid-cols-2 gap-4 m-auto text-start text-lg font-medium">
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="full-name ">Full Name</label>
                            <input
                                type="text"
                                name='full_name'
                                id="full-name"
                                placeholder="Full Name"
                                className={inputStyle}
                                value='John Doe'
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="company-name">Company Name</label>
                            <input
                                type="text"
                                id="company-name"
                                placeholder="Company Name"
                                name='company_name'
                                className={inputStyle}
                                value={'Doe Enterprises'}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="website">Website</label>
                            <input
                                type="text"
                                id="website"
                                placeholder="Website Url"
                                name="website"
                                className={inputStyle}
                                value={'www.doeenterprises.com'}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="email"
                                name="email"
                                className={inputStyle}
                                value={'john.doe@example.com'}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="calendar_link">Calendar Link</label>
                            <input
                                type="text"
                                id="calendar_link"
                                placeholder="Calendar Link"
                                name="calendar_link"
                                className={inputStyle}
                                value={'www.calendly.com/johndoe'}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="phone-number">Phone Number</label>
                            <input
                                type="tel"
                                id="phone-number"
                                placeholder="(555) 555-1212"
                                name='phone_number'
                                className={inputStyle}
                                value={'(123) 456-7890'}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                name="password"
                                className={inputStyle}
                                value={'vengo_b2b'}
                            />
                        </div>

                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={() => navigate("/dashboard")}>
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account