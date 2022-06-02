import React from 'react';
import { Container } from './styles';
import { Logo } from '../../atoms';

function FooterLeftSide() {
  return (
    <Container>
      <React.Fragment>
        <Logo />
      </React.Fragment>
    </Container>
  );
}

export default FooterLeftSide;
