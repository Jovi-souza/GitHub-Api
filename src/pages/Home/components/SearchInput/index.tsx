import { Container, Input } from "./styles";
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { ProfileContext } from "../../../../contexts/ProfileContext";

const searchFormSchema = zod.object({
  query: zod.string()
})

type searchFormInput = zod.infer<typeof searchFormSchema>

export function SearchInput() {
  const { FetchSearchRepo, repos } = useContext(ProfileContext)
  const numberOfPublications = repos.length
  const { register, handleSubmit, reset } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchRepo(data: searchFormInput) {
    FetchSearchRepo(data.query)
    reset()
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchRepo)}>
      <div>
        <h2>Publicações</h2>
        <span>{numberOfPublications} publicações</span>
      </div>
      <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </Container>
  )
}