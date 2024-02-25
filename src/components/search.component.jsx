import React from 'react'
import Image from 'next/image'

const Search = () => {
  return (
    <div className="max-w-[765px] max-h-[110px] px-[30px] py-[20px] mx-auto shadow-xl rounded-[10px] bg-white">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex">
            <Image src="/assets/search.svg" width={24} height={24} />
            <input className="ml-[10px] outline-none" placeholder="Job Postings"/>
          </div>
          <div className="flex">
            <Image src="/assets/location.svg" width={24} height={24} />
            <input className="ml-[10px] outline-none" placeholder="Location" />
          </div>
        </div>
        <button className="bg-[#242E6B] px-[60px] py-[15px] rounded-[5px] text-white flex-end">
          Search
        </button>
        </div>
    </div>
  )
}

export default Search;