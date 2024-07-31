import React from 'react'
import voice from '../../../assets/icons/pla-btn.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Voice = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const ImageArray = [
        { id: 0, img: voice, name: 'Samantha' },
        { id: 1, img: voice, name: 'Lisa' },
        { id: 2, img: voice, name: 'Kristin' },
        { id: 3, img: voice, name: 'Jennifer' },
        { id: 4, img: voice, name: 'Charles' },
        { id: 5, img: voice, name: 'David' },
        { id: 6, img: voice, name: 'Joshua' },
        { id: 7, img: voice, name: 'Bradley' },
    ]
    const handlePrev = () => {
        navigate('/photo')
    };

    const handleNext = () => {
        navigate('/websites')
    };
    return (
        <div className='poppins mt-10'>
            <span className='text-black text-2xl font-semibold '>3. Choose a Voice</span>
            <div className='mt-6 space-y-4 rounded-lg p-4 shadow-lg  flex flex-col justify-center items-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-16 mt-10 mb-10 text-center '>
                    {ImageArray.map((data) => {
                        return (
                            <div className='font-normal text-base flex flex-col justify-center space-y-2  items-center'>
                                <img src={data.img} alt='avatar' className='rounded-full h-28 w-28' />
                                <span>{data.name}</span>
                                <input className='h-4 w-4' type="checkbox" id="avatar1" name="avatar1" value="avatar"></input>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center items-center space-x-4">
                    {location.pathname === '/voice' ? (
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
    )
}

export default Voice