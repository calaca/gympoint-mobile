import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import PageTitle from '~/components/PageTitle';

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
      <PageTitle back />
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
