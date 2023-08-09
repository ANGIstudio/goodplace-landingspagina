import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import googleplay from '../assets/google-play-badge.png';
import phones from '../assets/phones.png';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Download: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="grid md:grid-cols-2 md:items-center gap-10">
            <div className="max-w-lg order-2 md:order-1">
              <h3 className="mb-4">
                <strong>
                  Oeps, om dit overzicht te bekijken heb je de Goodplace app
                  nodig.
                </strong>
              </h3>
              <p className="mb-4">
                Als je de app al hebt, pak dan de telefoon of tablet waarop je
                de app hebt geïnstalleerd en klik daarop de link aan die je naar
                deze pagina bracht.
              </p>
              <p className="mb-8">
                Heb je de app nog niet? Download hem dan in de App- of
                Playstore!
              </p>
              <div className="mb-8 flex space-x-3">
                <div>
                  <Link
                    href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
                    passHref
                  >
                    <a>
                      <Image
                        height={41}
                        width={141}
                        alt="googleplay"
                        src={googleplay}
                      />
                    </a>
                  </Link>
                </div>
                <div className=" max-w-xs">
                  <Link
                    href="https://apps.apple.com/nl/app/goodplace/id1573545734"
                    passHref
                  >
                    <a>
                      <Image
                        width={125}
                        height={41}
                        alt="apple-store"
                        src={applestore}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 m-auto md:m-0 w-2/3 md:w-full">
              <Image alt="phones" src={phones} />
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Download;
