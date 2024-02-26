import React, { useState } from 'react'
import SignUp from '../UI/SignUp'; 
import ModalBox from './ModalBox';

const SignUpModal = () => {
    const [open, setOpen] = useState(false);
  return (
    <ModalBox 
    btnLabel="Sign Up"
    modalWidth={560}
    ModalBtnClass="!px-16 py-2 px-10 bg-[#3B3B3B] text-base font-semibold rounded-full transition duration-300 hover:duration-500 hover:scale-105 text-[#fff]"
    setOpen={setOpen}
    open={open}
  >
      <SignUp setOpen={setOpen}/>
    </ModalBox> 
  )
}

export default SignUpModal