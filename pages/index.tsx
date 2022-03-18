import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
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
  const { loading, setLoading } = useContext(LoadingContext)

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => {
      subscribe
    }
  }, [])
  if (loading) {
    return <Loader />
  }
  return (
    <>
      <SEO title="Popsabey | Product Designer" />
      <Layout>
        <Hero />
        <Sell />
        <Projects />
        <SystemDesign />
        <Writings />
        <Reviews />
      </Layout>
    </>
  )
}

export default Home
