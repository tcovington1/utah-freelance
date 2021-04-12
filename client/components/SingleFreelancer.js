import { gql, useQuery } from "@apollo/client"
import DisplayError from "./ErrorMessage";
import Head from 'next/head'

export default function SingleFreelancer({ id }) {

  if(loading) return <p>Loading...</p>
  if(error) return <DisplayError error={error} />
  const { Post } = data;
  return (
    <>
    <Head>
     <title>DTM Studio | {Post.title}</title>
    </Head>

    </>

  )
}
