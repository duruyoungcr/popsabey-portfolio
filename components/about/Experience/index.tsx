import CustomLink from "../../general/CustomLink"

interface ExperiencePropsTypes {
    timeline: string,
    company: string,
    position: string,
    type: string,
    future: boolean,
    recent: boolean,
    index: number
}

const Experience = ({ timeline, company, position, type, future, recent, index }: ExperiencePropsTypes) => {
    return (
        <div
            data-aos='fade-up' data-aos-delay={index * 150}
            style={{
                background: 'linear-gradient(180deg, #030732 0%, #010424 100%)',
            }}
            className={`border border-black-light rounded-2xl min-h-[223px] p-6 transition-all duration-500 ease-in-out ${!future && 'hover:-translate-y-6'} hover:shadow hover:shadow-blue-light`}
        >
            <h4 className='mb-8 sm:mb-10 text-xl text-blue'>{type}{recent && '(recent)'}</h4>
            {future ?
                <>
                    <p className='mb-2'>Exciting!</p>
                    <p className='font-medium text-xl mb-2'>************</p>
                    <CustomLink href={'mailto:popsabey.ux@gmail.com'} text='send a message' />
                </>
                :
                <>
                    <p className='mb-2'>{company}</p>
                    <p className='font-medium text-xl mb-2'>{position}</p>
                    <p>{timeline}</p>
                </>
            }
        </div>
    )
}

export default Experience