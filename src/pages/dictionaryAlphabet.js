import React from 'react'
import Layout from '../components/Layout/layout'
import AlphabetTab from '../components/dictionary-alphabet/alphabetTab'
import { useParams } from 'react-router-dom'

const DictionaryAlphabet = () => {
  const { tabName } = useParams();

  return (
  <Layout>
  <AlphabetTab element={tabName}></AlphabetTab>
  </Layout>

  )
}

export default DictionaryAlphabet



