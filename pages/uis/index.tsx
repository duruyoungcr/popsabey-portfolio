import type { NextPage } from 'next'
import Layout from '../../components/layout/Layout'
import SEO from '../../components/layout/SEO'
import UI from '../../components/UI'

const UIPage: NextPage = (props) => {
    return (
        <>
            <SEO title="UIS | Popsabey Portfolio" />
            <Layout>
                <UI />
            </Layout>
        </>
    )
}

export default UIPage
