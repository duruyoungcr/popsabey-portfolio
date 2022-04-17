import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import MEMOJI from '../../../public/assets/img/memoji/footer.png'
import CustomLink from '../../general/CustomLink'
import socials from '../../../constants/socials'
import SocialLink from '../../general/SocialLink'

const Footer = () => {
    return (
        <footer>
            <div className={styles.container} id="contact">
                <div className={styles.contact}>
                    <div className={styles.top}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>
                                Let’s build magic together
                            </h2>
                            <p>
                                Do you think I am a good fit for your project? Reach out,  I’d love to hear about your project and/or ideas. I am currently open to full-time, contract or part-time opportunities. Drop a message, looking forward to it.
                            </p>
                        </div>
                        <div className={styles.imgcontainer}>
                            <Image src={MEMOJI} width={341} height={341} alt='Memoji' placeholder='blur' />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <CustomLink href={'mailto:popsabey@gmail.com'} text='send a message' />
                        <div className={styles.socials}>
                            {socials.map((social, index) => (
                                <SocialLink href={social.href} key={index} name={social.name} width={social.width} height={social.height} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Designed by me (Jaykay Inspired)</p>
                <p>DEVELOPED BY <a target="_blank" href="http://dycr.dev" rel="noreferrer"> RAY</a></p>
            </div>
        </footer>
    )
}

export default Footer