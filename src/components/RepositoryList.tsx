import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

interface Repository{
  name: string;
  description: string;
  html_url: string;
}


export function RepositoryList(){

  const [user, setUser] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>([])

  console.log(repositories);
  

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(data =>
        setRepositories(data)
      )
  }, [user])

  console.log(repositories);
  

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <input type="text" id="userInput" onChange={(e)=>{
        setUser(e.target.value)
      }}/>
      <ul>
        {repositories.length > 0 ? repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        }) : <h1>Nenhum usuário encontrado encontrado</h1>}
      </ul>
    </section>
  )
}