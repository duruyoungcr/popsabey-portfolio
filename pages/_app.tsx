import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingContext } from '../context/LoadingContext';


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }
    const handleComplete = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [router])

  const handleLoading = (loading: boolean) => {
    setLoading(loading);
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <LoadingContext.Provider value={{ loading, setLoading: handleLoading }}>
        <Component {...pageProps} />
      </LoadingContext.Provider>
    </AnimatePresence>
  )
}

export default MyApp
