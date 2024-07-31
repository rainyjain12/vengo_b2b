import React, { useState } from 'react';
import Info from './components/Info';
import Photo from './components/Photo';
import Voice from './components/Voice';
import Websites from './components/Websites';
import Files from './components/Files';
import Greetings from './components/Greetings';
import Services from './components/Services';

const Edit_Ai = () => {
  const [activeTab, setActiveTab] = useState('Info');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='poppins mt-3 text-black text-lg max-w-[86rem] bg-white  '>
      <span className='font-semibold text-4xl text-[#360374] '>Edit AI</span>
      <div className='mt-14 bg-white '>
        <div className='flex justify-between px-11 bg-white shadow-lg p-4 '>
          {['Info', 'Photo', 'Voice', 'Websites', 'Files', 'Greetings', 'Services'].map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer px-8 py-2 rounded-md  ${
                activeTab === tab ? ' bg-[#360374] text-white' : 'bg-[#F5F5F5] text-[#7C7C7C]'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab} 
            </div>
          ))}
        </div>
        <div className='p-4'>
          {activeTab === 'Info' && <Info />}
          {activeTab === 'Photo' && <Photo />}
          {activeTab === 'Voice' && <Voice />}
          {activeTab === 'Websites' && <Websites />}
          {activeTab === 'Files' && <Files />}
          {activeTab === 'Greetings' && <Greetings/>}
          {activeTab === 'Services' && <Services/>}
        </div>
      </div>
    </div>
  );
};

export default Edit_Ai;
