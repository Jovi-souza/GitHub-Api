import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { UsersApi, SearchApi } from "../lib/axios";

interface userProps {
  avatar_url: string,
  bio: string,
  followers: number
  id: number,
  login: string
  name: string
  html_url: string
  repos_url: string
}

type userType = {
  login: string
}

interface reposType {
  id: number,
  title: string,
  body: string,
  created_at: string,
  comments: number,
  user: userType
}


interface ProjectCardsType {
  title: string
  description: string
  created: number
  comments: number
  user: userType
}

interface ProfileContextType {
  user: userProps
  repos: reposType[]
  project: ProjectCardsType
  FetchSearchRepo: (query?: string) => Promise<void>
  getProject: (selectedProject: ProjectCardsType) => void
}

interface childrenProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileContextProvider({ children }: childrenProps) {
  const [user, setUser] = useState({} as userProps)
  const [repos, setRepos] = useState<reposType[]>([])
  const [project, setProject] = useState({} as ProjectCardsType)

  async function FetchSearchProfile() {
    const response = await UsersApi.get('rocketseat-education')
    const data = response.data
    setUser(data)
  }

  async function FetchSearchRepo(query?: string) {
    const response = await SearchApi.get(`/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`)
    const data = response.data.items
    setRepos(data)
  }

  function getProject(selectedProject: ProjectCardsType) {
    setProject(selectedProject)
  }

  useEffect(() => {
    FetchSearchProfile()
    FetchSearchRepo()
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        user,
        repos,
        FetchSearchRepo,
        getProject,
        project
      }}>
      {children}
    </ProfileContext.Provider>
  )
}