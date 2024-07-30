import React, { useState } from 'react';
import { FiUpload } from "react-icons/fi";

const Customize = () => {
  const [activeTab, setActiveTab] = useState('chatWidget');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [settings, setSettings] = useState({
    headingTitleColor: '#360374',
    headingBackgroundColor: '#e5e5ff',
    firstMessage: 'Hello! 👋 How can I help you today?',
    aiMessageColor: '#360374',
    aiMessageBackgroundColor: '#e5e5ff',
    userMessageColor: '#360374',
    userMessageBackgroundColor: '#5348c8',
    widgetColor: '#360374',
  });

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setUploadedFiles([file]);
    }
  };

  const previewAvatar = () => {
    // setPreviewImage(selectedImage);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value,
    });
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

  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white shadow-xl rounded-lg p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="aiDropdown" className="block mb-2 text-purple-700 font-semibold text-xl">Select AI:</label>
          <select id="aiDropdown" name="aiDropdown" className="w-full p-2 border border-gray-300 rounded">
            <option value="joeMarkland">Joe Markland</option>
            <option value="silverMarketing">Silver Marketing</option>
            <option value="jasonSherman">Jason Sherman</option>
            <option value="kristinLaSalle">Kristin LaSalle</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row mb-6">
          <button
            className={`tab-button ${activeTab === 'chatWidget' ? 'bg-purple-700 text-white' : 'bg-gray-300'} py-2 px-4 flex-1 rounded-t md:rounded-l md:rounded-t-none`}
            onClick={() => setActiveTab('chatWidget')}
          >
            Chat Widget
          </button>
          <button
            className={`tab-button ${activeTab === 'videoAvatar' ? 'bg-purple-700 text-white' : 'bg-gray-300'} py-2 px-4 flex-1 rounded-b md:rounded-r md:rounded-b-none`}
            onClick={() => setActiveTab('videoAvatar')}
          >
            Video Avatar
          </button>
        </div>

        <div id="chatWidget" className={`tab-content ${activeTab === 'chatWidget' ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="customize-settings w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
              <label htmlFor="headingTitleColor" className="block mb-2">Heading title color:</label>
              <input type="color" id="headingTitleColor" name="headingTitleColor" value={settings.headingTitleColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="headingBackgroundColor" className="block mb-2">Heading background color:</label>
              <input type="color" id="headingBackgroundColor" name="headingBackgroundColor" value={settings.headingBackgroundColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="firstMessage" className="block mb-2">First Message:</label>
              <input type="text" id="firstMessage" name="firstMessage" value={settings.firstMessage} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="aiMessageColor" className="block mb-2">AI message color:</label>
              <input type="color" id="aiMessageColor" name="aiMessageColor" value={settings.aiMessageColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="aiMessageBackgroundColor" className="block mb-2">AI message background color:</label>
              <input type="color" id="aiMessageBackgroundColor" name="aiMessageBackgroundColor" value={settings.aiMessageBackgroundColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="userMessageColor" className="block mb-2">User message color:</label>
              <input type="color" id="userMessageColor" name="userMessageColor" value={settings.userMessageColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="userMessageBackgroundColor" className="block mb-2">User message background color:</label>
              <input type="color" id="userMessageBackgroundColor" name="userMessageBackgroundColor" value={settings.userMessageBackgroundColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <label htmlFor="widgetColor" className="block mb-2">Widget icon color:</label>
              <input type="color" id="widgetColor" name="widgetColor" value={settings.widgetColor} onChange={handleInputChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />

              <button className="btn btn-primary bg-purple-700 text-white py-2 px-4 rounded" onClick={updateWidget}>Update</button>
            </div>

            <div className="chat-widget-preview w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
              <div className="chat-widget border border-gray-300 rounded-lg p-4 flex flex-col shadow-md">
                <div className="chat-header p-4" id="chatHeader" style={{ backgroundColor: '#360374' }}>
                  <span className="chat-heading text-xl font-semibold" id="chatHeading" style={{ color: 'white' }}>Business Name</span>
                </div>
                <div className="chat-messages flex-1 overflow-y-auto p-2">
                  <div className="ai-message mb-4 p-2 rounded" id="aiMessage" style={{ color: settings.aiMessageColor, backgroundColor: settings.aiMessageBackgroundColor }}>
                    <p>{settings.firstMessage}</p>
                  </div>
                  <div className="user-message p-2 rounded" id="userMessage" style={{ color: 'white', backgroundColor: '#5348c8' }}>
                    <p>I'd like to book a meeting with you please.</p>
                  </div>
                </div>
                <div className="chat-input p-4 border-t border-gray-300 flex items-center">
                  <input type="text" placeholder="Type a message..." className="flex-1 p-2 border border-gray-300 rounded-l-lg" />
                  <button className="btn btn-send text-white py-2 px-4 rounded-r-lg ml-2" style={{ backgroundColor: '#360374' }}>Send</button>
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
}

export default Customize;
