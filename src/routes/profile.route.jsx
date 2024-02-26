import React from 'react';
import Image from 'next/image';

import ProjectCard from '@/components/projectCard.component';
import CareerPathwayCard from '@/components/careerPathwayCard.component';

const ProfileBody = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div>
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
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default ProfileBody;