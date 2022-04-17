import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Reviews from '../components/home/Reviews'
import Sell from '../components/home/Sell'
import SystemDesign from '../components/home/SystemDesign'
import Writings from '../components/home/Writings'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'
import Loader from '../components/Loader'
import { LoadingContext } from '../context/LoadingContext'

const Home: NextPage = (props) => {
  const { loading } = useContext(LoadingContext);
  const router = useRouter()
  const [first, setFirst] = useState(false)
  const sectionId = router.asPath.slice(router.asPath.indexOf('#'))
  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, 5000);
  }, [])
  useEffect(() => {
    if (sectionId === '#projects') {
      const section = document.querySelector(sectionId);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [loading, first])

  if (!loading && !first) {
    return <Loader />
  }
  return (
    <>
      <SEO title="Popsabey | Product Designer" />
      <Layout>
        <Hero />
        <Sell />
        <Projects />
        <Writings />
        <Reviews />
      </Layout>
    </>
  )
}

export default Home
