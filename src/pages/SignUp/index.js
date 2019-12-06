import React, { useRef } from 'react';
import { Image } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';

import logo from '~/assets/logo.png';

export default function SignUp({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();
  
  function handleSubmit() { }
  
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
            returnKeyType='next'
            onSubmitEditing={() => { emailRef.current.focus() }}
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address' // type input
            autoCorrect={true}
            autoCapitalize='none'
            placeholder='E-mail'
            ref={emailRef}
            returnKeyType='next'
            onSubmitEditing={() => { passwordRef.current.focus() }}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Senha'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => { navigation.navigate('SignIn') }}><SignText>Acessar Conta</SignText></SignLink>
      </Container>
    </Background>
  );
}
