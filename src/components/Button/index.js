import React from 'react';
import { ActivityIndicator } from 'react-native';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

function Button({ children, loading, theme, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.white} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  theme: PropTypes.instanceOf(Object).isRequired,
};

Button.defaultProps = {
  loading: false,
};

export default withTheme(Button);
