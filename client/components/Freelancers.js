import React from 'react'
import Link from 'next/link'
import Freelancer from './Freelancer'
const PORT = 'http://localhost:5000/api/v1'
// { freelancers }
const Freelancers = ({ freelancers }) => ( 
  <>
    <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
      {console.log(`freelancers data: ${freelancers}`)}
      {freelancers?.data?.map(freelancer => (
        <Freelancer freelancer={freelancer}/>
      ))}
    </ul>
  </>
)

export const getStaticProps = async () => {
  const res = await fetch(`${PORT}/freelancers`)
  const freelancers = await res.json()

  return{
    props: {
      freelancers,
    },
  }
}
export default Freelancers
