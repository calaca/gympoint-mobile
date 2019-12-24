import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { withTheme } from 'styled-components';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';
import HelpOrder from '~/components/HelpOrder';
import LogoTitle from '~/components/LogoTitle';

import { Container, List } from './styles';

function HelpOrdersList({ navigation, isFocused, theme }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [helpOrders, setHelpOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadHelpOrders(nextPage = 1) {
    const response = await api.get(
      `students/${studentId}/help-orders?page=${nextPage}`
    );

    setHelpOrders(
      nextPage >= 2 ? [...helpOrders, ...response.data] : response.data
    );
    setPage(nextPage);
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadHelpOrders();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleOnEndReached() {
    const nextPage = page + 1;

    loadHelpOrders(nextPage);
  }

  async function handleOnRefreshList() {
    setRefreshing(true);
    setHelpOrders([]);

    loadHelpOrders();
  }

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

        {loading ? (
          <ActivityIndicator color={theme.primary} style={{ marginTop: 20 }} />
        ) : (
          <List
            data={helpOrders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <HelpOrder data={item} />}
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={0.1}
            onRefresh={handleOnRefreshList}
            refreshing={refreshing}
          />
        )}
      </Container>
    </Background>
  );
}

HelpOrdersList.navigationOptions = () => ({
  headerTitle: props => <LogoTitle {...props} />,
});

export default withTheme(withNavigationFocus(HelpOrdersList));
