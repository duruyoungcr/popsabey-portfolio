import Image from 'next/image'
import CustomHeading from '../../general/CustomHeading'
import CustomLink from '../../general/CustomLink'
import styles from './SystemDesign.module.css'
import systemImage from '../../../public/assets/img/system/system-design.png'

const SystemDesign = () => {
    return (
        <section className={styles.container}>
            <div className={styles.texts}>
                <h4 className='text-blue mb-20 text-2xl'>System Design</h4>
                <CustomHeading
                    text='REZZARS’ DESIGN SYSTEM: DESIGN AND MANAGEMENT'
                    fontSize='text-[56px]'
                    lineHeight='leading-[67px]'
                />
                <p className='mb-10'>
                    This study is a walkthrough on creating, documenting and managing a design system(foundation design file) for projects and teams.
                </p>
                <CustomLink href={'/project/system-design'} text='read case study' />
            </div>
            <div className={styles.imgcontainer}>
                <Image src={systemImage} width={590} height={524} layout='responsive' alt='system design' placeholder='blur' />
            </div>
        </section>
    )
}

export default SystemDesign