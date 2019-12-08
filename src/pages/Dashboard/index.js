import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from "~/components/Background";
import Appointments from "~/components/Appointments";
import api from '~/services/api';
import { Container, Title, List } from './styles';
import { withNavigationFocus } from 'react-navigation';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppontments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }
  useEffect(() => {
    if (isFocused) {
      loadAppontments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);
    setAppointments(
      appointments.map(
        appointment => appointment.id === id ?
          {
            ...appointment,
            cancelable: false,

          } :
          appointment
      )
    );
    if (!response) { Alert.alert('Erro', 'Ocorreu um Erro ao realizar o cancelamento') }
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Appointments onCancel={() => handleCancel(item.id)} data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => <Icon name='event' size={20} color={tintColor} />
}

export default withNavigationFocus(Dashboard);