import React from 'react';
import { Container, P, Square, Div, ShopDiv } from './styles';
import { Card } from '../../atoms/';
import ShopItems from '../../atoms/ShopItems';

function ContrastCard() {
  return (
    <React.Fragment>
      <Container>
        <Div>
          <Card />
        </Div>
        <P>
          <Square src={require('../../../img/Group 6.png')} />
          Produtos em Destaque
        </P>
        <ShopDiv>
          <ShopItems />
          <ShopItems />
          <ShopItems />
        </ShopDiv>
      </Container>
    </React.Fragment>
  );
}

export default ContrastCard;
