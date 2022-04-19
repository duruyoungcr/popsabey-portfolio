import Image from 'next/image'
import styles from './Hero.module.css'
import HeroImage from '../../../public/assets/img/memoji/hero.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <Image src={HeroImage} alt="Memoji Hi" width={445} height={445} placeholder='blur' />
            </div>
            <div className={styles.text}>
                <h1 className={styles.salute}>Hello, I am popsabey</h1>
                <div className='max-w-[679px] font-[300] sm:text-lg mb-4 leading-9'>
                    <p className='mb-4'>
                        I started off design after finishing Desktop Publishing training where I was fascinated with being able to import fine elements from programs like Instant Artist into CorelDraw 9 and creating color images with it, that is where my design journey began as went ahead and I learnt Graphics Design professionally.
                    </p>
                    <p>
                        The idea that I can help people make better decisions, help businesses scale and make money, better people’s day to day lives through design is what drove me to Product Design as I found that it would put me at the forefront of solving problems with design.
                        I am a self-taught designer with an extra eye for users, consumers and product owners alike.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero