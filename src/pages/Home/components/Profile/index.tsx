import { Container, Content, Links } from './styles'
import { GithubLogo, Buildings, Users, ArrowSquareUpRight } from 'phosphor-react'

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/Jovi-souza.png" alt="" />
      <Content>
        <h1>Cameron Williamson</h1>
        <span>github<ArrowSquareUpRight size={16} weight="bold" color='#3294F8' /></span>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <Links>
          <li><GithubLogo size={16} weight="bold" color='#3A536B' />cameronwll</li>
          <li><Buildings size={16} weight="bold" color='#3A536B' />Rocketseat</li>
          <li><Users size={16} weight="bold" color='#3A536B' />32 seguidores</li>
        </Links>
      </Content>
    </Container>
  )
}