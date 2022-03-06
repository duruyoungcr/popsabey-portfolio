
interface CustomHeadingPropTypes {
    text: string,
    fontSize: string,
    marginBottom?: string
}
const CustomHeading = ({ text, fontSize, marginBottom = 'mb-4' }: CustomHeadingPropTypes) => {
    return (
        <h2 className={`${fontSize} ${marginBottom} text-white-dark`}>{text}</h2>
    )
}

export default CustomHeading