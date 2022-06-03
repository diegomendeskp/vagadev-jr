import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Container,
  CardItem,
  Img,
  Name,
  Price,
  Button,
  Mario,
  SecundaryButton,
  ProductInfo,
} from './styles';

export function ShopItems() {
  const [isBought, setIsBought] = useState(false);
  const buyItem = () => {
    setIsBought(true);
  };

  return (
    <Container>
      <CardItem>
        <Img src={require('../../../img/product-outriders.png')} />

        <ProductInfo>
          <Name>Jogos</Name>
          <Price>R$ 200,00</Price>
        </ProductInfo>
        {isBought ? (
          <SecundaryButton>comprado!</SecundaryButton>
        ) : (
          <Button onClick={buyItem}>comprar</Button>
        )}
        <Mario
          isVisible={isBought}
          src={require('../../../img/image_6-removebg-preview 1.png')}
        />
      </CardItem>
    </Container>
  );
}

export default ShopItems;
