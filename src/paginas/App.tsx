import React, { useState } from 'react';
import logo from './logo.svg';
import Header from '../componentes/Header';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { ITarefa } from '../type/iTarefa';
import Cronometro from '../componentes/Cronometro';

function App() {

  return (
    <>
    <Header/>
    <Formulario/>
    </>
  );
}

export default App;
