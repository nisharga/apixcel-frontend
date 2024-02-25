/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Avater from "../Reusable/Avater"
import { Mic, Search } from "../Icons";

 

const HeaderLoginUser = () => {
    const [inputValue, setInputValue] = useState("");
  
    const [debouncedInputValue, setDebouncedInputValue] = useState("")
    console.log(inputValue, debouncedInputValue)
  
    const handleInputChange = (event: any) => {
      setInputValue(event.target.value);
   }
   
   useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 500]);
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-2xl md:text-3xl font-semibold text-white">Welcome,claudia Alvies</div> 
            <div className="mt-5 md:mt-0 ">
              <div className="flex gap-5 items-center">
                <div className="relative">
                    <div className="absolute left-0 pl-3 top-3"><Search/></div>
                      <input type="text" placeholder="Artist, Music, Album, Etc" 
                      className="text-base font-semibold bg-[#3B3B3B] py-2 px-10 rounded-full" 
                      value={inputValue} onChange={handleInputChange}
                      />;
                    <div className="absolute right-0 pr-8 md:pr-5 top-3 pointer"><Mic /></div>
                  </div>
                  <div className="">
                    <Avater src="https://i.ibb.co/6H1wqfg/Ellipse-5.png"
                    imageClass="w-10 h-10 min-w-[40px]"
                    />
                  </div>
              </div>  
              </div> 
        </div>
  )
}

export default HeaderLoginUser