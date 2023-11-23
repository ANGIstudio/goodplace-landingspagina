import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import coverimage from '../assets/campaign.jpeg';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Nieuws: NextPage = () => {
  return (
    <Base>
      <Section>
        <Wrapper>

            <div className="text-center">
              <h2 className=" mb-12 text-darkgreen font-black md:text-5xl text-4xl">
                Nieuws
              </h2>
            </div>

        <div className="flex md:flex-row flex-col bg-darkgreen border border-darkestgreen-200 rounded-lg shadow mb-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <div className=''>
            <a href="#">
              <Image className="" src={coverimage} alt="" />
            </a>
            </div>

            
            <div className="p-10">
            <a href="#">
              <h5 className="mb-2 text-3xl font-extrabold tracking-tight text-lightgreen">Noteworthy technology acquisitions 2021</h5>
              <h6 className="mb-2 text-lg font-semibold tracking-tight text-lightgreen">02 nov 2023</h6>
              <p className="mb-3 mt-12 font-normal text-lightgreen">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </a>
            </div>
            
          
          </div>


          <div className="flex md:flex-row flex-col justify-between space-x-8">

          <div className="max-w-sm bg-darkgreen border border-gray-200 rounded-lg shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a href="#">
            <Image className="rounded-t-lg" src={coverimage} alt="" />
            <div className="p-5">
              <h5 className="text-2xl font-extrabold tracking-tight text-lightgreen">Noteworthy technology acquisitions 2021</h5>
              <h6 className="mb-4 text-lg font-normal tracking-tight text-lightgreen">02 nov 2023</h6>
              <p className="mb-3 font-normal text-lg leading-7 text-lightgreen">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            </a>
          </div>

          <div className="max-w-sm bg-darkgreen border border-gray-200 rounded-lg shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a href="#">
            <Image className="rounded-t-lg" src={coverimage} alt="" />
            <div className="p-5">
              <h5 className="text-2xl font-extrabold tracking-tight text-lightgreen">Noteworthy technology acquisitions 2021</h5>
              <h6 className="mb-4 text-lg font-normal tracking-tight text-lightgreen">02 nov 2023</h6>
              <p className="mb-3 font-normal text-lg leading-7 text-lightgreen">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            </a>
          </div>

          <div className="max-w-sm bg-darkgreen border border-gray-200 rounded-lg shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a href="#">
            <Image className="rounded-t-lg" src={coverimage} alt="" />
            <div className="p-5">
              <h5 className="text-2xl font-extrabold tracking-tight text-lightgreen">Noteworthy technology acquisitions 2021</h5>
              <h6 className="mb-4 text-lg font-normal tracking-tight text-lightgreen">02 nov 2023</h6>
              <p className="mb-3 font-normal text-lg leading-7 text-lightgreen">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            </a>
          </div>

          </div>



          
        </Wrapper>
      </Section>

    </Base>
  );
};

export default Nieuws;
