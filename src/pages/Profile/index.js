import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from "~/components/Background";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Title, Form, FormInput, SubmitButton, Separator, LogoutButton } from './styles';
import { updateProfileResquest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef('');
  const oldPasswordRef = useRef('');
  const newPasswordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const [email, setEmail] = useState(profile.email);
  const [name, setName] = useState(profile.name);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setConfirmPassword('');
    setNewpassword('');

  }, [profile])
  async function handleSubmit() {
    dispatch(updateProfileResquest({
      name,
      email,
      oldPassword,
      password: newPassword,
      confirmPassword
    }));

  }

  async function handleLogout() {
    dispatch(signOut())
  }
  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
        <Form>
          <FormInput
            icon='person-outline'
            autoCorrect={true}
            autoCapitalize='none'
            placeholder='Nome Completo'
            returnKeyType='next'
            onSubmitEditing={() => { emailRef.current.focus() }}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address' // type input
            autoCorrect={true}
            autoCapitalize='none'
            placeholder='E-mail'
            ref={emailRef}
            returnKeyType='next'
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Senha Atual'
            ref={oldPasswordRef}
            returnKeyType='next'
            onSubmitEditing={handleSubmit}
            value={oldPassword}
            onSubmitEditing={() => { newPasswordRef.current.focus() }}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Nova Senha'
            ref={newPasswordRef}
            returnKeyType='next'
            onSubmitEditing={handleSubmit}
            value={newPassword}
            onSubmitEditing={() => { confirmPasswordRef.current.focus() }}
            onChangeText={setNewpassword}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Confirmação de Senha'
            ref={confirmPasswordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton onPress={handleSubmit}>Atualizar Perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background >
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => <Icon name='person' size={20} color={tintColor} />
}