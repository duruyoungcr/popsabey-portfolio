import CustomHeading from '../../general/CustomHeading'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <section className={styles.container}>
            <CustomHeading text='some of my work' fontSize='text-4xl' marginBottom='mb-10' />
        </section>
    )
}

export default Projects