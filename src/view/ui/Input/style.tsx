import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  background-color: rgba(149, 161, 193, 0.5);
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 0.25rem;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-white);
  }

  &:focus {
    box-shadow: 0 0 3pt 2pt rgba(149, 161, 193, 0.2);
  }
`

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 10rem;
  min-height: 10rem;
  max-height: 10rem;
  background-color: rgba(149, 161, 193, 0.5);
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 0.25rem;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-white);
  }

  &:focus {
    box-shadow: 0 0 3pt 2pt rgba(149, 161, 193, 0.2);
  }
`

export {Input, Textarea}
