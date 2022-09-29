import { ProjectCard } from "../../components/ProjectCard";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";
import { Container, Content } from "./styles";

export function Home() {
  return(
    <Container>
      <Profile />
      <SearchInput />
      <Content>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Content>
    </Container>
  )
}