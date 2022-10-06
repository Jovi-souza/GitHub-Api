import { Container, Options, Content, Links } from './styles'
import { CaretLeft, ArrowSquareUpRight, GithubLogo, ChatCircle, CalendarBlank } from 'phosphor-react'
import { useContext } from 'react'
import { ProfileContext } from '../../../../contexts/ProfileContext'
import { NavLink } from 'react-router-dom'
export function ProjectName() {
  const {project} = useContext(ProfileContext)
  const {title, created, comments, user} = project

  return (
    <Container>
      <Options>
        <NavLink to='/'>
          <span><CaretLeft size={16} weight="bold" color='#3294F8'/>Voltar</span>
        </NavLink>
        <span>Ver no GitHub<ArrowSquareUpRight size={16} weight="bold" color='#3294F8'/></span>
      </Options>
      <Content>
        <h1>{title}</h1>
        <Links>
          <li><GithubLogo size={16} weight="bold" color='#3A536B'/>{user.login}</li>
          <li><CalendarBlank size={16} weight="bold" color='#3A536B' />{created}</li>
          <li><ChatCircle size={16} weight="bold" color='#3A536B' />{comments} seguidores</li>
        </Links>
      </Content>
    </Container>
  )
}