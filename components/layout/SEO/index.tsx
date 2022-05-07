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
            <meta name="theme-color" content="#1D5ABF" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#1D5ABF" />
            <meta name="apple-mobile-web-app-title" content="Popsabey Portfolio Page" />
            <meta name="application-name" content="Popsabey Portfolio Page" />
            <meta name="msapplication-TileColor" content="#1D5ABF" />
            <meta name='author' content="Duru-young Raymond" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    )
}

export default SEO