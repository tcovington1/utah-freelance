import React from 'react'
import Link from 'next/link'
import Freelancers from '../Freelancers'

const NewLancers = ({freelancers}) => ( 
  <>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our newest Freelancers</h2>
            <p className="text-xl text-gray-500">We only provide the best, pre-vetted freelancers in Utah.</p>
          </div>
          <Freelancers freelancers={freelancers}/>
        </div>
      </div>
    </div>
  </>
)

export default NewLancers