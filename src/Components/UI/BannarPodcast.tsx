"use client"
import { useRouter } from 'next/router';
import RoundedBtn from "../Reusable/RoundedBtn"


const BannarPodcast = () => {
   
  return (
    <div className="min-h-[320px] text-white">
       <div className="podcast_bannar_bg py-7 px-10">
         <h4 className="text-base md:text-lg font-semibold mb-3.5 z-50">  Amr sonar bangla, ami tomai valobasi 
</h4>
         <h2 className="text-2xl md:text-4xl font-normal mb-3.5">The Dark Side of Music: Unveiling Its Negative Effects</h2>
         <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9"> 
            <h4 className="text-base md:text-lg font-semibold mb-3.5 z-50">  Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked
</h4>
            <RoundedBtn
            className="!bg-[#090909] !bg-opacity-30 !text-white mt-5"
            >For You?</RoundedBtn>

            </div>
         </div>
       </div>
    </div>
  )
}

export default BannarPodcast;