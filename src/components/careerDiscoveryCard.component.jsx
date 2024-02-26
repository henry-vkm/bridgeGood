import React from 'react';
import Image from 'next/image';
import Tag from './tag.component';

const CareerDiscoveryCard = () => {
  return (
    <div className="w-[100%] border-solid border-[1px] border-black rounded-[10px] px-[20px] py-[20px] flex flex-col gap-[5px]">
      <h1 className="text-[24px]">Graphic Designer</h1>
      <div className="flex gap-[10px]">
        <span>Google</span>
        <div className="flex">
          <Image src="/assets/location.svg" width={24} height={24} />
          <span>Fremont, CA</span>
        </div>
      </div>
      <p className="text-[14px] mt-[5px]">
      We are looking for a skilled UI/UX Designer who is passionate about creating elegant and intuitive user interfaces. The ideal candidate will have a keen eye for design aesthetics and a strong understanding of user-centered design principles....      </p>
      <div className="mt-[10px]">
        <Tag>Entry</Tag>
        <Tag>Entry</Tag>
        <Tag>Entry</Tag>
        <Tag>Entry</Tag>
      </div>
    </div>
  )
}

export default CareerDiscoveryCard;