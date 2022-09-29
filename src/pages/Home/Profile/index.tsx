import { Container, Content, Links } from './styles'

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/Jovi-souza.png" alt="" />
      <Content>
        <h1>Cameron Williamson</h1>
        <span>github</span>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <Links>
          <li>cameronwll</li>
          <li>Rocketseat</li>
          <li>32 seguidores</li>
        </Links>
      </Content>
    </Container>
  )
}