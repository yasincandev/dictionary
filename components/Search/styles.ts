import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 10px;
  border: 0;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  width: 100%;
  &:focus {
    outline: none;
    background-color: #fff;
  }
`

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 2.5em;
  height: 2.5em;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  cursor: pointer;
`

export const InputBorder = styled.span`
  position: absolute;
  background: #5891ff;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: 0.3s;
`

export const Form = styled.form`
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  font-size: 0.9rem;
  color: #fff;
  transition: 0.3s;
  ${Input}:focus ~ & {
    top: -1.2em;
    font-size: 0.8rem;
  }
`
