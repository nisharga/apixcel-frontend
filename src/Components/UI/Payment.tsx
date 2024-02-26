import { FC } from 'react';
import Logo from './../Reusable/Logo';
import { FormInput, Forms } from '../Forms';
import { SubmitHandler  } from "react-hook-form";
import RoundedBtn from '../Reusable/RoundedBtn';
import Link from 'next/link';
import toast from 'react-hot-toast'; 


interface IProps{
    setOpen: any; 
}

const Payment:FC<IProps> = ({ setOpen }) => {
    const onSubmit: SubmitHandler<any> = async (data: any) => {
      if(data?.password !== data?.confirm_password){
        toast.error('Password not matched with confirm password');
      }
      else if(data?.email === undefined ||  data?.password === undefined || data?.confirm_password === undefined){
        toast.error('Please fill out all the fields');
      }


      fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                "email": data?.email,
                "password": data?.password,
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            toast.success(data?.msg);
            console.log("Success:", data);
            setOpen(false); 
            toast.success("Now Sign In Your Account");
        })
        
        .catch((error) => {
            console.error("Error:", error);
        });

      };
      
      
    return (
        <div className='px-16'>
              <div className="text-center">
                <div className="w-full mt-3"><div className="w-1/3 mx-auto"><Logo /></div></div>
                <h2 className="text-2xl md:text-4xl text-white py-8">Subscription Plan</h2>
             </div>
            
            

            <div className="flex items-center justify-end">
              <RoundedBtn
              className="!bg-[#060606]"
              onClick={() => setOpen(false)}
              >Close</RoundedBtn>
            </div>

        </div>
    );
};

export default Payment;