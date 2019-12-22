import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import PageTitle from '~/components/PageTitle';

import { Container } from './styles';

export default function HelpOrders() {
  return (
    <Background>
      <PageTitle />
      <Container>
        <Text>Pedir ajuda</Text>
      </Container>
    </Background>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
