import data from '../../data.json';
import styles from './Navigation.module.css';

export const Navigation = ({ activeCategory, setActiveCategory }) => {
	return (
		<nav>
			<ul className={styles.links}>
				{data.map((elem) => {
					return (
						<li key={elem.category}>
							<button
								className={
									elem.category === activeCategory
										? styles.active
										: ''
								}
								onClick={() => {
									setActiveCategory(elem.category);
								}}
							>
								<img src={elem.icon} />
								<strong>{elem.category}</strong>
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
