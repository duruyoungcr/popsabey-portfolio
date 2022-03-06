import CustomLink from "../CustomLink"

interface ArticlePropTypes {
    title: string;
    link: string
}

const Article = ({ title, link }: ArticlePropTypes) => {
    return (
        <article className="flex items-center mb-9 last-of-type:mb-0">
            <div className="rounded-full w-3 h-3 bg-blue mr-6"></div>
            <h6 className='text-xl mr-4 lg:mr-10'>{title}</h6>
            <CustomLink href={link} text={'View article'} />
        </article>
    )
}

export default Article