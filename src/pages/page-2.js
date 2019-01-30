import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>You can learn more about me and my activity by following these links</h1>
    <br />
    <br />
    <a href="https://www.linkedin.com/in/ionvarsescu/" target="blank">Ion Varsescu on Linkedin</a> 
    <br />
    <a href="https://www.facebook.com/varsescu.ion" target="blank">Ion Varsescu on Facebook</a> 
    <br />
    <a href="https://www.facebook.com/groups/free.code.camp.haifa/" target="blank">FreeCodeCamp Haifa Google Group</a> 
    <br />
    <a href="https://www.ionvarsescu.tk" target="blank">Ion Varsescu's Personal Blog</a> 
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
