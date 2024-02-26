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

const SignUp:FC<IProps> = ({ setOpen }) => {
    const onSubmit: SubmitHandler<any> = async (data: any) => {
      if(data?.password !== data?.confirm_password){
        toast.error('Password not matched with confirm password');
      }
      else if(data?.email === undefined ||  data?.password === undefined || data?.confirm_password){
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
            console.log("Success:", data);
            toast.success(data?.msg);
        })
        
        .catch((error) => {
            console.error("Error:", error);
        });

      };
      
      
    return (
        <div className='px-16'>
              <div className="text-center">
                <div className="w-full mt-3"><div className="w-1/3 mx-auto"><Logo /></div></div>
                <h2 className="text-2xl md:text-4xl text-white py-8">Sign up</h2>
             </div>
            
            <div>
              <Forms submitHandler={onSubmit}>
                <label className="text-lg font-semibold text-white">Email:</label>
                <FormInput
                    name="email"
                    type="email"
                    size="large"
                    placeholder="example@mail.com"
                    className="bg-[#0C0C0C] hover:bg-[#0C0C0C] focus:bg-[#0C0C0C] text-white py-2 px-3 placeholder:text-white border-none my-3"
                />
                
                <label className="text-lg font-semibold text-white">Password:</label>
                <FormInput
                    name="password"
                    type="password"
                    size="large"
                    placeholder=".........."
                    className="bg-[#0C0C0C] hover:bg-[#0C0C0C] focus:bg-[#0C0C0C] text-white py-2 px-3 placeholder:text-white border-none my-3"
                />
                
                <label className="text-lg font-semibold text-white">Confirm Password:</label>
                <FormInput
                    name="confirm_password"
                    type="password"
                    size="large"
                    placeholder=".........."
                    className="bg-[#0C0C0C] hover:bg-[#0C0C0C] focus:bg-[#0C0C0C] text-white py-2 px-3 placeholder:text-white border-none my-3"
                />

                <RoundedBtn className="!bg-[#060606] py-2 mt-3" type="submit">Create an account</RoundedBtn>

                <p className='text-lg mt-4 pb-4'> Have account? Sign in  account <button className="font-semibold text-[#040404] ml-1">signin</button> </p>

              </Forms>
            </div>
        </div>
    );
};

export default SignUp;