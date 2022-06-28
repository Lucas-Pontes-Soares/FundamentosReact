import React, { useState, useEffect } from 'react';
import './style.css';
import {Card} from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState("Nome");
  {/* const [ondeConteudoFicaArmazenado, funcaoQueAtualizaEstado*/}
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: "", avatar: ""});

  function handleAddStudent(){

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };
   
    setStudents(prevState => [...prevState, newStudent]);
    //pegar o estado anterior e tirar ele do vetor (...) + o novo estudante
  }

  //useEffect é executado 1 vez quando a pagina carrega
  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://api.github.com/users/Lucas-Pontes-Soares")
      const data = await response.json()
      console.log(data);
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    fetchData();
  }, [students]); 
  //vai ser executado também quando o estado students mudar

  return (
    <div className='container'>
      <header>
          <h1>Lista de Presença</h1>
          <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Imagem do professor" />
      </div>
      </header>
      <input type="text" placeholder="Digite o nome" onChange={e => setStudentName(e.target.value)} />
      {/* Pegando o valor do input e a cada alteração vai exibir*/}
      <button type="button" onClick={handleAddStudent}>Enviar</button>
     {
      students.map(student => (
      <Card 
        key={student.time}
        name={student.name} 
        time={student.time}
      />
      ))
     }
     
    </div>
  )
}


