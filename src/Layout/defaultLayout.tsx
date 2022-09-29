import { Outlet } from 'react-router-dom'
import { DefaultContainer, Header } from './styles'
import Logo from '../assets/Logo.svg'

export function DefaultLayout() {
  return(
    <DefaultContainer>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>

      <Outlet />
    </DefaultContainer>
  )
}