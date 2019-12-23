import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import PageTitle from '~/components/PageTitle';
import Button from '~/components/Button';
import Checkin from '~/components/Checkin';

import { Container, List } from './styles';

export default function Checkins() {
  const studentId = useSelector(state => state.auth.student.id);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`/students/${studentId}/checkins`);

      setCheckins(response.data);
    }

    loadCheckins();
  }, [studentId]);

  function handleNew() {}

  return (
    <Background>
      <PageTitle />
      <Container>
        <Button onPress={handleNew}>Novo check-in</Button>
        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
