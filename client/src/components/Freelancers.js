import { useEffect } from 'react'
import axios from '../axios'

export const Freelancers = () => {

  const getFreelancers = () => {
    axios.get('/api/v1/freelancers')
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    getFreelancers()
  }, [])
  return (
    <div>
      <h1>Freelancers</h1>
    </div>
  )
}
