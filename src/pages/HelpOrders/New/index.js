import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Button from '~/components/Button';
import LogoTitle from '~/components/LogoTitle';

import { Container, TextArea } from './styles';

function New({ theme }) {
  return (
    <Background>
      <Container>
        <TextArea
          placeholder="Inclua seu pedido de auxílio"
          placeholderTextColor={theme.textLight}
          multiline
        />
        <Button onPress={() => {}}>Enviar pedido</Button>
      </Container>
    </Background>
  );
}

New.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

New.navigationOptions = ({ navigation }) => ({
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

export default withTheme(New);
