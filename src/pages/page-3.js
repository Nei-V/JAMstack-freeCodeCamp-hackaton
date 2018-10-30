import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ShowPosts from '../components/ShowPosts';

//import faunadb, { query as q } from "faunadb";







const ThirdPage = () => (
  <Layout>
    <h1>Testing the database</h1>
    <br />
   
    {/* <ShowPosts /> */}
    <br />
    <a href="https://www.linkedin.com/in/ionvarsescu/" target="blank">Ion Varsescu on Linkedin</a> 
    <br />
    <a href="https://www.facebook.com/varsescu.ion" target="blank">Ion Varsescu on Facebook</a> 
    <br />
    <a href="https://www.facebook.com/groups/free.code.camp.haifa/" target="blank">FreeCodeCamp Haifa Google Group</a> 
    <br />
    <a href="http://ionv.co.nf/" target="blank">Ion Varsescu's Personal Blog</a> 
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage