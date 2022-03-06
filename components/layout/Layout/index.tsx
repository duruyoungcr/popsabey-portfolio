import { useRouter } from 'next/router'
import React, { useLayoutEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

interface ChildrenProps {
    children: React.ReactNode;
}


const Layout = ({ children }: ChildrenProps) => {
    const [path, setPath] = useState<string>('')
    const router = useRouter();
    useLayoutEffect(() => {
        setPath(router.pathname);
    }, [router.route])
    return (
        <div className={styles.container}>
            <Header path={path} />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout