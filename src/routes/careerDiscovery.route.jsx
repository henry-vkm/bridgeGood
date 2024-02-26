import Search from '@/components/search.component';
import React from 'react';
import Filter from '../components/careerDiscoveryFilter.component';
import CareerDiscoveryCard from '@/components/careerDiscoveryCard.component';
import Footer from '@/components/footer.component';

const CareerDiscoveryBody = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-[#242E6B] rounded-[15px] w-full h-[220px]">
          <div className="relative bottom-[-165px]">
            <Search />
          </div>
        </div>
        <div className="flex mt-[100px] justify-between gap-[10px]">
          <div className="w-[45%]">
            <Filter/>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[24px] mb-[10px]">Featured Jobs</h1>
            <CareerDiscoveryCard />
            <CareerDiscoveryCard />
            <CareerDiscoveryCard />
            <CareerDiscoveryCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareerDiscoveryBody;