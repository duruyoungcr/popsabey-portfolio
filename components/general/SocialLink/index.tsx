import Image from 'next/image'
import styles from './SocialLink.module.css'

interface socialLinkPropTypes {
    href: string,
    name: string,
    width: string,
    height: string
}

const SocialLink = ({ href, name, width, height }: socialLinkPropTypes) => {
    return (
        <a href={href} className={styles.link}>
            <img src={`/assets/img/socials/${name}.png`} width={width} height={height} alt={name} />
        </a>
    )
}

export default SocialLink