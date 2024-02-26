import React from 'react'

const Input = ({ label, textarea=false, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <label>{label}</label>
      <input className="py-[20px] px-[25px] border rounded-[5px] w-[100%]" {...otherProps} />
    </div>
  )
}

export default Input;