"use client"
import PaymentModal from "@/Components/ModalBox/PaymentModal"
import Avater from "@/Components/Reusable/Avater"
import RoundedBtn from "@/Components/Reusable/RoundedBtn"

 
const page = () => {
  return (
    <div>
        <div className="text-lg font-semibold text-white">User profile</div> 
        <div className="flex items-center justify-between">
           <div className="">
            <div className="text-lg font-semibold text-white">Name: <span>Caludia Alvies</span></div>
            <div className="text-lg font-semibold text-white">Email: <span>example@mail.com</span></div>
            
            <div className="mt-5">
            <PaymentModal />
            </div>

           </div>
           <div className="">
              <Avater src="https://i.ibb.co/6H1wqfg/Ellipse-5.png"
              imageClass="w-[220px] h-[220px] min-w-[40px] mb-4"
              />
              <RoundedBtn>Change Photo</RoundedBtn>
            </div>
        </div>


        <p className="text-lg font-semibold text-white mt-5 mb-3">Billing information</p> 
        <p className="text-lg font-semibold text-white">There is no billing information. Please upgrade to pro</p> 
    </div>
  )
}

export default page