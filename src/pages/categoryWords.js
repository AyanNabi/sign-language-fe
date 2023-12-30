import React from 'react'
import Layout from '../components/Layout/layout'
import AllCategoryWords from '../components/all-category-words/allCategoryWords'
import { useParams } from 'react-router-dom'

const CategoryWords = () => {

  const { categoryId } = useParams();
    
  return (
    <Layout>
    <AllCategoryWords element={categoryId} ></AllCategoryWords>
  </Layout>
  )
}

export default CategoryWords
