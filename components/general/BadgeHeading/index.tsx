
const BadgeHeading = ({ text }: { text: string }) => {
    return (
        <div className='border border-blue-light rounded-lg py-3.5 px-6 w-[225px] bg-blue-darkest mb-10'>
            <p className='text-lg uppercase text-white-darkest'>{text}</p>
        </div>
    )
}

export default BadgeHeading