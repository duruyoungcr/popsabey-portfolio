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
        <div className='bg-blue-darkest rounded-2xl max-h-[580px] flex justify-between'>
            <div className={`${inversed && 'order-2'} ${styles.imageContainer}`}>
                <Image src={BASE_IMAGE_PATH + imageName + '.png'} width={400} height={576} alt={'Person'} />
            </div>
            <div className={`${inversed ? 'order-1 pl-[22px] mr-14' : 'pr-[22px] ml-14'} flex flex-col justify-between text-lg min-h-full py-5`}>
                <p className='capitalize'>{name} {' '} | {' '} {role}</p>
                <div className='flex items-center text-lg xxl:text-xl'>
                    <p className='mr-6'>Age: {age}</p>
                    <p>Gender: {gender}</p>
                </div>
                <p>{summary}</p>
                <p>Challenges/Needs</p>
                <p>{challenges[0]}</p>
                <p>{challenges[1]}</p>
            </div>
        </div>
    )
}

export default PersonaProfile