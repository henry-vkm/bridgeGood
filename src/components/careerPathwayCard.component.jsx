import React from 'react';
import Image from 'next/image';

const CareerPathwayCard = () => {
  return (
    <div className="max-w-[600px] border-solid border-[1px] border-black rounded-[10px] px-[20px] py-[15px] flex flex-col gap-[5px]">
      <h1 className="text-[24px]">Graphic Designer</h1>
      <div className="flex gap-[10px]">
        <Image src="/assets/Check.png" width={24} height={24} alt="icon" />
        <span>10 Milestones</span>
      </div>
      <p className="text-[14px] mt-[5px]">
      Graphic Designer Career Path offers a simple, intuitive roadmap to guide you step by step. From mastering design fundamentals to specializing in areas like branding and web design, our curriculum equips you with the skills needed to succeed. 
      </p>
      <button className="px-[30px] py-[15px] bg-[#242E6B] text-white rounded-[3px] flex-start mt-[15px] w-[230px]">Explore Career Path</button>
    </div>
  )
}

export default CareerPathwayCard;