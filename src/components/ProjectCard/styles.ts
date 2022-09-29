import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '$basePost',
  maxWidth: '45.5rem',
  padding: '2rem',
  borderRadius: '10px',
  position: 'relative',

  '& h1': {
    fontSize: '2.25rem',
    color: '$basetitle'
  },

  '& span': {
    position: 'absolute',
    right: '1.5rem',
    top: '2.5rem',

    color: '$baseSpan'
  },

  '& p': {
    fontSize: '1.5rem'
  }
})