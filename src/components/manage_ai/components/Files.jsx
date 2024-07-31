import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUpload } from "react-icons/fi";


const Files = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        },
    });
  return (
    <div className='poppins mt-10 '>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold ">5. Upload Your Files</h2>
        </div>
        {/* <span className='text-black text-2xl font-semibold '></span> */}
        <div className='flex  justify-center items-center mt-6  shadow-2xl rounded-lg  '>
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
                </div>
    </div>
  )
}

export default Files