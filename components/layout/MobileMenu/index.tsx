import Link from 'next/link'
import socials from '../../../constants/socials'
import SocialLink from '../../general/SocialLink'
import styles from './MobileMenu.module.css'
import { motion } from "framer-motion";

const variants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            easing: "easeInOut"
        },
    }),
    hidden: { opacity: 0, y: 50 },
    exit: {
        opacity: 0, y: 50
    }
}

const MobileMenu = ({ path, handleToggle }: { path: string, handleToggle: () => void }) => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={styles.container}
        >
            <motion.div
                className={styles.nav}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                <Link href={'/about'} >
                    <motion.a
                        custom={1}
                        variants={variants}
                        animate='visible'
                        initial='hidden'
                        className={`${styles.navLink} ${path === '/about' && 'text-white-light'}`}
                    >
                        About
                    </motion.a>
                </Link>
                <Link href={'/#projects'}>
                    <motion.a
                        custom={2}
                        variants={variants}
                        animate='visible'
                        initial='hidden'
                        onClick={handleToggle}
                        className={`${styles.navLink} ${path === '/projects' && 'text-white-light'}`}
                    >
                        Projects
                    </motion.a>
                </Link>
                <Link href={'/uis'}>
                    <motion.a
                        custom={3}
                        variants={variants}
                        animate='visible'
                        initial='hidden'
                        className={`${styles.navLink} ${path === '/uis' && 'text-white-light'}`}
                    >
                        UIs
                    </motion.a>
                </Link>
                <Link href={`${path}#contact`}>
                    <motion.a
                        custom={4}
                        variants={variants}
                        animate='visible'
                        initial='hidden'
                        exit='exit'
                        onClick={handleToggle}
                        className={`${styles.navLink} ${path === '/contact' && 'text-white-light'}`}
                    >
                        Contact Me
                    </motion.a>
                </Link>
            </motion.div>
            <div className={styles.socials}>
                {socials.map((social, index) => (
                    <motion.div
                        custom={6 + index}
                        variants={variants}
                        animate='visible'
                        initial='hidden'
                        exit='exit'
                    >
                        <SocialLink href={social.href} key={index} name={social.name} width={social.width} height={social.height} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default MobileMenu