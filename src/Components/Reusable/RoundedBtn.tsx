import React, { FC } from "react"

 
interface Iprops{
    children: React.ReactNode | string | any;
    className?: string;
    onClick?: () => void;
    type?: any;
}
const RoundedBtn:FC<Iprops> = ({children, className, onClick, ...rest}) => {
  return (
    <button
        className={`${className} py-2 px-10 bg-[#3B3B3B] text-base font-semibold rounded-full transition duration-300 hover:duration-500 hover:scale-105 text-[#fff]`}
        onClick={onClick}
        {...rest}
    >{children}</button>
  )
}

export default RoundedBtn