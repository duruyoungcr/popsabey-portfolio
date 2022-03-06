import Image from 'next/image'
import styles from './Hero.module.css'
import HeroImage from '../../../public/assets/img/memoji/hero.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <Image src={HeroImage} alt="Memoji Hi" width={445} height={445} />
            </div>
            <div className={styles.text}>
                <h1 className={styles.salute}>Hello, I am popsabey</h1>
                <h2 className={styles.desc}>i design digital experiences</h2>
                <p className='max-w-[679px] text-lg mb-4'>
                    I am Product Designer based in Nigeria. I am skilled in using industry’s standard practices in delivering user-centric products, delightful product experiences and achieving product-business goals.
                </p>
                <p className='text-lg'>Learn
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