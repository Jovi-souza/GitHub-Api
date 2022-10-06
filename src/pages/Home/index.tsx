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
        {repos.map(({ id, created_at, body, title, comments, user }) => {
          return (
            <ProjectCard
              key={id}
              title={title}
              description={body}
              created={created_at}
              comments={comments}
              user={user}
            />
          )
        })}
      </Content>
    </Container>
  )
}