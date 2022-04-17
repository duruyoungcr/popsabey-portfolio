import Link from 'next/link'
import socials from '../../../constants/socials'
import SocialLink from '../../general/SocialLink'
import styles from './MobileMenu.module.css'

const MobileMenu = ({ path, handleToggle }: { path: string, handleToggle: () => void }) => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link href={'/about'}>
                    <a className={`${styles.navLink} ${path === '/about' && 'text-white-light'}`}>
                        About
                    </a>
                </Link>
                <Link href={'/#projects'}>
                    <a onClick={handleToggle} className={`${styles.navLink} ${path === '/projects' && 'text-white-light'}`}>
                        Projects
                    </a>
                </Link>
                <Link href={'/uis'}>
                    <a className={`${styles.navLink} ${path === '/uis' && 'text-white-light'}`}>
                        UIs
                    </a>
                </Link>
                <Link href={`${path}#contact`}>
                    <a onClick={handleToggle} className={`${styles.navLink} ${path === '/contact' && 'text-white-light'}`}>
                        Contact Me
                    </a>
                </Link>
            </div>
            <div className={styles.socials}>
                {socials.map((social, index) => (
                    <SocialLink href={social.href} key={index} name={social.name} width={social.width} height={social.height} />
                ))}
            </div>
        </div>
    )
}

export default MobileMenu