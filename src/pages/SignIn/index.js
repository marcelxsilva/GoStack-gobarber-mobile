import React, { useRef } from 'react';
import { Image } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit(){}
  
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
            returnKeyType='next' // button next in keyboard mobile
            onSubmitEditing={() => passwordRef.current.focus()} //click in next button and redirect to input of password
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
        <SignLink onPress={() => { navigation.navigate('SignUp') }}><SignText>Criar uma Conta</SignText></SignLink>
      </Container>
    </Background>
  );
}
