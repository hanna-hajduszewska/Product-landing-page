import styles from './DetailsContent.module.css';
import data from '../../data.json';
import { Link } from 'react-router-dom';

export const DetailsContent = ({ activeCategory }) => {
	return (
		<div className={styles.wrapper}>
			{data.map((elem) => {
				return (
					<article
						id={elem.category}
						key={elem.category}
						className={
							elem.category === activeCategory
								? styles.active
								: ''
						}
					>
						<Link to="/" className={styles.returnLink}>
							Back to homepage
						</Link>
						<div className={styles.articleContainer}>
							<div>
								<img src={elem.image} />
							</div>
							<div className={styles.textContent}>
								<span>{elem.category}</span>
								<h3>{elem.title}</h3>
								<p>{elem.text}</p>
								<Link to="/cart" className={styles.link}>
									Buy now
								</Link>
							</div>
						</div>
					</article>
				);
			})}
		</div>
	);
};
