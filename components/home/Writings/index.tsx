import articles from '../../../constants/articles'
import Article from '../../general/Article'
import CustomHeading from '../../general/CustomHeading'
import styles from './Writings.module.css'

const Writings = () => {
    return (
        <section id="#writings" className={styles.container}>
            <CustomHeading text="Writings" fontSize="text-2xl sm:text-4xl" marginBottom='mb-6 sm:mb-10' />
            <div className="rounded-3xl border-[0.4px] border-black-light p-4 sm:p-10">
                {articles.map(article => (
                    <Article title={article.title} key={article.title} link={article.link} />
                ))}
            </div>
        </section>
    )
}

export default Writings