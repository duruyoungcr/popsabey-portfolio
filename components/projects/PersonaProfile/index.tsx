import Image from 'next/image'
import styles from './PersonaProfile.module.css'

const BASE_IMAGE_PATH = '/assets/img/projects/crypto-app/'

interface PersonaProfilePropsTypes {
    name: string,
    age: number,
    gender: string,
    role: string,
    summary: string,
    challenges: Array<string>
    imageName: string,
    inversed?: boolean
}

const PersonaProfile = ({ name, age, gender, role, summary, challenges, imageName, inversed = false }: PersonaProfilePropsTypes) => {
    return (
        <div data-aos='fade-up' data-aos-delay='100' className='bg-blue-darkest rounded-2xl sm:max-h-[580px] flex flex-col sm:flex-row justify-between'>
            <div className={`${inversed && 'sm:order-2'} ${styles.imageContainer}`}>
                <Image src={BASE_IMAGE_PATH + imageName + '.png'} width={400} height={576} alt={'Person'} />
            </div>
            <div className={`${inversed ? 'sm:order-1 sm:pl-[22px] sm:mr-14' : 'sm:pr-[22px] sm:ml-14'} flex flex-col justify-between text-lg min-h-full px-3 sm:px-0 py-10 sm:py-5`}>
                <p className='capitalize'>{name} {' '} | {' '} {role}</p>
                <div className='flex items-center text-lg xxl:text-xl mb-4 sm:mb-0'>
                    <p className='mr-6'>Age: {age}</p>
                    <p>Gender: {gender}</p>
                </div>
                <p className='mb-4 sm:mb-0'>{summary}</p>
                <p>Challenges/Needs</p>
                <p>{challenges[0]}</p>
                <p>{challenges[1]}</p>
            </div>
        </div>
    )
}

export default PersonaProfile