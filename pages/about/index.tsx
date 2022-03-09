import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import ExperienceList from '../../components/about/ExperienceList'
import Hero from '../../components/about/Hero'
import Hobbies from '../../components/about/Hobbies'
import SkillSet from '../../components/about/SkillSet'
import Layout from '../../components/layout/Layout'
import SEO from '../../components/layout/SEO'
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
            <SEO title="About | Popsabey Portfolio" />
            <Layout>
                <Hero />
                <SkillSet />
                <ExperienceList />
                <Hobbies />
            </Layout>
        </>
    )
}

export default About
