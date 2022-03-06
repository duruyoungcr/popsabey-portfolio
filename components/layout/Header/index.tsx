import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'
import LOGO from '../../../public/logo.png'
import Link from 'next/link'
import socials from '../../../constants/socials'
import SocialLink from '../../general/SocialLink'

interface HeaderPropTypes {
    path: string,
}

const Header = ({ path }: HeaderPropTypes) => {
    return (
        <header className={styles.container}>
            <div className='flex items-center'>
                <Link href={'/'}>
                    <a>
                        <Image src={LOGO} layout={'fixed'} width={40} height={40} />
                    </a>
                </Link>
                <nav className={styles.nav}>
                    <Link href={'/about'}>
                        <a className={`${styles.navLink} ${path === '/about' && 'text-white-light'}`}>
                            About
                        </a>
                    </Link>
                    <Link href={'/projects'}>
                        <a className={`${styles.navLink} ${path === '/projects' && 'text-white-light'}`}>
                            Projects
                        </a>
                    </Link>
                    <Link href={'/uis'}>
                        <a className={`${styles.navLink} ${path === '/uis' && 'text-white-light'}`}>
                            UIs
                        </a>
                    </Link>
                    <Link href={'/contact'}>
                        <a className={`${styles.navLink} ${path === '/contact' && 'text-white-light'}`}>
                            Contact Me
                        </a>
                    </Link>
                </nav>
            </div>
            <div className={styles.socials}>
                {socials.map((social, index) => (
                    <SocialLink href={social.href} key={index} name={social.name} width={social.width} height={social.height} />
                ))}
            </div>
        </header>
    )
}

export default Header