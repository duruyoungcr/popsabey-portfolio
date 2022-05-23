import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingContext } from '../context/LoadingContext';
import AOS from 'aos';
import 'aos/dist/aos.css';



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const handleLoading = (loading: boolean) => {
    setLoading(loading);
  }
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: -50,
    });
  }, [])

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [router.events])
  return (
    <AnimatePresence exitBeforeEnter>
      <LoadingContext.Provider value={{ loading, setLoading: handleLoading }}>
        <Component {...pageProps} />
      </LoadingContext.Provider>
    </AnimatePresence>
  )
}

export default MyApp
