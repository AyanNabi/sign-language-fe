import React from 'react'
import Layout from '../components/Layout/layout'
import Word from '../components/unique-word/word'
import { useParams } from 'react-router-dom'

const UniquePage = () => {
  const { categoryId, wordId } = useParams();

  return (
   <Layout>
    <Word categoryId={categoryId} wordId={wordId} />
   </Layout>
  )
}

export default UniquePage
