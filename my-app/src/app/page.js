'use client'

import { useState } from 'react';
import { IoRemoveOutline } from "react-icons/io5";

import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Social from './components/Social.js';

export default function Home() {

  const [onSection, setOnSection] = useState([1,0,0]);

  const Navigation = () => {

    return (
      <div className = 'Invis'>
        <div className = 'py-10'>
          <button className = 'flex flex-row items-center HoverNav text-sm'
                  onClick = {()=>setOnSection([1,0,0])}>
            <IoRemoveOutline size = {50} /> ABOUT               
          </button>
          <button className = 'flex flex-row items-center HoverNav text-sm' onClick = {()=>setOnSection([0,1,0])}>
            <IoRemoveOutline size = {50} /> EXPERIENCE
          </button>
          <button className = 'flex flex-row items-center HoverNav text-sm' onClick = {()=>setOnSection([0,0,1])}>
            <IoRemoveOutline size = {50} /> PROJECTS          
          </button>
        </div>
      </div>
    );

  }

	return (
		<div className = 'flexContainer'>
			<div className = 'leftPage'>
        <div className = 'leftInner'>
          <div className = 'flex flex-col p-5'>
            <div className = 'Name font-bold py-2'>
              Jianhong Li
            </div>  
            <div className = 'Role OrangeFont font-bold pb-4'>
              Full-Stack Developer
            </div>
            <div className = 'Description SlateFont'>
              Aspired software developer at the University of Michigan.
            </div>
            
            <Navigation />  
            <Social/>
          </div>
        </div>

      </div>

			<div className = 'rightPage px-5 space-y-20'>
        <div className = 'flex flex-col'>
          <div className = 'OrangeFont font-bold text-sm pb-8'>
            ABOUT
          </div>
          <div className = 'SlateFont text-base'>
            Hi, this is Jian Hong Li. I&apos;m currently studying computer science at the University of Michigan.
            Don&apos;t worry, I&apos;m not going to write big paragraphs here. I started coding Sophomore year of High School
            and continued since. I enjoy both learning and making interesting projects. My career interest is
            ML, cybersecuity, Web Dev and Game Dev.
          </div>
        </div>

        <Experience />
        <Projects />
        <br/><br/><br/>
      </div>
		</div>
  );
}
