import React from 'react';
import { Container, P, Icon, Line } from './styles';
import { ModalImg } from '../../atoms/';

function ModalCard() {
  return (
    <Container>
      <P>Pedido realizado com sucesso!</P>
      <Icon>
        <Line />
        <ModalImg />
      </Icon>
    </Container>
  );
}

export default ModalCard;
