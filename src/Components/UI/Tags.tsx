 
import RoundedBtn from './../Reusable/RoundedBtn';

const Tags = () => {
    const tags = [
        {
            id: 1,
            tag: "For You"
        },  
        {
            id: 2,
            tag: "Popular"
        }, 
        {
            id: 3,
            tag: "Trend"
        }, 
        {
            id: 4,
            tag: "Pop"
        }, 
        {
            id: 5,
            tag: "Edm"
        }, 
        {
            id: 6,
            tag: "Rock"
        }, 
        {
            id: 7,
            tag: "More"
        }, 
    ]
  return (
    <div className="flex gap-2.5 flex-col md:flex-row">
        {
            (tags ?? []).map((tagdata) => (
                <RoundedBtn key={tagdata.id}>{tagdata?.tag}</RoundedBtn>
            ))
        }
    </div>
  )
}

export default Tags