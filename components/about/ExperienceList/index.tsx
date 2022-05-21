import styles from './ExperienceList.module.css'
import CustomHeading from '../../general/CustomHeading'
import experiences from '../../../constants/experiences'
import Experience from '../Experience'

const ExperienceList = () => {
    return (
        <section className={styles.container}>
            <div className='flex mb-10 items-center'>
                <CustomHeading text="EXPERIENCE" fontSize="text-2xl sm:text-3xl" marginBottom='mb-0' />
                <a className='text-blue underline ml-4' data-aos='fade-up' data-aos-delay='200' href='https://'>
                    Download Full Resume.pdf
                </a>
            </div>
            <div className={styles.skills__list}>
                {experiences.map(({ timeline, company, position, type, future, recent }, index) => (
                    <Experience
                        timeline={timeline}
                        company={company}
                        position={position}
                        type={type}
                        future={future}
                        recent={recent}
                        key={timeline}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default ExperienceList