import { Container } from "./styles";
import { formatDistanceToNowStrict } from 'date-fns'
import PtBr from 'date-fns/locale/pt-BR'

interface ProjectCardsProps {
  title: string
  description: string
  created: string
}
// formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
export function ProjectCard({ created, title, description }: ProjectCardsProps) {
  const teste = parseInt(created)
  console.log(created)
  return (
    <Container>
      <h1>{title}</h1>
      <span>{formatDistanceToNowStrict(teste, {
        addSuffix: true,
        locale: PtBr
      })}</span>
      <p>{description}</p>
    </Container>
  )
}
