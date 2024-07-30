<<<<<<< HEAD
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Info from './components/Info';
import Photo from './components/Photo';

const Edit_Ai = () => {
  return (
    <div className='poppins mt-3 text-black text-lg bg-white'>
        <span className='font-semibold text-4xl text-[#360374]'>Edit AI</span>
    <Tabs className='mt-8 bg-white shadow-lg'>
    <TabList>
      <Tab>Info</Tab>
      <Tab>Photo</Tab>
      <Tab>Voice</Tab>
      <Tab>Websites</Tab>
      <Tab>Files</Tab>
      <Tab>Greetings</Tab>
      <Tab>Services</Tab>
    </TabList>
    <TabPanel>
      <Info/>
    </TabPanel>
    <TabPanel>
      <Photo/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 5</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 6</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 7</h2>
    </TabPanel>
  </Tabs>
  </div>
  )
}

export default Edit_Ai
=======
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
        <div className='flex justify-between px-11 '>
          {['Info', 'Photo', 'Voice', 'Websites', 'Files', 'Greetings', 'Services'].map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer px-8 py-2 rounded-lg ${
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
>>>>>>> 2b18af6 (manage ai screen complete)
