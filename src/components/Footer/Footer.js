import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+977- 986-855-1045">+977- 986-855-1045</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:saudmohit@gmail.com">
            saudmohit@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating with more coding</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons
            href="https://www.github.com/manutdmohit"
            target="_blank"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons
            href="https://www.linkedin.com/in/mohitsaud/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://twitter.com/mohit_saud" target="_blank">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
