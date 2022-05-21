import CustomLink from "../CustomLink"

interface ArticlePropTypes {
    title: string;
    link: string
}

const Article = ({ title, link }: ArticlePropTypes) => {
    return (
        <article className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-9 last-of-type:mb-0">
            <div className="rounded-full w-3 h-3 bg-blue mr-6 hidden sm:inline"></div>
            <h6
                className='sm:text-xl sm:mr-4 lg:mr-10 mb-2 sm:mb-0 text-white-light leading-6'
                style={{
                    fontFamily: 'Inter, sans-serif',
                }}
                data-aos='fade-up'
            >{title}
            </h6>
            <CustomLink href={link} text={'View article'} />
        </article>
    )
}

export default Article