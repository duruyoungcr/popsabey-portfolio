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
        >
            <div className={styles.imageContainer}>
                <Image src={`${imageBasePath + slug}.png`} width={550} height={330} alt={title} placeholder='blur' blurDataURL={blurDataURL} />
            </div>
            <div className='max-w-[343px] pr-10'>
                <CustomHeading text={title} fontSize="text-[40px]" marginBottom='mb-4' />
            </div>
            <p className='mb-6 pr-10'>{desc}</p>
            {live ?
                <CustomLink text='read case study' href={`/projects/${slug}`} />
                :
                <h4 className='text-yellow'>coming soon</h4>
            }
        </div>
    )
}

export default Project