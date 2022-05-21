
interface CustomHeadingPropTypes {
    text: string,
    fontSize: string,
    marginBottom?: string,
    lineHeight?: string
}
const CustomHeading = ({ text, fontSize, marginBottom = 'mb-4', lineHeight }: CustomHeadingPropTypes) => {
    return (
        <h2 data-aos='fade-up' className={`${fontSize} ${marginBottom} ${lineHeight} text-white-dark`}>{text}</h2>
    )
}

export default CustomHeading