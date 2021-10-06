import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import peoplewithballoons from '../assets/peoplewithballoons.png';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Download: NextPage = () => {
  return (
    <Base>
      <Section noPaddingTop bgColor="lightbeige">
        <Wrapper>
          <div className="grid md:grid-cols-2 md:items-center gap-10 pt-10 md:mt-0">
            <div className="max-w-lg order-2 md:order-1">
              <h3 className="mb-2">
                <strong>Super dat je Goodplace wilt downloaden!</strong>
              </h3>
              <p className="mb-8">
                De app is bijna klaar en zal zo snel mogelijk in de app store
                verschijnen. Wil je op de hoogte blijven en de eerste zijn die
                de app kan downloaden? Houd Goodplace in de gaten op onze social
                media!
              </p>
            </div>
            <div className="order-1 md:order-2 m-auto md:m-0 w-2/3 md:w-full">
              <Image alt="peoplewithballons" src={peoplewithballoons} />
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Download;
