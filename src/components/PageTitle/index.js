import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import logo from '~/assets/images/logo-horizontal.png';

import { Container, BackButton, Logo } from './styles';

export default function PageTitle({ back, navigation }) {
  return (
    <Container>
      {back && (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={24} color="#000" />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  );
}

PageTitle.propTypes = {
  back: PropTypes.bool,
};

PageTitle.defaultProps = {
  back: false,
};
