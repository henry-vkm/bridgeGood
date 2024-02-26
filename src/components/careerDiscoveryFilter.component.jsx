import React from 'react'

const Filter = () => {
  return (
    <div>
      <h1 className="text-[24px]">
        Filter
      </h1>
      <div className="mt-[10px]">
        <h1 className="text-[18px] mb-[5px]">
          Job Location
        </h1>
        <div className="mt-[5px]">
          <input type="checkbox" name="remote" />
          <label className="pl-[10px]" for="remote">Remote</label>
        </div>
        <div className="mt-[5px]">
          <input type="checkbox" name="onSite" />
          <label className="pl-[10px]" for="onSite">On Site</label>
        </div>
      </div>
      <div className="mt-[10px]">
        <h1 className="text-[18px] mb-[5px]">
          Experience Level
        </h1>
        <div className="mt-[5px]">
          <input type="checkbox" name="entry" />
          <label className="pl-[10px]" for="entry">Entry Level</label>
        </div>
        <div className="mt-[5px]">
          <input type="checkbox" name="intermediate" />
          <label className="pl-[10px] text-400" for="intermediate">Intermediate</label>
        </div>
        <div className="mt-[5px]">
          <input type="checkbox" name="expert" />
          <label className="pl-[10px]" for="expert">Expert</label>
        </div>
      </div>
    </div>
  )
}

export default Filter