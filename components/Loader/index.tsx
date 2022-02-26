import React from 'react'
import styles from './Loader.module.css'
import { motion, AnimatePresence } from "framer-motion"

const LoaderAnimationProps = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
}
const Loader = () => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                className={styles.container}
            >
                <div className={styles.loader}>
                    <motion.h1
                        {...LoaderAnimationProps}
                        className={`${styles.title} animate-pulse`}
                    >
                        popsabey
                    </motion.h1>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Loader