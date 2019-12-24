import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { withTheme } from 'styled-components';

import api from '~/services/api';

import Background from '~/components/Background';
import LogoTitle from '~/components/LogoTitle';
import Button from '~/components/Button';
import Checkin from '~/components/Checkin';

import { Container, List } from './styles';

function Checkins({ isFocused, theme }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [checkins, setCheckins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCheckins(nextPage = 1) {
    const response = await api.get(
      `/students/${studentId}/checkins?page=${nextPage}`
    );

    setCheckins(
      nextPage >= 2 ? [...checkins, ...response.data] : response.data
    );
    setPage(nextPage);
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadCheckins();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleOnEndReached() {
    const nextPage = page + 1;

    loadCheckins(nextPage);
  }

  async function handleOnRefreshList() {
    setRefreshing(true);
    setCheckins([]);

    loadCheckins();
  }

  async function handleNew() {
    try {
      const response = await api.post(`/students/${studentId}/checkins`);

      Alert.alert('Sucesso', 'Check-in feito com sucesso!');

      setCheckins([...checkins, response.data]);
    } catch (err) {
      err.response.data.errors.map(error =>
        Alert.alert('Falha no check-in', error.msg)
      );
    }
  }

  return (
    <Background>
      <Container>
        <Button onPress={handleNew}>Novo check-in</Button>
        {loading ? (
          <ActivityIndicator color={theme.primary} style={{ marginTop: 20 }} />
        ) : (
          <List
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Checkin data={item} />}
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

Checkins.navigationOptions = {
  headerTitle: props => <LogoTitle {...props} />,
};

export default withTheme(withNavigationFocus(Checkins));
