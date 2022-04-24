interface ProjectOutlinePropsTypes {
    year: string,
    role: string,
    platform: string,
    industry: string,
    duration: string,
}

const ProjectOutline = ({ year, role, platform, industry, duration }: ProjectOutlinePropsTypes) => {
    return (
        <div className='py-4 px-4 rounded-lg bg-blue-darkest border border-blue-light text-white-darkest text-lg sm:grid sm:grid-cols-3 flex items-center sm:items-start justify-between gap-6 max-w-full sm:max-w-[754px] overflow-x-scroll sm:overflow-hidden hide-scrollbar'>
            <div className='flex sm:flex-col gap-6'>
                <div className='sm:mb-4 flex min-w-max'>
                    <p>Year:{' '} </p>
                    <p className='ml-1 sm:ml-2'>{' '}{year}</p>
                </div>
                <div className='sm:mb-4 flex min-w-max'>
                    <p>Platform:</p>
                    <p className='ml-1'>{platform}</p>
                </div>
            </div>
            <div className='flex sm:flex-col gap-6'>
                <div className='sm:mb-4 flex min-w-max'>
                    <p>Industry:</p>
                    <p className='ml-1 sm:ml-2'>{industry}</p>
                </div>
                <div className='sm:mb-4 flex min-w-max'>
                    <p>Duration:</p>
                    <p className='ml-1 sm:ml-2'>{duration}</p>
                </div>
            </div>
            <div className='text-right flex sm:flex-col gap-6'>
                <div className='sm:mb-4 flex min-w-max'>
                    <p>Role:</p>
                    <p className='ml-1 sm:ml-2'>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectOutline