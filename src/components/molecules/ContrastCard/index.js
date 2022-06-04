import React from 'react';
import { Container, P, Square, Div, ShopDiv } from './styles';
import { Card } from '../../atoms/';
import Outriders from '../../atoms/Outriders';
import Cyberpunk from '../../atoms/Cyberpunk';
import DonkeyKong from '../../atoms/DonkeyKong';

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
          <Outriders />
          <Cyberpunk />
          <DonkeyKong />
        </ShopDiv>
      </Container>
    </React.Fragment>
  );
}

export default ContrastCard;
