import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import PageTitle from '~/components/PageTitle';

import { Container } from './styles';

export default function New() {
  return (
    <Background>
      <PageTitle back />
      <Container>
        <Text>New</Text>
      </Container>
    </Background>
  );
}
