import { musicImage } from '@/static'
import React from 'react'
import Avater from '../Reusable/Avater'
import { Video } from '../Icons'
import Link from 'next/link'

const MusicAll = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-8 ">
       {
    (musicImage ?? []).map((music) => (
        <Link href={ music.link } key={music.id} className="relative transition duration-300 hover:duration-500 hover:scale-105">
           <Avater src={music.img}
            imageClass="w-[190px] h-[190px] min-w-[40px] "
            />
            <div className="absolute left-16 top-16 z-20 w-[50px] h-[50px]  "> <Video /> </div>
            <h2 className="text-lg text-white font-semibold mt-2">Music</h2>
        </Link>
    ))
}
    </div>
  )
}

export default MusicAll