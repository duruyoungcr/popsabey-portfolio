
const Skill = ({ title, description }: { title: string, description: string }) => {
    return (
        <div
            style={{
                background: 'linear-gradient(180deg, #030732 0%, #010424 100%)',
            }}
            className='border border-black-light rounded-2xl min-h-[235px] px-7 py-6 transition-all duration-500 ease-in-out hover:-translate-y-6 hover:shadow hover:shadow-blue-light'
        >
            <p className='mb-2 text-xl'>{title}</p>
            <p className='text-lg'>{description}</p>
        </div>
    )
}

export default Skill