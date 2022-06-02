import React from 'react';
import {
  Container,
  CardItem,
  Img,
  Name,
  Price,
  Button,
} from './styles';

const buy = function () {
  return;
};

export function ShopItems() {
  return (
    <Container>
      <CardItem>
        <Img />
        <Name>Jogos</Name>
        <Price>R$ 200,00</Price>
        <Button onClick={buy}>COMPRAR</Button>
      </CardItem>
    </Container>
  );
}

export default ShopItems;
