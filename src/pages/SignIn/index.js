import React from 'react';

import Background from '~/components/Background';
import Button from '~/components/Button';
import logo from '~/assets/images/logo-vertical.png';

import { Container, Logo, TInput } from './styles';

export default function SignIn() {
  return (
    <Background loggedout>
      <Container>
        <Logo source={logo} />
        <TInput
          placeholder="Informe seu ID de cadastro"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <Button>Entrar no sistema</Button>
      </Container>
    </Background>
  );
}
