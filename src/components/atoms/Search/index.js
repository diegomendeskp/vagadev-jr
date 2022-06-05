import React from 'react';
import { Container, Icon, P } from './styles';

export function Search() {
  return (
    <Container>
      <Icon src={require('../../../img/search-solid.png')} />
      <P>Busca</P>
    </Container>
  );
}

export default Search;
