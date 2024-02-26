 
import { useState } from "react";
import ModalBox from "../ModalBox/ModalBox";
import SignIn from "../UI/SignIn";
import SignUp from "../UI/SignUp";
import SignInModal from "../ModalBox/SignInModal";
import SignUpModal from "../ModalBox/SignUpModal";
// import HeaderLoginUser from "../UI/HeaderLoginUser";

const Header = () => {
 

  return (
    <div className="px-12 pt-8 bg-[#1E1E1E]">
        <div className="flex justify-between">
            <div className="text-3xl font-semibold text-white">Welcome to fauget music services</div> 
            <div className="flex gap-4"> 
              <SignInModal/>
              <SignUpModal /> 
            </div>     
        </div>   


            {/* <HeaderLoginUser/> */}


    </div>
  )
}

export default Header