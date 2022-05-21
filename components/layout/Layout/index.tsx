import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '../../../context/LoadingContext'
import Loader from '../../Loader'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

interface ChildrenProps {
    children: React.ReactNode;
}


const Layout = ({ children }: ChildrenProps) => {
    const [path, setPath] = useState<string>('')
    const { loading } = useContext(LoadingContext)
    const router = useRouter();
    const sectionId = router.asPath.slice(router.asPath.indexOf('#')) || '';
    useEffect(() => {
        setPath(router.pathname);
    }, [router.pathname]);
    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <div className={`${styles.container} hide-scrollbar`}>
            <Header path={path} sectionId={sectionId} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout