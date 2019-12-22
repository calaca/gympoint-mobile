import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ loggedout, children }) {
  return <Container loggedout={loggedout}>{children}</Container>;
}

Background.propTypes = {
  loggedout: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Background.defaultProps = {
  loggedout: false,
};
