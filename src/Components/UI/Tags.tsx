 
import { TagsAll } from '@/static';
import RoundedBtn from './../Reusable/RoundedBtn';

const Tags = () => {
    
  return (
    <div className="flex gap-2.5 flex-col md:flex-row">
        {
            (TagsAll ?? []).map((tagdata) => (
                <RoundedBtn key={tagdata.id}>{tagdata?.tag}</RoundedBtn>
            ))
        }
    </div>
  )
}

export default Tags