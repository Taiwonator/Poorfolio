import React, { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from 'src/components/Screens/Nav'
import PageWrapper from 'src/components/Wrappers/PageWrapper'
import LandingScreen from '../src/components/Screens/LandingScreen'
import ComingSoonScreen from 'src/components/Screens/ComingSoonScreen'
import { useScreenElement } from 'src/hooks/useScreenElement'
import { useResponsiveWidth } from 'src/hooks/useResponsiveWidth'
import Phone from 'src/components/Screens/Phone'

const Home: NextPage = () => {

  const [ navOpen, toggleNav ] = useState(false)
  const [ ref, isVisible ] = useScreenElement({
    root: null, 
    rootMargin: '0px', 
    threshold: 0
  })

  const toggleNavAction = (e) => {
    toggleNav(!navOpen)
  }

  const device = useResponsiveWidth()
  const PhoneComp = (device === 'mobile') ? <Phone type='fullscreen'/> : ''

  return (
    <React.Fragment>

      <Head>
        <title>Michael Taiwo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav navOpen={navOpen} toggleAction={toggleNavAction} phoneIsVisible={isVisible}/>

      <PageWrapper navOpen={navOpen}>
        <LandingScreen ref={ref}/>
        <ComingSoonScreen />
      </PageWrapper>
      
      { PhoneComp }

    </React.Fragment>
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