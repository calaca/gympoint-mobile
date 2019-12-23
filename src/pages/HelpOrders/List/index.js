import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';
import HelpOrder from '~/components/HelpOrder';
import LogoTitle from '~/components/LogoTitle';

import { Container, List } from './styles';

function HelpOrdersList({ navigation, isFocused }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/${studentId}/help-orders`);

      setHelpOrders(response.data);
    }

    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused, studentId]);

  return (
    <Background>
      <Container>
        <Button
          onPress={() => {
            navigation.navigate('New');
          }}
        >
          Novo pedido de auxílio
        </Button>

        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <HelpOrder data={item} />}
        />
      </Container>
    </Background>
  );
}

HelpOrdersList.navigationOptions = () => ({
  headerTitle: props => <LogoTitle {...props} />,
});

export default withNavigationFocus(HelpOrdersList);
