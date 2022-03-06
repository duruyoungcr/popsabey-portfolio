import reviews, { baseImagePath } from '../../../constants/reviews'
import Review from '../../general/Review'
import styles from './Reviews.module.css'

const Reviews = () => {
    return (
        <section id='#reviews' className={styles.container}>
            <div className={styles.list}>
                {reviews.map((review, index) => (
                    <Review
                        key={index}
                        text={review.text}
                        position={review.position}
                        name={review.name}
                        imagePath={baseImagePath + (index + 1) + '.png'}
                    />
                ))}
            </div>
        </section>
    )
}

export default Reviews