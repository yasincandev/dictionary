import { Container, Form, Input, Button, InputBorder } from './styles'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { IWord } from '@/types/IWord'
import Content from '@/components/Content/Content'
import { DICTIONARY_API_URL } from '@/utils'
import { z } from 'zod'
import { Icon } from '../Icons/Search'
import Navbar from '../Navbar/Navbar'

const SearchSchema = z.object({
  word: z.string().min(1),
})

const Main = () => {
  const [word, setWord] = useState('')
  const { data, isLoading } = useQuery<IWord>(
    ['word', word],
    async () => {
      const response = await fetch(`${DICTIONARY_API_URL}/${word}`)
      const data = await response.json()
      return data[0]
    },
    {
      enabled: false,
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = SearchSchema.parse({ word })
    console.log(data)
  }

  return (
    <Container>
      <Navbar />
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

      {data && <Content data={data} />}
    </Container>
  )
}

export default Main
