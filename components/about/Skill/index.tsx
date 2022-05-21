
const Skill = ({ title, description, index }: { title: string, description: string, index: number }) => {
    return (
        <div
            style={{
                background: 'linear-gradient(180deg, #030732 0%, #010424 100%)',
            }}
            className='border border-black-light rounded-2xl min-h-[180px] sm:min-h-[235px] p-7 sm:px-7 sm:py-6 transition-all duration-500 ease-in-out hover:-translate-y-6 hover:shadow hover:shadow-blue-light'
            data-aos='fade-up' data-aos-delay={index * 150}
        >
            <p className='mb-2 text-xl'>{title}</p>
            <p className='font-light sm:text-lg leading-7'>{description}</p>
        </div>
    )
}

export default Skill