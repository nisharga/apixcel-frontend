import React from 'react'
import Music from '../Reusable/Music'

const PlayList = () => {
  return (
    <>
        <div className="mt-[40px] pb-4">
            <div className=" flex justify-between items-center px-6">
                <h2 className="text-white text-xl font-semibold">My Playlist</h2>
                <div className="h-[1px] bg-white w-10"></div>
            </div>
        </div>

        <div className="flex items-center gap-5 px-6 pb-6">
            <Music />
            <h2 className="text-white text-xl font-semibold">Playlist #A</h2>
        </div>
        <div className="flex items-center gap-5 px-6 pb-6">
            <Music />
            <h2 className="text-white text-xl font-semibold">Playlist #B</h2>
        </div>
        <div className="flex items-center gap-5 px-6 pb-6">
            <Music />
            <h2 className="text-white text-xl font-semibold">Playlist #C</h2>
        </div>
        <div className="flex items-center gap-5 px-6 pb-6">
            <Music />
            <h2 className="text-white text-xl font-semibold">Add New +</h2>
        </div>
    </>
  )
}

export default PlayList