import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import LogoTitle from '~/components/LogoTitle';

import { Container, Box, Header, Title, Time, Content, Answer } from './styles';

export default function Details({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');

  const formattedTime = useMemo(() => {
    return formatRelative(parseISO(helpOrder.createdAt), new Date(), {
      locale: pt,
    });
  }, [helpOrder.createdAt]);

  return (
    <Background>
      <Container>
        <Box>
          <Header>
            <Title>Pergunta</Title>
            <Time>{formattedTime}</Time>
          </Header>
          <Content>{helpOrder.question}</Content>
          {helpOrder.answer && (
            <Answer>
              <Title>Resposta</Title>
              <Content>{helpOrder.answer}</Content>
            </Answer>
          )}
        </Box>
      </Container>
    </Background>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  headerTitle: props => <LogoTitle {...props} />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});
