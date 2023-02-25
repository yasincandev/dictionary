import React from 'react'
import { z } from 'zod'
import { Icon } from '../Icons/Search'
import { Form, Input, Button, InputBorder } from './styles'

const SearchSchema = z.object({
  word: z.string().min(1),
})

type SearchProps = {
  word: string
  setWord: (word: string) => void
  isLoading: boolean
}

const Search: React.FC<SearchProps> = ({ word, setWord, isLoading }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = SearchSchema.parse({ word })
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search for a word e.g. table"
        value={word}
        onChange={handleChange}
        required
      />
      <Button
        type="submit"
        disabled={isLoading}
      >
        <Icon />
      </Button>
      <InputBorder />
    </Form>
  )
}

export default Search
