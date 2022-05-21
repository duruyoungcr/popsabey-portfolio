interface ProjectOutlinePropsTypes {
    year: string,
    role: string,
    platform: string,
    industry: string,
    duration: string,
}

const ProjectOutline = ({ year, role, platform, industry, duration }: ProjectOutlinePropsTypes) => {
    return (
        <div data-aos='fade-up' data-aos-delay='400' className='rounded-lg bg-blue-darkest border border-blue-light text-white-darkest text-lg sm:max-w-[754px] min-w-max'>
            <div
                className='sm:grid sm:grid-cols-3 flex items-center sm:items-start justify-between outline-max sm:max-w-[754px] sm:min-w-max gap-6 overflow-x-scroll hide-scrollbar pr-8 sm:pr-0 py-4 px-4'
            >
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
        </div>
    )
}

export default ProjectOutline