import React from 'react';
import { Container, Icon } from './styles';

export function Search() {
  return (
    <Container>
      <Icon src={require('../../../img/search-solid.png')} />
      <p>Busca</p>
    </Container>
  );
}

export default Search;
