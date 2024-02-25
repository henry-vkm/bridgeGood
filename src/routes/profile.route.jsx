import React from 'react';
import Image from 'next/image';

import ProjectCard from '@/components/projectCard.component';
import CareerPathwayCard from '@/components/careerPathwayCard.component';

const ProfileBody = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center gap-[100px] mt-[50px]">
          <div className="flex flex-col justify-start w-[700px]">
            <h1 className="text-[50px] font-bold ml-[-3px]">
              Your Profile
            </h1>
            <h2 className="text-[24px]">👋{'  '}Hey, Lance Ruiz</h2>
          </div>
          <div>
            <Image src="/assets/profile.png" width={720} height={254} alt="profileAvatar" />
          </div>
          
        </div>

        <div className="bg-white h-[400px] rounded-lg border-[1px] border-black">
          <h1>Lance Ruiz</h1>
        </div>

        <div className="flex gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> 
        </div>
      </div>
    </div>
  )
}

export default ProfileBody;