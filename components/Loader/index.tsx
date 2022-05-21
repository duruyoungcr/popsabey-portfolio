import React from 'react'
import styles from './Loader.module.css'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import Loading from '../../public/assets/img/svg/loading.svg'

const Loader = () => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                className={styles.container}
            >
                <div className={styles.loader}>
                    <Image src={Loading} alt='popsabey' layout='fill' priority />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Loader