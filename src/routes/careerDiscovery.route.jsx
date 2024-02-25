import Search from '@/components/search.component';
import React from 'react';
import Filter from '../components/careerDiscoveryFilter.component';

const CareerDiscoveryBody = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-[#242E6B] rounded-[15px] w-full h-[220px]">
          <div className="relative bottom-[-165px]">
            <Search />
          </div>
        </div>
        <div>
          <Filter/>
        </div>
      </div>
    </div>
  )
}

export default CareerDiscoveryBody;