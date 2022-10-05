import { Container } from "./styles";
import { subDays, formatRelative } from 'date-fns'
import PtBr from 'date-fns/locale/pt-BR'

interface ProjectCardsProps {
  title: string
  description: string
  created: string
}

export function ProjectCard({ created, title, description }: ProjectCardsProps) {
  const createdToNumber = parseInt(created)
  return (
    <Container>
      <h1>{title}</h1>
      <span>{
        formatRelative(subDays(new Date(), createdToNumber), new Date(), {
          locale: PtBr,
        })
      }</span>
      <p>{description}</p>
    </Container>
  )
}
