import { FC } from 'react';
import Logo from './../Reusable/Logo';
import { FormInput, Forms } from '../Forms';
import { SubmitHandler  } from "react-hook-form";
import RoundedBtn from '../Reusable/RoundedBtn'; 
import toast from 'react-hot-toast';


interface IProps{
    setOpen: any; 
}

const SignIn:FC<IProps> = ({ setOpen }) => {
    const onSubmit: SubmitHandler<any> = async (data: any) => {
      if(data?.email === undefined ||  data?.password === undefined){
        toast.error('Please fill out all the fields');
      }
 
      fetch("http://localhost:3000/api/login", {
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
            setOpen(false);
            toast.success(data?.msg);
            localStorage.setItem("token", data?.token);

            setTimeout(() => {
              window.location.reload();
            }, 3000);
            
        }) 
        .catch((error) => {
            console.error("Error:", error);
        });

      };
      
      
    return (
        <div className='px-16'>
              <div className="text-center">
                <div className="w-full mt-3"><div className="w-1/3 mx-auto"><Logo /></div></div>
                <h2 className="text-2xl md:text-4xl text-white py-8">Sign In</h2>
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
                
                <RoundedBtn className="!bg-[#060606] py-2 mt-3" type="submit">Log In</RoundedBtn>

                <p className='text-lg mt-4 pb-4'> Donot have account? Create an account <button className="font-semibold text-[#040404] ml-1">signup</button> </p>

              </Forms>
            </div>
        </div>
    );
};

export default SignIn;