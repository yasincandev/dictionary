import React from 'react'
import { IWord } from '@/types/IWord'
import Phonetics from '../Phonetics/Phonetics'
import { ContentContainer, Word } from './styles'

interface ContentProps {
  data: IWord
}

const Content: React.FC<ContentProps> = ({ data }) => {
  const { word, phonetics } = data

  const audio = phonetics[1].audio
  return (
    <ContentContainer>
      <Word>{data.word}</Word>
      <Phonetics audio={audio} />
    </ContentContainer>
  )
}

export default Content
