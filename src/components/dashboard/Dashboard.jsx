import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FaUserClock } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { RiChatVoiceFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

const ulStyle='mt-6 space-y-1 text-sm justify-start text-start flex flex-col'
const liStyle ='flex gap-3 items-center w-fit'
const liDiv = 'text-[#2b2b2b] font-medium font-bold py-2'
const liSpan = 'bg-[#ecc4f5] p-1 rounded-full text-[#360374]'
const Dashboard = () => {
  const rowData = [
    { title: "Total Users", price: '500' ,icon:<MdGroups2 />},
    { title: "Meetings Booked", price: '150',icon:<SiGoogleanalytics /> },
//     { title: "Total Active AI Identities", price: '80',icon:<FaRobot /> },
    { title: "Average Chat Time", price: '5 mins',icon:<FaUserClock />},
    { title: "Total Chat Messages", price: '3000',icon:<IoChatbubbleEllipses /> },
//     { title: "Total Voice Messages", price: '8000',icon:<RiChatVoiceFill /> },
//     { title: "Total Video Messages", price: '5000',icon:<FaVideo />},
  ];

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Messages Growth',
        data: [28, 38, 48, 58, 68, 78, 88],
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  return (
    <div className='min-h-full lg:w-full w-screen p-2 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-start '>
        {rowData.map((dashboardData, idx) => (
          <div key={idx} className='bg-white px-3 py-6 gap-2 flex flex-col items-start justify-center rounded-lg shadow-lg'>
            <span className='text-[rgb(50,50,50)] font-bold text-base flex justify-between items-center w-full'>{dashboardData.title} <span className='bg-[#ecc4f5] p-2  rounded-full text-[#360374]' >{dashboardData.icon}</span></span>
            <span className='text-[#5348c8] font-bold text-2xl '>{dashboardData.price}</span>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 mb-10'>
        <div className='bg-white p-4 shadow-lg rounded-lg space-y-6'>
          <Line data={lineChartData && lineChartData} />
        </div>
        <div className='bg-white p-4 shadow-lg rounded-lg'>
        <Line  data={lineChartData && lineChartData} />
        </div>
      </div>

      {/* <div className='bg-white p-6 shadow-lg rounded-lg h-[400px] overflow-auto mb-6 '>
          <span className='text-[#360374] font-semibold text-2xl'>Activity Feed</span>
          <ul className={ulStyle}>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan}><FaUserPlus /></span> Sebastian Jones created a new AI called Samantha.</li>
            </div>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan} ><FaUserPlus /></span> Erica Taylor just signed up.</li>
            </div>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan}><FaEdit /></span>Michael Brown edited the AI called Alexa.</li>
            </div>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan}><FaVideo /></span> David Green has not uploaded the training video for AI Emma.</li>
            </div>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan}><FaUserPlus /></span> Sarah White just signed up.</li>
            </div>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan}><FaUserPlus /></span> James Parker created a new AI called John.</li>
            </div>
            <div className={liDiv}>
              <li className={liStyle}><span className={liSpan}><FaLongArrowAltUp /></span> Jessica Adams upgraded to a Pro account.</li>
            </div>
          </ul>
        </div> */}
    </div>
  );
};

export default Dashboard;



