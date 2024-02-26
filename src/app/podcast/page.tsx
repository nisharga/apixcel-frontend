import RoundedBtn from '@/Components/Reusable/RoundedBtn'
import MusicAll from '@/Components/UI/MusicAll'
import React from 'react'

const page = () => {
  return (
    <div>
         <RoundedBtn className="">For You</RoundedBtn> 
         <MusicAll />
         <RoundedBtn className="mt-8">Popular</RoundedBtn> 
         <MusicAll /> 
    </div>
  )
}

export default page