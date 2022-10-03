import { styled } from "../../../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  gap: '3rem',
  padding: '2rem',
  borderRadius: '10px',
  mt: '-10rem',
  backgroundColor: '$baseProfile',
  boxShadow: '0px 0px 10px 1px rgba(50, 148, 248, .3)',

  '& img': {
    width: '15rem',
    height: '15rem',
    borderRadius: '10px'
  }
})

export const Content = styled('div', {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '50vw',
  position: 'relative',

  '& h1': {
    color: '$basetitle',
  },

  '& p': {
    fontSize: '1.5rem'
  },

  '& a': {
    color: '$blue',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    position: 'absolute',
    top: '1.25rem',
    right: '0',
    borderBottom: '1px solid transparent',
    transition: '.2s'
  },

  '& a:hover': {
    borderBottom: '1px solid $blue',
  },
})

export const Links = styled('ul', {
  display: 'flex',
  gap: '1.5rem',
  color: '$baseSubTitle',

  '& li': {
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
  }
})