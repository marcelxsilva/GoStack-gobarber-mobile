import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);
  function handleSubmit() {
    dispatch(signInRequest(email, password))
  }

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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Senha'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit} loading={loading}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => { navigation.navigate('SignUp') }}><SignText>Criar uma Conta</SignText></SignLink>
      </Container>
    </Background>
  );
}
