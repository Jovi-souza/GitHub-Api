import { ProjectCard } from "../../components/ProjectCard";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
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