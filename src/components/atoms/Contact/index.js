import React from 'react';

import { Container, Icon, P } from './styles';

export function Contact() {
  return (
    <Container>
      <Icon src={require('../../../img/paper-plane.png')} />
      <P>Contato</P>
    </Container>
  );
}

export default Contact;
