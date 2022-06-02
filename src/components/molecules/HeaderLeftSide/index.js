import React from 'react';
import { Container } from './styles';
import { Menu } from '../../atoms';

function HeaderLeftSide() {
  return (
    <Container>
      <React.Fragment>
        <Menu />
      </React.Fragment>
    </Container>
  );
}

export default HeaderLeftSide;
