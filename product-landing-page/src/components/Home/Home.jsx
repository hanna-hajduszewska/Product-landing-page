import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<h2>fitbit charge 5</h2>
					<h1>Do what’s best for your body</h1>

					<p>
						The advanced fitness and health tracker that shows you
						whether you are ready to work out or should prioritize
						recovery.
					</p>
					<Link to="/details" className={styles.link}>
						Learn more
					</Link>
				</div>
				<img
					src="images/black.png"
					alt="fitbit charge 5 image"
				/>
			</div>
		</>
	);
};
