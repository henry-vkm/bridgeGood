import React from 'react';
import Input from './input.component';

const SignIn = () => {
  return (
    <div>
      <h1 className="text-[30px] font-medium mb-[10px]">Already have an account? Sign In!</h1>
      <form className=" mt-[10px] flex flex-col gap-5">
        <div>
          <Input placeholder="Email" label="Email Address" type="email"/>
        </div>
        <div>
          <Input placeholder="Password" label="Password" type="password"/>
        </div>
        <button className="py-[15px] bg-[#242E6B] justify-start w-[30%] rounded-[5px] text-white mt-[10px]">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn