import React, { useState } from 'react';
import './style.css';
import {Card} from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState("Nome");
  {/* const [ondeConteudoFicaArmazenado, funcaoQueAtualizaEstado*/}

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome" onChange={e => setStudentName(e.target.value)} />
      {/* Pegando o valor do input e a cada alteração vai exibir*/}
      <button type="button">Enviar</button>
      <Card name={studentName} time="10:11:22"/>
      <Card name="Lucas" time="15:10:09"/>
      <Card name="Rodrigo" time="12:05:02"/>
    </div>
  )
}


