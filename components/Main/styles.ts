import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

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

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 1.5rem;
  margin-top: 0.5em;
`

export const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${loadingAnimation} 1s linear infinite;
`
