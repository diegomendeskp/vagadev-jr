import React from 'react';

import { Container, Icon } from './styles';

export function Contact() {
  return (
    <Container>
      <Icon src={require('../../../img/paper-plane.png')} />
      <p>Contato</p>
    </Container>
  );
}

export default Contact;
