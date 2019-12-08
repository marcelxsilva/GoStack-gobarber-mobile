import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import { Container, HourList, Hour, Title } from './styles';
import api from '~/services/api';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvaliable() {
      const response = await api.get(`providers/${provider.id}/avaliable`, {
        params: {
          date: date.getTime(),
        }
      });
      setHours(response.data)
    }
    loadAvaliable()
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', { provider, time });
  }
  
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>

      <HourList
        data={hours}
        extraData={date}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          <Hour enabled={item.avalible} onPress={() => handleSelectHour(item.value)}>
            <Title>{item.time}</Title>
          </Hour>
        )}
      />
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o Horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
      <Icon
        name='chevron-left'
        size={30}
        color='#fff'
      />
    </TouchableOpacity>
  )
})