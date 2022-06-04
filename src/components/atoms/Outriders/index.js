import React, { useState } from 'react';
import styled from 'styled-components';
import { useModalContext } from '../../../context';

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

export function Outriders() {
  const { toggleModal } = useModalContext();

  const [isBought, setIsBought] = useState(false);
  const buyItem = () => {
    toggleModal(true);
    setIsBought(true);
  };

  return (
    <Container>
      <CardItem>
        <Img src={require('../../../img/product-outriders.png')} />

        <ProductInfo>
          <Name>Outriders</Name>
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

export default Outriders;
