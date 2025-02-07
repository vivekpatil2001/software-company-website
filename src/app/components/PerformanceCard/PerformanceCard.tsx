import React from 'react'
import './PerformanceCard'
interface PerformanceProps {
  title:String,
  text:String
}
const PerformanceCard: React.FC<PerformanceProps>  = ({title,text}) => {
  return (
    <div className=' bg-white cursor-pointer hover:bg-violet-700  hover:text-white text-violet-700 h-[35vh] xl:h-[30vh] xl:w-[15vw] p-5 w-[60vw] sm:w-[30vw] perCard '>
      <h1 className='text-5xl font-extrabold font-sans text-center'>{text}</h1>
      <p className='font-small p-1 mt-4 text-start'>{title}</p>
    </div>
  )
}

export default PerformanceCard
