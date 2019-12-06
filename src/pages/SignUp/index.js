import React from 'react';
import { Image } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';

import logo from '~/assets/logo.png';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
        <FormInput
            icon='person-outline'
            autoCorrect={true}
            autoCapitalize='none'
            placeholder='Nome Completo'
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address' // type input
            autoCorrect={true}
            autoCapitalize='none'
            placeholder='E-mail'
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Senha'
          />
          <SubmitButton onPress={() => { }}>
            Acessar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => { navigation.navigate('SignIn') }}><SignText>Acessar Conta</SignText></SignLink>
      </Container>
    </Background>
  );
}
