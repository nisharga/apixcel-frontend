import React, { useState } from 'react' 
import ModalBox from './ModalBox';
import Payment from '../UI/Payment';

const PaymentModal = () => {
    const [open, setOpen] = useState(false);
  return (
    <ModalBox 
    btnLabel="Upgrade to Pro"
    modalWidth={560}
    ModalBtnClass="!px-16 py-2 px-10 bg-[#3B3B3B] text-base font-semibold rounded-full transition duration-300 hover:duration-500 hover:scale-105 text-[#fff]"
    setOpen={setOpen}
    open={open}
  >
      <Payment setOpen={setOpen}/>
    </ModalBox> 
  )
}

export default PaymentModal