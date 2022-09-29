import { styled } from "../styles/stitches.config";
import background from '../assets/Background.svg'

export const DefaultContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  padding: '4rem 0 12rem',
  width: '100%',
  background: `url(${background}) center`,
  backgroundSize: 'cover',

  '& img': {
    width: '12rem'
  },
})