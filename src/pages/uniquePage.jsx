import React from 'react'
import Layout from '../components/Layout/layout'
import Word from '../components/unique-word/word'
import { useParams } from 'react-router-dom'

const UniquePage = () => {
  const { word } = useParams();

  return (
   <Layout>
    <Word element={word} />
   </Layout>
  )
}

export default UniquePage
