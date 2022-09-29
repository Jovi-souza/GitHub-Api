import { Container, Input } from "./styles";

export function SearchInput() {
  return(
    <Container>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <Input type="text" placeholder="Buscar conteúdo"/>
    </Container>
  )
}