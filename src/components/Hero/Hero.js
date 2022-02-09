import React from 'react';
import Link from 'next/link';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        Believe In: "Success That Comes After The Hardwork Gives The Best
        Taste."
      </SectionText>
    </LeftSection>

    <Button onClick={() => (window.location = 'mailto:saudmohit@gmail.com')}>
      Learn More
    </Button>
  </Section>
);

export default Hero;
