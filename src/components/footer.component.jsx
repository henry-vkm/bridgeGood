import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="mt-[150px] max-w-[1240px] w-full mx-auto">
      <Image src="/assets/BridgeGood.png" width={126} height={20} alt="bridgeGood"/>
      <div className="flex gap-[15px] mt-[10px] items-center">
        <a className="cursor-pointer">
          <Image src="/assets/facebook.svg" width={35} height={35}/>
        </a>
        <a className="cursor-pointer">
          <Image src="/assets/instagram.svg" width={44} height={44} />
        </a>
        <a className="cursor-pointer">
          <Image src="/assets/linkedIn.svg" width={44} height={44} />
        </a>
      </div>
      <div className="text-[16px] text-400 mt-[50px]">@Copyright BridgeGood 2024</div>
    </div>
  )
}

export default Footer