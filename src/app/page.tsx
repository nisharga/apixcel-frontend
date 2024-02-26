 "use client"
 import BannarMusic from '@/Components/UI/BannarMusic'; 
 import BannarPremium from '@/Components/UI/BannarPremium'; 
import MusicAll from '@/Components/UI/MusicAll'; 
import Tags from '@/Components/UI/Tags';     
import { useEffect, useState } from "react";

export default function Home() { 
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => { 
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
}, []);
const handleLogout = () => { 
  localStorage.removeItem('token');
  // Reset token state
  setToken(null);
};

  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
        {token ? <BannarPremium /> : <BannarMusic />}
        <Tags />
        <MusicAll /> 
        </div>
      </div>
    </div>
  );
}
