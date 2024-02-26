'use client';

import React from 'react';
import Input from './input.component';
import { signInWithGooglePopup } from '../utils/firebase.util';

const SignUp = () => {
  const signInGoogleUser = async (e) => {
    e.preventDefault();
    await signInWithGooglePopup()
  };

  return (
    <div>
      <h1 className="text-[30px] font-medium mb-[10px]">Don't have an account? Sign Up here!</h1>
      <form className="mt-[10px] flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-8">
          <Input placeholder="First Name" label="First Name" type="text"/>
          <Input placeholder="Last Name" label="Last Name" type="text"/>
        </div>
        <div>
          <Input placeholder="Email" label="Email Address" type="email"/>
        </div>
        <div>
          <Input placeholder="Password" label="Password" type="password"/>
        </div>
        <div>
          <Input placeholder="Confirm Password" label="Confirm Password" type="password"/>
        </div>
        <button className="py-[15px] bg-[#242E6B] justify-start w-[30%] rounded-[5px] text-white mt-[10px]">Sign Up</button>
      </form>
      <button type="button" className="py-[15px] bg-[#242E6B] justify-start w-[30%] rounded-[5px] text-white mt-[10px]" onClick={signInGoogleUser}>Sign In with Google</button>
    </div>
  )
}

export default SignUp