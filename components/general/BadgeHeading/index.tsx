
const BadgeHeading = ({ text }: { text: string }) => {
    return (
        <div className='border border-blue-light rounded-lg py-3.5 px-6 min-w-[225px] max-w-max bg-blue-darkest mb-10 text-lg uppercase text-white-darkest'>
            {text}
        </div>
    )
}

export default BadgeHeading