import React from 'react'
import Layout from './Layout'
import Booktable from './Booktable'
function AllBooks() {
  return (
    <Layout>
      <h1>List of Books</h1>
        <Booktable/>
    </Layout>
  )
}

export default AllBooks