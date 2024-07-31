import React, { useState } from 'react'
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import img1 from "../../../assets/images/avatar1.jpg";
import img2 from "../../../assets/images/avatar2.jpg";
import img3 from "../../../assets/images/avatar3.jpg";
import img4 from "../../../assets/images/avatar4.jpg";
import img5 from "../../../assets/images/avatar5.jpg";
import img6 from "../../../assets/images/avatar6.jpg";
import img7 from "../../../assets/images/avatar7.jpg";
import img8 from "../../../assets/images/avatar8.jpg";


const Photo = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        },
    });

    const ImageArray = [
        { id: 0, img: img1, name: 'Samantha' },
        { id: 1, img: img2, name: 'Lisa' },
        { id: 2, img: img3, name: 'Kristin' },
        { id: 3, img: img4, name: 'Jennifer' },
        { id: 4, img: img5, name: 'Charles' },
        { id: 5, img: img6, name: 'David' },
        { id: 6, img: img7, name: 'Joshua' },
        { id: 7, img: img8, name: 'Bradley' },
    ]
    return (
        <div className='poppins mt-10'>
            <span className='text-black text-2xl font-semibold '>2. Give Your AI a Face</span>
            <div className='mt-6 space-y-4 rounded-lg p-4 shadow-lg  flex flex-col justify-center items-center'>
                <div
                    {...getRootProps()}
                    style={{
                        width: "90%",
                        height: "15vmax",
                        backgroundColor: "white",
                        border: "1px dashed black",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.87)",
                        WebkitTransition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        borderRadius: "4px",
                        // boxShadow:
                        // "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <input {...getInputProps()} />
                    {uploadedFiles.length == 0 ?
                        <div className='flex flex-col justify-center items-center'>
                            <FiUpload style={{ fontSize: "3.5vmax", color: "#B4B4B4" }} />
                            <span className='text-[#B4B4B4]'>Select or drag and drop</span>
                        </div>
                        : ''}
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
                <div className='text-black text-2xl mt-6 font-medium '>
                    <span>or choose one of ours:</span>
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
                </div>
            </div>

        </div>
    )
}

export default Photo