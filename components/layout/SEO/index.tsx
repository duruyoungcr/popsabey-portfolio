import Head from 'next/head'
import React from 'react'

interface SEOPropsTypes {
    title: string,
    description?: string,
}

const SEO = ({ title, description }: SEOPropsTypes) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description || 'Portfolio Page of Popsabey'} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEO