import React from 'react'
import voice from '../../../assets/icons/pla-btn.svg';

const Voice = () => {
    const ImageArray =[
        {id:0,img:voice,name:'Samantha'},
        {id:1,img:voice,name:'Lisa'},
        {id:2,img:voice,name:'Kristin'},
        {id:3,img:voice,name:'Jennifer'},
        {id:4,img:voice,name:'Charles'},
        {id:5,img:voice,name:'David'},
        {id:6,img:voice,name:'Joshua'},
        {id:7,img:voice,name:'Bradley'},
    ]
    return (
        <div className='poppins mt-10'>
            <span className='text-black text-2xl font-semibold '>3. Choose a Voice</span>
            <div className='mt-6 space-y-4 rounded-lg p-4 shadow-lg  flex flex-col justify-center items-center'>
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
    )
}

export default Voice