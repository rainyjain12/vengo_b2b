import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { RiSendPlaneFill } from "react-icons/ri";

const Customize = () => {
  const [activeTab, setActiveTab] = useState('chatWidget');
  const [selectedImage, setSelectedImage] = useState(null);
  const [settings, setSettings] = useState({
    headingTitleColor: '#360374',
    headingBackgroundColor: '#fff',
    firstMessage: 'Hello! 👋 How can I help you today?',
    aiMessageColor: '#360374',
    aiMessageBackgroundColor: '#e5e5ff',
    userMessageColor: '#fff',
    userMessageBackgroundColor: '#360374',
    widgetColor: '#360374',
  });

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const updateWidget = () => {
    document.getElementById('chatHeading').style.color = settings.headingTitleColor;
    document.getElementById('chatHeader').style.backgroundColor = settings.headingBackgroundColor;
    document.getElementById('aiMessage').style.color = settings.aiMessageColor;
    document.getElementById('aiMessage').style.backgroundColor = settings.aiMessageBackgroundColor;
    document.getElementById('userMessage').style.color = settings.userMessageColor;
    document.getElementById('userMessage').style.backgroundColor = settings.userMessageBackgroundColor;
    document.getElementById('chatWidget').style.backgroundColor = settings.widgetColor;
    document.getElementById('aiMessage').innerHTML = `<p>${settings.firstMessage}</p>`;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
      setUploadedFiles(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const previewAvatar = () => {
    // setPreviewImage(selectedImage);
  };

  return (
    <div className="mt-8  min-h-screen">
      <div className="flex px-4 items-center border-b border-gray-200 mb-3 gap-12 justify-start bg-white shadow-2xl rounded-md py-3">
        <button
          className={`flex py-3 px-3 text-center font-semibold rounded-md ${activeTab === 'chatWidget' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('chatWidget')}
        >
          Chat Widget
        </button>
        <button
          className={`flex py-3 px-3 text-center font-semibold rounded-md ${activeTab === 'videoAvatar' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('videoAvatar')}
        >
          Video Avatar
        </button>
        <div className=" flex items-center  ml-12 gap-3  ">
          <label htmlFor="aiDropdown" className="flex  text-black font-medium text-lg">Select AI:</label>
          <select id="aiDropdown" name="aiDropdown" className=" p-2 px-20 border border-gray-300 rounded">
            <option value="joeMarkland">Joe Markland</option>
            <option value="silverMarketing">Silver Marketing</option>
            <option value="jasonSherman">Jason Sherman</option>
            <option value="kristinLaSalle">Kristin LaSalle</option>
          </select>
        </div>
      </div>
      <div className=" w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className={`  ${activeTab === 'chatWidget' ? 'block' : 'hidden'}`}>
          <div className=" flex ">
            <div className="bg-white p-6 rounded-lg shadow-md w-[40%]">
              <h2 className="text-xl font-semibold mb-4">Chat Widget Settings</h2>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block mb-2">Heading Title Color:</label>
                <input
                  type="color"
                  value={settings.headingTitleColor}
                  onChange={(e) => setSettings({ ...settings, headingTitleColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block  mb-2">Heading Background Color:</label>
                <input
                  type="color"
                  value={settings.headingBackgroundColor}
                  onChange={(e) => setSettings({ ...settings, headingBackgroundColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block mb-2">AI Message Color:</label>
                <input
                  type="color"
                  value={settings.aiMessageColor}
                  onChange={(e) => setSettings({ ...settings, aiMessageColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block mb-2">AI Message Background Color:</label>
                <input
                  type="color"
                  value={settings.aiMessageBackgroundColor}
                  onChange={(e) => setSettings({ ...settings, aiMessageBackgroundColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block mb-2">User Message Color:</label>
                <input
                  type="color"
                  value={settings.userMessageColor}
                  onChange={(e) => setSettings({ ...settings, userMessageColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block mb-2">User Message Background Color:</label>
                <input
                  type="color"
                  value={settings.userMessageBackgroundColor}
                  onChange={(e) => setSettings({ ...settings, userMessageBackgroundColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>

              <div className="mb-4 flex text-start justify-between" >
                <label className="block mb-2">Widget Color:</label>
                <input
                  type="color"
                  value={settings.widgetColor}
                  onChange={(e) => setSettings({ ...settings, widgetColor: e.target.value })}
                  className="w-1/4 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">First Message:</label>
                <input
                  type="text"
                  value={settings.firstMessage}
                  onChange={(e) => setSettings({ ...settings, firstMessage: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <button
                onClick={updateWidget}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-purple-700 transition"
              >
                Update Widget
              </button>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-md w-full ">
              <h2 className="text-xl  font-semibold mb-4">Chat Widget Preview</h2>
              <div id="chatWidget" className="border rounded-lg p-4 bg-gray-100 flex flex-col h-full">
                <div id="chatHeader" className="p-3 flex justify-center border-[#360374] border rounded-lg " style={{ backgroundColor: settings.headingBackgroundColor }}>
                  <span id="chatHeading" style={{ color: settings.headingTitleColor }} className="text-xl font-medium flex items-center justify-center">Business Name</span>
                </div>
                <div className="p-2 bg-white shadow-xl rounded-md flex flex-col h-full pt-8">
                  <div className="flex flex-col-reverse">
                    <div id="userMessage" className="p-3 rounded mb-4 self-end bg-gray-100" style={{ color: settings.userMessageColor, backgroundColor: settings.userMessageBackgroundColor }}>
                      <p>I'd like to book a meeting with you please.</p>
                    </div>
                    <div id="aiMessage" className="p-3 rounded mb-4 self-start bg-gray-200" style={{ color: settings.aiMessageColor, backgroundColor: settings.aiMessageBackgroundColor }}>
                      <p>{settings.firstMessage}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 pb-4 relative">
                  <input type="text" placeholder="Type a message..." className="w-full p-4 border rounded-lg" />
                  <RiSendPlaneFill  className='absolute right-6 bottom-9  text-gray-600'/>
                  {/* <button className="bg-purple-600 text-white py-2 px-4 rounded-r-lg ml-2 hover:bg-purple-700 transition">Send</button> */}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="videoAvatar" className={`tab-content ${activeTab === 'videoAvatar' ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row">
            <div className="avatar-left w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg md:mr-4 mb-4 md:mb-0">
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                  width: "100%",
                  height: "15vmax",
                  backgroundColor: selectedImage ? "transparent" : "white",
                  border: "1px dashed black",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, 0.87)",
                  WebkitTransition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  position: "relative"
                }}
                onClick={() => document.getElementById('avatarUpload').click()}
              >
                <input
                  type="file"
                  id="avatarUpload"
                  name="avatarUpload"
                  className="hidden"
                  onChange={handleImageChange}
                />
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                ) : (
                  <div className='flex flex-col justify-center items-center'>
                    <FiUpload style={{ fontSize: "3.5vmax", color: "#B4B4B4" }} />
                    <span>Select or drag and drop</span>
                  </div>
                )}
              </div>
              <button
                className="btn btn-primary bg-purple-700 text-white py-2 px-4 rounded mt-4"
                onClick={previewAvatar}
              >
                Preview
              </button>
            </div>
            <div className="avatar-right w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg" id="avatarPreview">
              {selectedImage && <img src={selectedImage} alt="Preview" className="w-full h-auto rounded" />}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Customize;
