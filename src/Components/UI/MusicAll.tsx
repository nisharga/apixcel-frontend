import { musicImage } from '@/static'
import React from 'react'

const MusicAll = () => {
  return (
    <div className="mt-6">
       {
    (musicImage ?? []).map((music) => (
        <div key={music.id}>Hi</div>
    ))
}
    </div>
  )
}

export default MusicAll