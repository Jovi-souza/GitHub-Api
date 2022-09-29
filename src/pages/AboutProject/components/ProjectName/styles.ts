import { styled } from "../../../../styles/stitches.config"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem',
  width: '50vw',
  mt: '-8rem',
  borderRadius: '10px',
  backgroundColor: '$baseProfile',
  boxShadow: '0px 0px 10px 1px rgba(50, 148, 248, .3)'
})

export const Options = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$blue',
  textTransform: 'uppercase',
  cursor: 'pointer',
  
  '& span': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    borderBottom: '1px solid transparent',
    transition: '.2s'
  },

  '& span:hover': {
    borderColor: '1px solid $blue',
  },
})

export const Content = styled('div', {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '50vw',
  
  '& h1': {
    color: '$basetitle'
  }
})

export const Links = styled('ul', {
  display: 'flex',
  gap: '1.5rem',
  color: '$baseSpan',

  '& li': {
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
  }
})