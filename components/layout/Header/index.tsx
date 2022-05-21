import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Header.module.css'
import LOGO from '../../../public/logo.png'
import Link from 'next/link'
import socials from '../../../constants/socials'
import SocialLink from '../../general/SocialLink'
import HamburgerMenu from '../HamburgerMenu'
import MobileMenu from '../MobileMenu'
import { motion } from "framer-motion";


interface HeaderPropTypes {
    path: string,
    sectionId?: string,
}

const variants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: (i / 2) * 0.15,
            easing: "easeInOut"
        },
    }),
    hidden: { opacity: 0, y: -50 },
    exit: {
        opacity: 0, y: -50
    }
}

const Header = ({ path, sectionId }: HeaderPropTypes) => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <header className={styles.container}>
            <div className='flex items-center'>
                <Link href={'/'} passHref>
                    <motion.a
                        animate='visible'
                        initial='hidden'
                    >
                        <Image src={LOGO} alt="logo" layout={'fixed'} width={40} height={40} placeholder='blur' />
                    </motion.a>
                </Link>
                <nav className={styles.nav}>
                    <Link href={'/about'} passHref>
                        <motion.a
                            custom={2}
                            variants={variants}
                            animate='visible'
                            initial='hidden'
                            className={`${styles.navLink} ${path === '/about' && 'text-white-light'}`}
                        >
                            About
                        </motion.a>
                    </Link>
                    <Link href={'/#projects'} passHref>
                        <motion.a
                            custom={3}
                            variants={variants}
                            animate='visible'
                            initial='hidden'
                            className={`${styles.navLink} ${sectionId && sectionId === '#projects' && 'text-white-light'}`}
                        >
                            Projects
                        </motion.a>
                    </Link>
                    <Link href={'/uis'} passHref>
                        <motion.a
                            className={`${styles.navLink} ${path === '/uis' && 'text-white-light'}`}
                            custom={4}
                            variants={variants}
                            animate='visible'
                            initial='hidden'
                        >
                            UIs
                        </motion.a>
                    </Link>
                    <Link href={`${path}#contact`} passHref>
                        <motion.a
                            custom={5}
                            variants={variants}
                            animate='visible'
                            initial='hidden'
                            className={`${styles.navLink} ${sectionId && sectionId === '#contact' && 'text-white-light'}`}
                        >
                            Contact Me
                        </motion.a>
                    </Link>
                </nav>
            </div>
            <div className={styles.socials}>
                {socials.map((social, index) => (
                    <motion.div
                        custom={6 + index}
                        variants={variants}
                        animate='visible'
                        initial='hidden'
                        exit='exit'
                        key={index}
                    >
                        <SocialLink href={social.href} key={index} name={social.name} width={social.width} height={social.height} />
                    </motion.div>
                ))}
            </div>
            <div className='sm:hidden block'>
                <HamburgerMenu toggle={toggle} handleToggle={handleToggle} />
                {toggle && <MobileMenu path={path} handleToggle={handleToggle} sectionId={sectionId} />}
            </div>
        </header>
    )
}

export default Header