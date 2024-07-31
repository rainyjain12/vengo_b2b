import React, { useState } from 'react'
import trash_icon from '../../../assets/icons/trashIcon.svg'
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const inputStyle = 'border p-3 w-[60%] text-gray-700 text-base rounded-md bg-white focus:border-[#360374] placeholder:text-sm placeholder:text-gray-600  focus:shadow-md focus:outline-none  '
const Websites = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [links, setLinks] = useState([
        { label: 'A sales meeting you did', placeholder: 'https://youtube.com', value: '' },
        { label: 'Your company FAQ', placeholder: 'https://www.yourbusiness.com/faq', value: '' },
        { label: 'A podcast interview you did', placeholder: 'https://www.podcast.com/your-interview', value: '' },
        { label: 'Your Blog', placeholder: 'https://yourbusiness.com/blog', value: '' },
        { label: 'A webinar you did', placeholder: 'https://www.yourbusiness.com/webinar', value: '' },
    ]);

    const addLink = () => {
        setLinks([...links, { label: 'New Link', placeholder: 'https://example.com', value: '' }]);
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
        navigate('/voice')
    };

    const handleNext = () => {
        navigate('/files')
    };

    return (
        <div className='poppins mt-10'>
            <div className="flex flex-col items-center  p-4 bg-white">
                <div className="max-w-[62rem] w-full flex justify-center items-center flex-col">
                    <div className="mb-8 gap-1">
                        <h2 className="text-2xl font-semibold">4. Add your business links</h2>
                        <span>Provide links to various resources related to your business. You can add or remove links as needed.</span>
                    </div>

                    <div className="space-y-4 w-full  text-black placeholder:text-black shadow-lg rounded-lg flex justify-center items-center flex-col">
                        {links.map((link, index) => (
                            <div key={index} className="flex items-center  space-x-2 bg-white p-3 w-[85%] rounded shadow">
                                <div className="flex-grow flex-row flex justify-between items-center">
                                    <div className="w-1/3  mb-1 flex text-start text-[#360374]">{link.label}</div>
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
                                <span>Add URL</span>
                            </button>
                        </div>
                        <div className="mt-6 pb-6">
                            <div className="flex justify-center items-center space-x-4">
                                {location.pathname === '/websites' ? (
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

export default Websites