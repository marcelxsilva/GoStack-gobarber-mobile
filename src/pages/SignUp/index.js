import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password))
    navigation.navigate('SignIn')
  }

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
            value={name}
            onChangeText={setname}
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
            value={email}
            onChangeText={setemail}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Senha'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setpassword}
          />
          <SubmitButton onPress={handleSubmit} loading={loading}>Criar Conta</SubmitButton>
        </Form>
        <SignLink onPress={() => { navigation.navigate('SignIn') }}><SignText>Acessar Conta</SignText></SignLink>
      </Container>
    </Background>
  );
}
