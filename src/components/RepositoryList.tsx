import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import { RepositoryUser } from "./RepositoryUser"
import '../styles/repositories.css'

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

interface RepositoryUser {
  id: number;
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
}


export function RepositoryList(){

  const [user, setUser] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>([])

  const [userInfo, setUserInfo] = useState<RepositoryUser>({id: 0, login: '', name: '', html_url: '', avatar_url: ''})

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(data =>
        setRepositories(data)
      )

      fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data =>
          setUserInfo(data)
        )
  }, [user])

  return (
    <section className="repository-list">
      <div className="repositories-header">
        <RepositoryUser user={userInfo}/>
        <h1>Lista de repositórios</h1>
        <input type="text" id="userInput" onChange={(e)=>{ setUser(e.target.value)
        }}/>
      </div>
       
      <ul className='repositories'>
        {repositories.length > 0 ? repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        }) : <h1>Nenhum usuário encontrado encontrado</h1>}
      </ul>
    </section>
  )
}