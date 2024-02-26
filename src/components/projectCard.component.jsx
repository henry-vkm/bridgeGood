import React from 'react';
import Image from 'next/image';

import Projects from '../database/projects.json';

const ProjectCard = ({ projectName }) => {

  const projectDetails = Projects[projectName]

  return (
    <div className="max-w-[560px] border-solid border-[1px] border-black rounded-[10px]  flex flex-col gap-[5px]">

      <Image src="/assets/project1.png" width={1280} height={720} className="w-full rounded-xl"/>
      
      <div className="px-[20px] py-[15px]">
        <div className="flex gap-[10px] ">
          <Image src="/assets/project-icon.png" width={24} height={24} alt="icon" />
          <span>Title</span>
        </div>

        <div className="flex mt-2">  
          <div className="rounded-md text-[12px] px-2 bg-orange-200">Game Development</div>
        </div>

        <p className="text-[14px] mt-[5px]">
          Graphic Designer Career Path offers a simple, intuitive roadmap to guide you step by step. From mastering design fundamentals to specializing in areas like branding and web design, our curriculum equips you with the skills needed to succeed. 
        </p>

        <a href="https://www.github.com" target="_blank">
          <div className="flex h-[20px] mt-4 gap-2">
            <div className="aspect-square"><Image src="/assets/github.png" width={128} height={128}/></div>
            <p className="text-[14px]">View Source Code</p>
          </div>
        </a>
      
      </div>
      
    </div>
  )
}

export default ProjectCard;