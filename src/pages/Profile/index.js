import React from 'react';
import Background from "~/components/Background";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

export default function Profile() {
  return (
    <Background/>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => <Icon name='person' size={20} color={tintColor} />
}