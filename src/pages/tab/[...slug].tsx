import React, { useEffect } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Section } from '../../components/Section/Section';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Base } from '../../templates/Base';

const TabSlug: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <Base>
      <Section bgColor="lightbeige">
        <Wrapper />
      </Section>
    </Base>
  );
};

export default TabSlug;
