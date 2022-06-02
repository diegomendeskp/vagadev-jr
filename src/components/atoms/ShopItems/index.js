import React from 'react';
import {
  Container,
  CardItem,
  Img,
  Name,
  Price,
  Button,
} from './styles';

export function ShopItems() {
  return (
    <Container>
      <CardItem>
        <Img />
        <Name>Jogos</Name>
        <Price>R$ 200,00</Price>
        <Button>COMPRAR</Button>
      </CardItem>
    </Container>
  );
}

export default ShopItems;
