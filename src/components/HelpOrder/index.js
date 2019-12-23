import React, { useMemo } from 'react';
import { withNavigation } from 'react-navigation';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, Header, Left, Status, Time, Preview } from './styles';

function HelpOrder({ data, theme, navigation }) {
  const formattedTime = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), { locale: pt });
  }, [data.createdAt]);

  return (
    <Container
      onPress={() => {
        navigation.navigate('Details', { helpOrder: data });
      }}
    >
      <Header>
        <Left>
          <Icon
            name="check-circle"
            size={20}
            color={data.answer ? theme.success : theme.textLight}
          />
          <Status answered={data.answer}>
            {data.answer ? 'Respondido' : 'Sem resposta'}
          </Status>
        </Left>
        <Time>{formattedTime}</Time>
      </Header>
      <Preview>{data.question}</Preview>
    </Container>
  );
}

HelpOrder.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(withTheme(HelpOrder));
