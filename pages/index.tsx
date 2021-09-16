import type { NextPage } from 'next'
import Head from 'next/head'
import LandingScreen from '../src/components/Screens/LandingScreen'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Michael Taiwo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingScreen />
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