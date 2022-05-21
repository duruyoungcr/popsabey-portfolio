import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import MEMOJI from '../../../public/assets/img/memoji/footer.png'
import CustomLink from '../../general/CustomLink'
import socials from '../../../constants/socials'
import SocialLink from '../../general/SocialLink'
import { motion } from "framer-motion";

const variants = {
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.15,
            easing: "easeInOut"
        },
    }),
    hidden: { opacity: 0, x: 50 },
    exit: {
        opacity: 0, x: 50
    }
}

const Footer = () => {
    return (
        <footer>
            <div className={styles.container} id="contact" data-aos='fade-up'>
                <div className={styles.contact} >
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
                        <CustomLink href={'mailto:popsabey.ux@gmail.com'} text='send a message' />
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
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Designed by me (Jaykay Inspired)</p>
                <p>DEVELOPED BY <a target="_blank" href="http://dycr.dev" rel="noreferrer" className='text-blue'> RAY</a></p>
            </div>
        </footer>
    )
}

export default Footer