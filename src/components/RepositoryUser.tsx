import '../styles/repositories.css'

interface RepositoryUserProps{
  user: {
    id: number;
    login: string;
    name: string;
    html_url: string;
    avatar_url: string;
  }
}

const defaultUser = {
    id: 0,
    login: '',
    name: '',
    html_url: '',
    avatar_url: ''
    
}

export function RepositoryUser(props: RepositoryUserProps = {user: defaultUser}){
    return (
        <div className="repository-user">
            <div className='photo'>
                <img src={props.user.avatar_url} alt="" />
            </div>
            <div className='info'>
                <h2>{props.user.name}</h2>
                <p>{props.user.login}</p>
            </div>
        </div>
    )
}