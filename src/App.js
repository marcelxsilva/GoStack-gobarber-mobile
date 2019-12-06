import React from 'react';
import createRouter from './routes';
import { useSelector } from 'react-redux';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed)
  return (
    <>
      <Routes />

    </>
  );
}
