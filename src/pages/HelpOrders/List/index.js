import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';
import HelpOrder from '~/components/HelpOrder';
import PageTitle from '~/components/PageTitle';

import { Container, List } from './styles';

export default function HelpOrders({ navigation }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/${studentId}/help-orders`);

      setHelpOrders(response.data);
    }

    loadHelpOrders();
  }, [studentId]);

  return (
    <Background>
      <PageTitle />
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
