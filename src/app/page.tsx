 import BannarMusic from '@/Components/UI/BannarMusic'; 
import MusicAll from '@/Components/UI/MusicAll'; 
import Tags from '@/Components/UI/Tags';    
import { useGetSingleTotoQuery } from '@/redux/api/driverApi';

export default function Home() { 
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
        <BannarMusic />
      <Tags />
      <MusicAll />
        </div>
      </div>
    </div>
  );
}
