import { styled } from "../../../../styles/stitches.config";

export const Container = styled('div', {
  padding: '4rem 1rem',

  '& p': {
    fontSize: '1.25rem'
  },

  '& span': {
    display: 'inline-block',
    margin: '2rem 0 1rem',

    color: '$blue',
    fontSize: '1.5rem',
    borderBottom: '1px solid $blue',
    cursor: 'pointer'
  }
})