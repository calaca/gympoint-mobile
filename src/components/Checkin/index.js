import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, Title, Time } from './styles';

export default function Checkin({ data }) {
  const formattedTime = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), { locale: pt });
  }, [data.createdAt]);

  return (
    <Container>
      <Title>Check-in #{data.id}</Title>
      <Time>{formattedTime}</Time>
    </Container>
  );
}

Checkin.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
