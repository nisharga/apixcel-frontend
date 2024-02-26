import React, { useState } from 'react'
import ModalBox from './ModalBox';
import SignIn from '../UI/SignIn';

const SignInModal = () => {
    const [open, setOpen] = useState(false);
  return (
              <ModalBox 
                btnLabel="Sign In"
                modalWidth={560}
                ModalBtnClass="!bg-[#060606] !px-16 py-2 px-10 bg-[#3B3B3B] text-base font-semibold rounded-full transition duration-300 hover:duration-500 hover:scale-105 text-[#fff]"
                setOpen={setOpen}
                open={open}
              >
                <SignIn setOpen={setOpen}/>
                </ModalBox> 
  )
}

export default SignInModal