import React from 'react';
import { Container, Icon } from './styles';

export function Bag() {
  return (
    <Container>
      <Icon src={require('../../../img/shopping-bag-solid.png')} />
    </Container>
  );
}

export default Bag;
