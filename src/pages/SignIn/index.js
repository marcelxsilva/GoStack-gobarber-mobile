import React from 'react';
import { Image } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
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
        <SignLink onPress={() => { }}><SignText>Criar uma Conta</SignText></SignLink>
      </Container>
    </Background>
  );
}
