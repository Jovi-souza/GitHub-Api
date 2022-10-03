import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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

interface reposProps {
  id: number,
  name: string,
  description: string,
  created_at: string
}

interface ProfileContextType {
  user: userProps
  repos: reposProps[]
}

interface childrenProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileContextProvider({ children }: childrenProps) {
  const [user, setUser] = useState({} as userProps)
  const [repos, setRepos] = useState<reposProps[]>([])

  async function FetchProfile() {
    const response = await api.get('rocketseat-education')
    const data = response.data
    setUser(data)
  }

  async function FetchRepos() {
    const response = await api.get(`${user.login}/repos`)
    const data = response.data
    setRepos(data)
  }

  useEffect(() => {
    FetchProfile()
    FetchRepos()
  }, [])

  return (
    <ProfileContext.Provider value={{ user, repos }} >
      {children}
    </ProfileContext.Provider>
  )
}