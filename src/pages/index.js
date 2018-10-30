import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => (
 
  <Layout>
    <h1>JAMstack freeCodeCamp Online Hackaton Project</h1>
    <p>I'm Ion, I'm learning web development and I'll love to take part in my first hackaton.</p>
    <p>You can visit my GitHub repository here:</p>
<a href="https://github.com/Nei-V" target="blank">Ion Varsescu's Github Repositories</a> 
<br /> 

    <Link to="/page-2/">More about me</Link>
    <br />
    <Link to="/page-3/">Testing the database</Link>
  </Layout>
)

export default IndexPage
