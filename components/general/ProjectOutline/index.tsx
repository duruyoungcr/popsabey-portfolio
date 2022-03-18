interface ProjectOutlinePropsTypes {
    year: string,
    role: string,
    platform: string,
    industry: string,
    duration: string,
}

const ProjectOutline = ({ year, role, platform, industry, duration }: ProjectOutlinePropsTypes) => {
    return (
        <div className='py-4 px-4 rounded-lg bg-blue-darkest border border-blue-light text-white-darkest text-lg grid grid-cols-3 max-w-[754px]'>
            <div>
                <p className='mb-4'>Year: {year}</p>
                <p>Platform: {platform}</p>
            </div>
            <div>
                <p className='mb-4'>Industry: {industry}</p>
                <p>Duration: {duration}</p>
            </div>
            <div className='text-right'>
                <p className='mb-4'>Role: {role}</p>
            </div>
        </div>
    )
}

export default ProjectOutline