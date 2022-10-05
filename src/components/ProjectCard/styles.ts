import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '$basePost',
  width: '45.5rem',
  padding: '2rem',
  borderRadius: '10px',
  position: 'relative',
  border: '1px solid transparent',
  cursor: 'pointer',
  
  '&:hover': {
    border: '1px solid $baseSpan',
    transition: '.3s'
  },

  '& h1': {
    width: '35rem',
    fontSize: '2rem',
    color: '$basetitle'
  },

  '& span': {
    position: 'absolute',
    right: '1.5rem',
    top: '2.5rem',

    color: '$baseSpan'
  },

  '& p': {
    fontSize: '1.5rem',
    height: '10rem',
    overflow: 'hidden',
    position: 'relatie',
  },

  '& p:before': {
    content: '...',
    position: 'absolute',
    right: '5.3rem',
    bottom: '2rem',
  }
})