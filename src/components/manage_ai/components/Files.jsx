import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUpload } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { useLocation, useNavigate } from 'react-router-dom';

const Files = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        },
    });

    const handlePrev = () => {
        navigate('/websites')
    };

    const handleNext = () => {
        navigate('/greetings')
    };
  return (
    <div className='poppins mt-10 '>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold ">5. Upload Your Files</h2>
        </div>
        {location.pathname==='/files'?
        <div className='flex flex-col items-center justify-center gap-3 font-semibold'>
            <h2>To make your AI work really well, please add all of your company documents such as:</h2>
            <div className='flex flex-col items-start justify-center w-fit gap-2 font-medium'>
                <span className='flex gap-1 items-center'><TiTick />Sales training manuals</span>
                <span className='flex gap-1 items-center'><TiTick />Company FAQs</span>
                <span className='flex gap-1 items-center'><TiTick />Interviews</span>
                <span className='flex gap-1 items-center'><TiTick />News articles</span>
                <span className='flex gap-1 items-center'><TiTick />Video transcripts</span>
                <span className='flex gap-1 items-center'><TiTick />Important business documents</span>
            </div>
            <h2>The more you add, the more sales your AI will help you close!</h2>
        </div>
        :''}
        {/* <span className='text-black text-2xl font-semibold '></span> */}
        <div className='flex flex-col  justify-center items-center mt-6  shadow-2xl rounded-lg  '>
        <div
                    {...getRootProps()}
                    style={{
                        width: "90%",
                        height: "15vmax",
                        backgroundColor: "white",
                        border: "1px dashed #B4B4B4",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.87)",
                        WebkitTransition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        borderRadius: "10px",
                        marginBottom:"80px"
                        // boxShadow:
                        // "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <input {...getInputProps()} />
                    {uploadedFiles.length ==0?
                    <div className='flex flex-col justify-center items-center'>
                        <FiUpload style={{ fontSize: "3.5vmax", color: "#B4B4B4" }} />
                        <span className='text-[#B4B4B4]'>Select or drag and drop</span>
                    </div>
                    :''}
                    {/* <MdAddPhotoAlternate style={{ fontSize: "4vmax", color: "#B4B4B4" }} /> */}
                    <ul>
                        {uploadedFiles.map((file) => (
                            // console.log(file,"file")
                            <img
                                src={URL.createObjectURL(file)}
                                style={{ width: "20vmax", height: "10vmax" }}
                            />
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center items-center space-x-4 pb-4">
                    {location.pathname === '/files' ? (
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

export default Files