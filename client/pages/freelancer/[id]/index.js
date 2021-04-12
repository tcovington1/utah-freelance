import { useRouter } from 'next/router'
const PORT = 'http://localhost:5000/api/v1'


const freelancer = ({fData}) => {
 
  return (
    <div>
<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
      <div class="space-y-5 sm:space-y-4">
      <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=NOcPV6k2zT&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      </div>
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{fData.name}</h2>
        <p class="text-xl text-gray-500">{fData.bio}</p>
        <p class="text-indigo-600">{fData.title.map((title => `${title}, `))}</p>
      </div>
      <div class="lg:col-span-1">
        <ul class="space-y-12 sm:grid sm:gap-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              
              <div class="font-medium text-lg leading-6 space-y-1" >
                <h3>Contact me</h3>
                <p>Email: {fData.email}</p>
                <p>Phone: {fData.phone}</p>
              </div>
            </div>
          </li>

          {/* <!-- More items... --> */}
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default freelancer

export const getStaticProps = async (context) => {
  const res = await fetch(`${PORT}/freelancers/${context.params.id}`)
  const freelancerInfo = await res.json()
  const fData = freelancerInfo.data

  return{
    props: {
      fData,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${PORT}/freelancers/`)
  const freelancers = await res.json()
  const ids = freelancers?.data?.map((freelancerData) => freelancerData.id)
  const paths = ids.map((id) => ({params: {
    id: id.toString() } } ))

  return{
    paths,
    fallback: false,
  }
}