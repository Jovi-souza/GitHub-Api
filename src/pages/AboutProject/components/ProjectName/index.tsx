import { Container, Options, Content, Links } from './styles'
import { CaretLeft, ArrowSquareUpRight, GithubLogo, ChatCircle, CalendarBlank } from 'phosphor-react'
export function ProjectName() {
  return (
    <Container>
      <Options>
        <span><CaretLeft size={16} weight="bold" color='#3294F8'/>Voltar</span>
        <span>Ver no GitHub<ArrowSquareUpRight size={16} weight="bold" color='#3294F8'/></span>
      </Options>
      <Content>
        <h1>JavaScript data types and data structures</h1>
        <Links>
          <li><GithubLogo size={16} weight="bold" color='#3A536B'/>cameronwll</li>
          <li><CalendarBlank size={16} weight="bold" color='#3A536B' />há 1 dia</li>
          <li><ChatCircle size={16} weight="bold" color='#3A536B' />32 seguidores</li>
        </Links>
      </Content>
    </Container>
  )
}