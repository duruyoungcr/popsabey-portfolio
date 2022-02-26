import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

interface ChildrenProps {
    children: React.ReactNode;
}


const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout