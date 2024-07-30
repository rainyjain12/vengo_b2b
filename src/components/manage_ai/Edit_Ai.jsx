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