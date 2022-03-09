import styles from './SkillSet.module.css'
import CustomHeading from '../../general/CustomHeading'
import skills from '../../../constants/skills'
import Skill from '../Skill'

const SkillSet = () => {
    return (
        <section className={styles.container}>
            <CustomHeading text="Skillset" fontSize="text-3xl" marginBottom='mb-10' />
            <div className={styles.skills__list}>
                {skills.map(({ title, description }) => (
                    <Skill title={title} description={description} key={title} />
                ))}
            </div>
        </section>
    )
}

export default SkillSet