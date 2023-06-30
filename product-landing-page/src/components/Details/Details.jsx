import styles from './Details.module.css';
import { useState } from 'react';
import data from '../../data.json';
import { Navigation } from '../Navigation/Navigation';
import { DetailsContent } from '../DetailsContent/DetailsContent';

export const Details = () => {
	const [activeCategory, setActiveCategory] = useState(data[0].category);

	return (
		<div className={styles.container}>
			<Navigation
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>

			<DetailsContent activeCategory={activeCategory} />
		</div>
	);
};
