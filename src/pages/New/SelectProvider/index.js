import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectProvider() {
  return (
    <Background>

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