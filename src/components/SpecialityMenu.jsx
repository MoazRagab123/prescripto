import React, { Fragment } from 'react'
import { specialityData } from '../assets/assets.js'

const SpecialityMenu = () => {
  return (
    <Fragment>
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' >
    <h1 className='text-3xl font-medium'> Find by Speciality</h1>
    <p  className='sm:w-1/3 text-center tex-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    <div  className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
    {specialityData.map((item,index)=>(
        <ul id='speciality' key={index}>
       <a onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transation-all duration-500 list-none cursor-pointer'  href={`/doctors/${item.speciality}`}>
        <img className='w-16 sm:w-24 mb-2' src={item.image} alt=''/>
        <p> {item.speciality}</p>
        
       </a>
       </ul>
      ))}
    </div>
   </div>
   </Fragment>
  )
}

export default SpecialityMenu