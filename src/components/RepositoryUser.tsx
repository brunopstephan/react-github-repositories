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


export function RepositoryUser(props: RepositoryUserProps){
    return (
        <div className="repository-user">
            <div className='photo'>
                <img src={props.user.avatar_url} alt="" style={props.user.avatar_url ? {display: 'flex'} : {display: 'none'}} />
            </div>
            <div className='info'>
                <h2>{props.user.name}</h2>
                <p><a href={props.user.html_url} target='_blank'>{props.user.login ? `@${props.user.login}` : ''}</a></p>
            </div>
        </div>
    )
}