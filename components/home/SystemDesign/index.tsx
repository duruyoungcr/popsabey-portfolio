import Image from 'next/image'
import CustomHeading from '../../general/CustomHeading'
import CustomLink from '../../general/CustomLink'
import styles from './SystemDesign.module.css'
import systemImage from '../../../public/assets/img/system/system-design.png'

const SystemDesign = () => {
    return (
        <section className={styles.container} data-aos='fade-up'>
            <div className={styles.texts}>
                <h4 className='text-blue hidden sm:block mb-20 text-2xl'>System Design</h4>
                <CustomHeading
                    text='REZZARS’ DESIGN SYSTEM: DESIGN AND MANAGEMENT'
                    fontSize='text-xl sm:text-[56px]'
                    lineHeight='sm:leading-[67px]'
                />
                <p className='mb-4 sm:mb-10' data-aos='fade-up'>
                    This study is a walkthrough on creating, documenting and managing a design system(foundation design file) for projects and teams.
                </p>
                <CustomLink href={'/project/system-design'} text='read case study' />
            </div>
            <div className={styles.imgcontainer}>
                <Image src={systemImage} width={590} height={524} alt='system design' placeholder='blur' />
            </div>
        </section>
    )
}

export default SystemDesign