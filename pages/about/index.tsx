import type { NextPage } from 'next'
import ExperienceList from '../../components/about/ExperienceList'
import Hero from '../../components/about/Hero'
import Hobbies from '../../components/about/Hobbies'
import SkillSet from '../../components/about/SkillSet'
import Layout from '../../components/layout/Layout'
import SEO from '../../components/layout/SEO'

const About: NextPage = (props) => {
    return (
        <div data-scroll-section>
            <SEO title="About | Popsabey Portfolio" />
            <Layout>
                <div>
                    <Hero />
                    <SkillSet />
                    <ExperienceList />
                    <Hobbies />
                </div>
            </Layout>
        </div>
    )
}

export default About
