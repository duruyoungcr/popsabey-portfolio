import projects from '../../../constants/projects'
import CustomHeading from '../../general/CustomHeading'
import Project from '../Project'
import SystemDesign from '../SystemDesign'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
            <CustomHeading text='some of my work' fontSize='text-2xl sm:text-4xl' marginBottom='mb-3 sm:mb-10' />
            <p data-aos='fade-right' className='sm:text-lg w-3/4 sm:w-full leading-7 mb-8'>Please visit my {' '}
                <a
                    href="https://behance.net/popsabey"
                    className='underline-offset-2 underline text-blue'
                    target='_blank' rel="noreferrer"
                >
                    behance profile
                </a>
                {' '} to view my latest/updated projects
            </p>
            <SystemDesign />
            <div className={styles.list}>
                {projects.map(project => (
                    <Project
                        title={project.title}
                        desc={project.desc}
                        slug={project.slug}
                        key={project.title}
                        live={project.live}
                        blurDataURL={project.blurDataURL}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects