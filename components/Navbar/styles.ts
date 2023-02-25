import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

export const Headers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

export const Heading = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  text-align: left;
  width: 79%;
  font-weight: 900;
  margin-top: 1rem;
`

export const SubHeading = styled.h5`
  font-size: 1.2rem;
  margin: 1em 0;
  color: ${({ theme }) => theme.text};
  text-align: left;
  width: 79%;
  font-weight: 400;
  font-style: italic;
`

export const Toggles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  gap: 2rem;
`

export const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`

export const StyledSelect = styled.select`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.dropdown.background};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.dropdown.border};
  appearance: none;
  &:focus {
    outline: none;
  }
`

export const StyledOption = styled.option`
  background: ${({ theme }) => theme.dropdown.background};
  color: ${({ theme }) => theme.text};
`
