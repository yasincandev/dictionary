import { IPhonetics } from '@/types/IWord'
import React, { FC } from 'react'

const Phonetics: FC<IPhonetics> = ({ audio }) => {
  console.log('audio', audio)
  return <div>Phonetics</div>
}

export default Phonetics
