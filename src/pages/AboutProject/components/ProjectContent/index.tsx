import { useContext } from "react";
import { ProfileContext } from "../../../../contexts/ProfileContext";
import { Container } from "./styles";

export function ProjectContent() {
  const {project} = useContext(ProfileContext)
  
  return (
    <Container>
      <p>{project.description}</p>
    </Container>
  )
}