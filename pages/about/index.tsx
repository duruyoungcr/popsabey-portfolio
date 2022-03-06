import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/Loader'
import { LoadingContext } from '../../context/LoadingContext'
import styles from './About.module.css'

const About: NextPage = (props) => {
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(true)
        const subscribe = setTimeout(() => {
            setLoading(false)
        }, 5000);
        return () => {
            subscribe
        }
    }, [])
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                About Page
            </Layout>
        </>
    )
}

export default About
