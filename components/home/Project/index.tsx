import Image from 'next/image'
import { imageBasePath } from '../../../constants/projects'
import CustomHeading from '../../general/CustomHeading'
import CustomLink from '../../general/CustomLink'
import styles from './Project.module.css'

interface ProjectPropsTypes {
    title: string,
    desc: string,
    slug: string,
    live: boolean,
    blurDataURL: string
}

const Project = ({ title, desc, slug, live, blurDataURL }: ProjectPropsTypes) => {
    return (
        <div
            className={styles.card}
            style={{
                background: "linear-gradient(180deg, #030732 66.27%, #010424 100%)"
            }}
            data-aos='fade-up'
        >
            <div className={styles.imageContainer}>
                <Image src={`${imageBasePath + slug}.png`} width={550} height={330} alt={title} placeholder='blur' blurDataURL={blurDataURL} />
            </div>
            <div className='max-w-[360px]'>
                <CustomHeading text={title} fontSize="text-xl sm:text-[40px]" marginBottom='mb-2 sm:mb-4' />
            </div>
            <p className='mb-4 sm:mb-6 font-light leading-7 pr-10'>{desc}</p>
            {live ?
                <CustomLink text='read case study' href={`/project/${slug}`} />
                :
                <h4 className='text-yellow'>coming soon</h4>
            }
        </div>
    )
}

export default Project