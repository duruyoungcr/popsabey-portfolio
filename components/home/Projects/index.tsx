import projects from '../../../constants/projects'
import CustomHeading from '../../general/CustomHeading'
import Project from '../Project'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
            <CustomHeading text='some of my work' fontSize='text-4xl' marginBottom='mb-10' />
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