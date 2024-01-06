import React from 'react'
import Layout from '../components/Layout/layout'
import { useParams } from 'react-router-dom'

import UniqueLetterComponent from '../components/unique-letter/uniqueLetterComponent'
const UniqueLetter = () => {
    const { letter } = useParams();
    
  return (
   
    <Layout>
            <UniqueLetterComponent letter={letter}> </UniqueLetterComponent>
            

    </Layout>
  )
}

export default UniqueLetter
