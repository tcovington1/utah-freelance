import { useEffect, useState } from 'react'
import {Freelancer} from './Freelancer'
import axios from '../axios'

export const FreelancersList = () => {
  const [ freelancers, setFreelancers ] = useState([])

  const getFreelancers = () => {
    axios.get('/api/v1/freelancers')
      .then((res) => {
        console.log(res.data.data)
        setFreelancers(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getFreelancers()
  }, [])
  return (
    <>
       <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12">
            <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Utah Freelancers</h2>
              {/* <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p> */}
            </div> 
              <ul class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                {freelancers?.data?.map((freelancer) => {
                  return <Freelancer key={freelancer.id} freelancer={freelancer}/>
                })}
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}
