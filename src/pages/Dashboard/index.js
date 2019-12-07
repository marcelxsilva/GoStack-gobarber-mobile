import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from "~/components/Background";
import Appointments from "~/components/Appointments";

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const data = [1, 2, 3, 4, 5,6,7,8,10,];

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointments data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => <Icon name='event' size={20} color={tintColor} />
}