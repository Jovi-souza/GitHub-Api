import { styled } from "../../../../styles/stitches.config";

export const Container = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '1rem',
  m: '10rem 0 5rem',
  
  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export const Input = styled('input', {
  backgroundColor: '$baseInput',
  border: '1px solid $baseBorder',
  borderRadius: '5px',
  padding: '1rem',
  color: '$baseLabel',
  
  '&::placeholder': {
    color: '$baseLabel'
  },
  
  '&:focus': {
    color: '$baseText',
    outline: '1px solid $blue',
  },
})