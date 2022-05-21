import Image from 'next/image'
import styles from './Hero.module.css'
import HeroImage from '../../../public/assets/img/memoji/hero.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image} data-aos="fade-down">
                <Image src={HeroImage} alt="Memoji Hi" width={445} height={445} placeholder='blur' />
            </div>
            <div className={styles.text}>
                <h1 className={styles.salute} data-aos="fade-down">Hello, I am popsabey</h1>
                <h2 className={styles.desc} data-aos="fade-down">i design digital experiences</h2>
                <p className='max-w-[679px] font-[300] sm:text-lg mb-4 leading-9' data-aos="fade-up">
                    I am a Product Designer from Nigeria. I have over 3+ years experience in using industry’s standard practices in delivering user-centric products, delightful product experiences and achieving product-business goals.
                </p>
                <p className='sm:text-lg' data-aos="fade-up">
                    Learn
                    <Link href={'/about'}>
                        <a className={styles.link}> more about me </a>
                    </Link>
                    or skip to my
                    <Link href={'/#projects'}>
                        <a className={styles.link}> work</a>
                    </Link>.
                </p>
            </div>
        </section>
    )
}

export default Hero