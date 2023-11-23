import React from 'react';

import { NextPage } from 'next';

import { Section } from '../../components/Section/Section';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Base } from '../../templates/Base';

const Post_1: NextPage = () => {
  return (
    <Base>
      
        
        <Section noPaddingBottom noPaddingTop>
          <div className="min-h-96 bg-campaigntemplate bg-fixed bg-cover bg-blend-overlay bg-black/20 bg-no-repeat">
        
          <Wrapper>
            <h1 className='pt-48 text-center font-extrabold text-green'>TITEL</h1>
            <h2 className='pb-36 pt-16 text-center font-bold text-green'>SUBTITEL / beschrijving</h2>
          </Wrapper>
        </div>
      </Section>
      <section>
        <Wrapper>
          
        <div className="my-16 text-center">
              <p>Inleiding</p>
              <h2 className=" mb-12 text-darkgreen font-black md:text-5xl text-4xl">
                Eerste alinea titel
              </h2>
              <p>alinea 1</p>

            </div>

        </Wrapper>
      </section>

      

    </Base>
  );
};

export default Post_1;
