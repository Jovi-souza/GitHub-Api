import { ProjectContent } from "./components/ProjectContent";
import { ProjectName } from "./components/ProjectName";
import { Container } from "./styles";

export function Project() {
  return(
    <Container>
      <ProjectName />
      <ProjectContent />
    </Container>
  )
}