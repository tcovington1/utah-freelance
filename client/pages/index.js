import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import NewLancers from '../components/landing/NewLancers'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
// import { PORT } from '.././../server'
const PORT = 'http://localhost:5000/api/v1'

// console.log(`port: ${PORT}`)

const getApi = () => {
  fetch('/freelancers')
  .then((response) => {
    return console.log(response.json());
  })
  .then((data) => {
    console.log(data);
  });
}
// 
const Home = ({ freelancers }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <Features />
    <NewLancers freelancers={freelancers}/>

      <button onClick={getApi}>Get data</button>
      {/* {console.log(freelancers?.data)} */}
      {/* {freelancers?.data?.map(freelancer => <h1>{freelancer.name}</h1>)} */}
  
  </div>
)

export default Home

export const getStaticProps = async () => {
  const res = await fetch(`${PORT}/freelancers`)
  const freelancers = await res.json()

  return{
    props: {
      freelancers,
    },
  }
}