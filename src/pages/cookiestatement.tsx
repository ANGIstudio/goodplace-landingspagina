import React from 'react';

import { NextPage } from 'next';

import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const CookieStatement: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="md:w-2/3">
            <h3 className="break-words mb-4">
              <strong>
                Cookieverklaring van Stichting Goodplace Foundation
              </strong>
            </h3>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default CookieStatement;
