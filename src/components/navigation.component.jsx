import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="max-w-[1260px] mx-auto">
      <div className="flex justify-between m-5 items-center">
        <div className="cursor-pointer">
          <Link href="../">
            <Image src="/assets/BridgeGood.png" width={126} height={20} alt="bridgeGood" />
          </Link>
        </div>
        <div className="flex justify-between gap-[50px] items-center">
          <a href="/careerDiscovery" className="cursor-pointer">Career Discover</a>
          <a href="/careerPathway" className="cursor-pointer">Career Pathway</a>
          <button className="bg-[#C7932D] px-[30px] py-[10px] text-white rounded-[5px]">
            <Link href="/profile">Log In</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navigation