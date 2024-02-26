import React from 'react';
import Image from 'next/image';

const Search = () => {
  return (
    <div>
      <div>
        <Image src="/assets/search.svg" width={24} height={24} />
        <input placeholder="Job Postings"/>
      </div>
      <div>
        <Image src="/assets/location.svg" width={24} height={24} />
        <input placeholder="Location" />
      </div>
      <button>
        Search
      </button>
    </div>
  )
}

export default Search;