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
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    )
}

export default SEO