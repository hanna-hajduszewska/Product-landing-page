import styles from './Cart.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Cart = () => {
	const [counter, setCounter] = useState(0);

	const increaseValue = (e) => {
		e.preventDefault();
		if (counter < 10) {
			setCounter(counter + 1);
		} else {
			toast.error('You cannot add more than 10 items');
		}
	};

	const decreaseValue = (e) => {
		e.preventDefault();
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (counter > 0 && counter <= 10) {
			toast.success('Order has been placed');
			setCounter(0);
		} else if (counter === 0) {
			toast.error('You cannot order 0 items');
		}
	};

	return (
		<div className={styles.cartContainer}>
			<Toaster />
			<h3>Shopping cart: </h3>
			<div className={styles.itemContainer}>
				<img
					src="images/black.png"
					alt="fitbit charge 5 photo"
				/>
				<div className={styles.itemContent}>
					<strong>Fitbit Charge 5 Health & Fitness Tracker</strong>
					<strong>119.95$</strong>
				</div>
				<form onSubmit={handleSubmit} className={styles.buttonsWrapper}>
					<div className={styles.quantity}>
						<button onClick={decreaseValue}>-</button>
						<input
							name="input"
							type="text"
							value={counter}
							readOnly
						/>
						<button onClick={increaseValue}>+</button>
					</div>

					<button type="submit" className={styles.submitBtn}>
						Order
					</button>
				</form>
			</div>
			<Link to="/" className={styles.link}>
				Back to homepage
			</Link>
		</div>
	);
};
