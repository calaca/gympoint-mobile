import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import PageTitle from '~/components/PageTitle';

import { Container } from './styles';

export default function Details({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');
  return (
    <Background>
      <PageTitle back />
      <Container>
        <Text>{helpOrder.id}</Text>
      </Container>
    </Background>
  );
}
