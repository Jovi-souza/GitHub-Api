import axios from "axios";
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

interface reposType {
  id: number,
  title: string,
  body: string,
  created_at: string
}

interface ProfileContextType {
  user: userProps
  repos: reposType[]
  FetchSearchRepo: (query?: string) => Promise<void>
}

interface childrenProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileContextProvider({ children }: childrenProps) {
  const [user, setUser] = useState({} as userProps)
  const [repos, setRepos] = useState<reposType[]>([])

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

  useEffect(() => {
    FetchSearchProfile()
    FetchSearchRepo()
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        user,
        repos,
        FetchSearchRepo
      }}>
      {children}
    </ProfileContext.Provider>
  )
}