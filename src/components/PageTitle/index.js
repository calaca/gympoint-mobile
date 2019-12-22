import React from 'react';

import logo from '~/assets/images/logo-horizontal.png';

import { Container, Logo } from './styles';

export default function PageTitle() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
