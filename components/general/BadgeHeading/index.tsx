
const BadgeHeading = ({ text }: { text: string }) => {
    return (
        <div data-aos='fade-up' className='border border-blue-light rounded-lg py-3 sm:py-3.5 px-4 sm:px-6 min-w-max sm:min-w-[225px] max-w-max bg-blue-darkest mb-4 sm:mb-10 sm:text-lg uppercase text-white-darkest'>
            {text}
        </div>
    )
}

export default BadgeHeading