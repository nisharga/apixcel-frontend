 
import { useState, useEffect } from "react";
import ModalBox from "../ModalBox/ModalBox";
import SignIn from "../UI/SignIn";
import SignUp from "../UI/SignUp";
import SignInModal from "../ModalBox/SignInModal";
import SignUpModal from "../ModalBox/SignUpModal";
import HeaderLoginUser from "../UI/HeaderLoginUser";

const Header = () => { 
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    // Retrieve token from localStorage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
}, []);
const handleLogout = () => {
  // Remove token from localStorage
  localStorage.removeItem('token');
  // Reset token state
  setToken(null);
};
  return (
    <div className="px-12 pt-8 bg-[#1E1E1E]">
            
            { 
            token ? <HeaderLoginUser/> : <div className="flex justify-between">
          <div className="text-3xl font-semibold text-white">Welcome to fauget music services</div> 
          <div className="flex gap-4"> 
            <SignInModal/>
            <SignUpModal /> 
          </div>     
         </div>
          } 
    </div>
  )
}

export default Header