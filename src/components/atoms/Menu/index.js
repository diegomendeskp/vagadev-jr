import { useState } from 'react';
import React from 'react';
import {
  Container,
  Button,
  Div,
  List,
  Link,
  Span,
  Icon,
  Square,
} from './styles';

export function Menu() {
  return (
    <Container>
      <Button>
        <Icon src={require('../../../img/icon_hamburguer.png')} />{' '}
      </Button>

      <Div>
        <Square />

        <List>
          <li>
            <Span>Luta</Span>
          </li>
          <li>
            <Link href="#">Mortal Kombat</Link>
          </li>
          <li>
            <Link href="#">Smash Bros</Link>
          </li>
          <li>
            <Link href="#">Killer Instict</Link>
          </li>
          <li>
            <Link href="#">DBZ Kakarot</Link>
          </li>
        </List>

        <List>
          <li>
            <Span>Ação / Aventura</Span>
          </li>
          <li>
            <Link href="#">GTA V</Link>
          </li>
          <li>
            <Link href="#">Tomb Raider</Link>
          </li>
          <li>
            <Link href="#">Halo</Link>
          </li>
          <li>
            <Link href="#">Call of Duty</Link>
          </li>
        </List>

        <List>
          <li>
            <Span>Corrida</Span>
          </li>
          <li>
            <Link href="#">Need for speed</Link>
          </li>
          <li>
            <Link href="#">Forza Horizon</Link>
          </li>
        </List>
      </Div>
    </Container>
  );
}

export default Menu;
