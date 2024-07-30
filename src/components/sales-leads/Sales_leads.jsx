import React from 'react'
import search_icon from '../../assets/icons/search.svg'
import trash_icon from '../../assets/icons/trashIcon.svg'
import { RiEditFill } from "react-icons/ri";
import classNames from 'classnames'


const thStyle = "text-white text-sm font-normal text-start lg:px-2 px-3"
const tdStyle = "border border-solid border-[#D0D5DD] text-[#2b2b2b] text-start py-3"
const editIconDiv = "bg-[#360374] text-sm font-medium text-white px-2 py-2 rounded-xl"
const trashIconDiv = "bg-[#ecc4f5] text-sm font-medium text-red-500 px-2 py-2 rounded-xl "
const searchInput = "w-[360px]  h-8 text-xs flex mb-6 mt-2 md:ml-0 ml-1 border border-solid border-[#D0D5DD] text-[#2b2b2b] font-normal rounded-3xl pl-10 pr-10 lg:pr-2 focus:outline-none placeholder:text-[#2b2b2b] placeholder:opacity-50"
const searchIconStyle = "absolute left-3 top-2 h-4 w-4"

const Sales_leads = () => {

  const tableData = [
    { ai_name: 'Joe Markland', user_name: 'Alice Johnson',email:'alice.johnson@example.com', phone_number: '(555) 123-4567', lead_info: 'Insurance quotes for healthcare coverage.' },
    { ai_name: 'Spuds MacKenzie', user_name: 'Bob Smith',email:'bob.smith@example.com', phone_number: '(555) 234-5678', lead_info: 'Ecommerce solutions for online store setup.' },
    { ai_name: 'Jason Sherman', user_name: 'Clara Brown',email:' clara.brown@example.com', phone_number: '(555) 345-6789', lead_info: '	Software demo for project management tool.' },
    { ai_name: 'Getrude Matshe', user_name: 'Olivia Davis',email:'Olivia.johnson@example.com', phone_number: '(555) 345-6789', lead_info: 'Home remodeling services for kitchen renovation.' },
    { ai_name: 'Silver Marketing', user_name: 'William Wilson',email:'William.Anderson@example.com', phone_number: '(555) 345-6789', lead_info: 'Marketing strategy consultation for new product launch.' },
    { ai_name: 'Denise Whitaker', user_name: 'Amelia Martinez',email:'Amelia.johnson@example.com', phone_number: '(555) 345-6789', lead_info: 'Copywriting services for website content.' },
    { ai_name: 'Eric Raymond', user_name: 'James Anderson',email:'James.Anderson@example.com', phone_number: '(555) 345-6789', lead_info: 'Insurance quotes for business liability coverage.' },
    { ai_name: 'Kristin LaSalle', user_name: 'Charlotte Moore',email:'Charlotte.johnson@example.com', phone_number: '(555) 345-6789', lead_info: 'Software implementation for CRM system.' },
  ]

  return (
    <div className='min-h-full lg:w-full w-screen  '>
      <div>
        <div className="relative">
          <input
            className={searchInput}
            type="text"
            placeholder="Search"
          />
          <img
            src={search_icon}
            alt="search_icon"
            className={searchIconStyle}
          />
          <label className="sr-only" htmlFor="search">
            Search
          </label>
        </div>
      </div>

      <table className="md:table-fixed table text-wrap border-2  text-[#697991] text-sm lg:mb-6 w-full">
        <thead>
          <tr className='bg-[#360374] '>
            <th className="w-[4%]">
              <div className="py-6 text-[#697991] text-sm w-[5%] font-normal text-start lg:px-2 px-3"></div>
            </th>
            <th className="w-[16%]">
              <div className={thStyle}>AI Name</div>
            </th>
            <th className='w-[12%]'>
              <div className={thStyle}>User Name</div>
            </th>
            <th>
              <div className={thStyle}>Email</div>
            </th>
            <th className="w-[12%]">
              <div className={thStyle}>Phone Number </div>
            </th>
            <th className="w-[24%]">
              <div className={thStyle}>Lead Info</div>
            </th>
          </tr>
        </thead>
        {tableData.map((data, idx) => {
          return (
            <tbody key={idx} className="mt-2">
              <tr>
                <td className={tdStyle}>
                  <div style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "10px" }}>
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </td>
                <td className={tdStyle}>
                  <div style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "10px" }}>
                    {data.ai_name}
                  </div>
                </td>
                <td className={tdStyle}>
                  <div style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "10px" }}>
                    {data.user_name}
                  </div>
                </td>
                <td className={tdStyle}>
                  <div className='text-[#5348c8]' style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "10px" }}>
                    {data.email}
                  </div>
                </td>
                <td className={tdStyle}>
                  <div className='text-[#5348c8]' style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "6px" }}>
                    {data.phone_number}
                  </div>
                </td>
                <td className={tdStyle}>
                  <div className="lg:py-[10px] lg:px-[40px]" style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "6px" }}>
                    {data.lead_info}
                  </div>
                </td>
              </tr>
            </tbody>
          )
        })}

      </table>
    </div>
  )
}



export default Sales_leads