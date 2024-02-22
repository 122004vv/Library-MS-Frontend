import Layout from './Layout'
import Hero from './Herosection'
import React from 'react'
import Footer from './Footer'
import Booktable from './Booktable'

function Home() {
  return (
    <Layout>
        <Hero/>
        <Booktable />
    </Layout>
  )
}
export default Home