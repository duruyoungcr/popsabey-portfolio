import CustomHeading from "../CustomHeading"
import ProjectOutline from "../ProjectOutline"

interface ProjectIntroPropsTypes {
    year: string,
    role: string,
    platform: string,
    industry: string,
    duration: string,
    title: string,
    description: string
}

const ProjectIntro = ({ year, role, platform, industry, duration, title, description }: ProjectIntroPropsTypes) => {
    return (
        <div className='w-[754px]'>
            <CustomHeading text={title} fontSize="text-3xl" marginBottom="mb-6" lineHeight="leading-[77px]" />
            <p className='text-white-lightest mb-6'>{description}</p>
            <ProjectOutline
                year={year}
                role={role}
                platform={platform}
                industry={industry}
                duration={duration}
            />
        </div>
    )
}

export default ProjectIntro