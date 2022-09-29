import { styled } from "../../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  gap: '3rem',
  padding: '2rem',
  borderRadius: '10px',
  mt: '-10rem',
  backgroundColor: '$baseProfile',

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

  '& span': {
    color: '$blue',
    textTransform: 'uppercase',
    fontWeight: 'bolder',

    position: 'absolute',
    top: '0',
    right: '0',
  },
})
export const Links = styled('ul', {
  display: 'flex',
  gap: '1.5rem',
  color: '$baseSubTitle',

  '& li': {
    fontSize: '1.25rem'
  }
})