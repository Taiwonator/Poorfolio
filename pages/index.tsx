import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from 'src/components/Screens/Nav'
import PageWrapper from 'src/components/Wrappers/PageWrapper'
import LandingScreen from '../src/components/Screens/LandingScreen'
import ComingSoonScreen from 'src/components/Screens/ComingSoonScreen'

const Home: NextPage = () => {

  const [ navOpen, toggleNav ] = useState(false)

  useEffect(() => {
    console.log(navOpen)
  }) 

  const toggleNavAction = (e) => {
    console.log(navOpen);
    toggleNav(!navOpen)
  }

  return (
    <div>
      <Head>
        <title>Michael Taiwo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Nav navOpen={navOpen} toggleAction={toggleNavAction}/>

          <PageWrapper navOpen={navOpen}>
            <LandingScreen />
            <ComingSoonScreen />
          </PageWrapper>
    </div>
  )
}

export default Home


// **API CALL**
// const fetcher = async (url: string) => {
//   const res = await fetch(url)
//   const data = await res.json()

//   if (res.status !== 200) {
//     throw new Error(data.message)
//   }
//   return data
// }

// fetcher('/api/hello').then(data => console.log(data))