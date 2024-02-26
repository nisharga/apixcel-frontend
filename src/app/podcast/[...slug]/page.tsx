import BannarPodcast from '@/Components/UI/BannarPodcast'
import MusicAll from '@/Components/UI/MusicAll'
 
import React from 'react'
import RoundedBtn from './../../../Components/Reusable/RoundedBtn';

const page = () => { 
   
  return (
    <div>
        <BannarPodcast /> 
        <h4 className="text-base md:text-lg font-semibold mb-3.5 z-50 text-white">  Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked
        </h4>
        <RoundedBtn>Related</RoundedBtn> 
         <MusicAll /> 
    </div>
  )
}

export default page