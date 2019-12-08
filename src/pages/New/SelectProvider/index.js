import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container, ProviderList, Provider, Avatar, Name } from './styles';
import api from '~/services/api';

export default function SelectProvider({ navigation }) {
  const [provider, setProvider] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProvider(response.data);
    }
    loadProviders()
  }, [])
  return (
    <Background>
      <Container>
        <ProviderList
          data={provider}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => {
                navigation.navigate('SelectDateTime', { provider })
              }}>
              <Avatar source={{ uri: provider.avatar ? provider.avatar.url : `https://api.adorable.io/avatars/50/${provider.name}.png` }} />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}


SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o Prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
      <Icon
        name='chevron-left'
        size={30}
        color='#fff'
      />
    </TouchableOpacity>
  )
});