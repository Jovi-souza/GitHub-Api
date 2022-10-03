import { useContext } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { ProfileContext } from "../../contexts/ProfileContext";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { Container, Content } from "./styles";

export function Home() {
  const { repos } = useContext(ProfileContext)

  return (
    <Container>
      <Profile />
      <SearchInput />
      <Content>
        {repos.map(({ id, name, description, created_at }) => {
          return (
            <ProjectCard
              key={id}
              title={name}
              description={description}
              created={created_at}
            />
          )
        })}
      </Content>
    </Container>
  )
}