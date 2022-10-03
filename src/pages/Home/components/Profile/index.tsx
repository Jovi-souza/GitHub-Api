import { Container, Content, Links } from './styles'
import { GithubLogo, Buildings, Users, ArrowSquareUpRight } from 'phosphor-react'
import { ProfileContext } from '../../../../contexts/ProfileContext'
import { useContext } from 'react'

export function Profile() {
  const { user } = useContext(ProfileContext)
  const {
    avatar_url,
    bio,
    followers,
    login,
    name,
    html_url
  } = user

  return (
    <Container>
      <img src={avatar_url} alt="" />
      <Content>
        <h1>{name}</h1>
        <a href={html_url}>github<ArrowSquareUpRight size={16} weight="bold" color='#3294F8' /></a>
        <p>{bio}</p>
        <Links>
          <li><GithubLogo size={16} weight="bold" color='#3A536B' />{login}</li>
          <li><Buildings size={16} weight="bold" color='#3A536B' />Rocketseat</li>
          <li><Users size={16} weight="bold" color='#3A536B' />{followers} seguidores</li>
        </Links>
      </Content>
    </Container>
  )
}