import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Background from '~/components/Background';
import Button from '~/components/Button';
import logo from '~/assets/images/logo-vertical.png';

import { Container, Logo, TInput } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState();

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background loggedout>
      <Container>
        <Logo source={logo} />
        <TInput
          placeholder="Informe seu ID de cadastro"
          autoCorrect={false}
          keyboardType="numeric"
          value={id}
          onChangeText={setId}
        />
        <Button onPress={handleSubmit}>Entrar no sistema</Button>
      </Container>
    </Background>
  );
}
