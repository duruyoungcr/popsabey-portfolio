import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingContext } from '../context/LoadingContext';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const containerRef = useRef(null)
  const handleLoading = (loading: boolean) => {
    setLoading(loading);
  }
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
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={[router.asPath]}
      containerRef={containerRef}
    >
      <AnimatePresence exitBeforeEnter>
        <LoadingContext.Provider value={{ loading, setLoading: handleLoading }}>
          <div ref={containerRef} data-scroll-container>
            <Component {...pageProps} />
          </div>
        </LoadingContext.Provider>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  )
}

export default MyApp
