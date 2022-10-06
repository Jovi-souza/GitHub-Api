import { Container } from "./styles";
import { subDays, formatRelative } from 'date-fns'
import PtBr from 'date-fns/locale/pt-BR'
import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import { NavLink } from "react-router-dom";

type userType = {
  login: string
}

interface ProjectCardsType {
  title: string
  description: string
  created: string
  comments: number
  user: userType
}

export function ProjectCard({ created, title, description, comments, user }: ProjectCardsType ) {
  const {getProject} = useContext(ProfileContext)
  const createdToNumber = parseInt(created)

  function handleGetProject() {
    getProject({
      title: title,
      description: description,
      created: createdToNumber,
      comments: comments,
      user: user
    })
  }

  return (
    <Container onClick={handleGetProject}>
      <NavLink to='/Project'>
        <h1>{title}</h1>
        <span>{
          formatRelative(subDays(new Date(), createdToNumber), new Date(), {
            locale: PtBr,
          })
        }</span>
        <p>{description}</p>
      </NavLink>
    </Container>
  )
}
