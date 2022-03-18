import type { NextPage } from 'next'
import ProjectIntro from '../../../components/general/ProjectIntro'
import Layout from '../../../components/layout/Layout'
import SEO from '../../../components/layout/SEO'
import { cryptoApp } from '../../../constants/projectsOutline'
import styles from './Crypto-app.module.css'

const CryptoApp: NextPage = (props) => {
    const { year, role, platform, industry, duration, title, description } = cryptoApp
    return (
        <>
            <SEO title="Project | Crypto Trading App" />
            <Layout>
                <div className='pt-20'>
                    <ProjectIntro
                        year={year}
                        role={role}
                        duration={duration}
                        title={title}
                        description={description}
                        platform={platform}
                        industry={industry}
                    />
                </div>
            </Layout>
        </>
    )
}

export default CryptoApp
