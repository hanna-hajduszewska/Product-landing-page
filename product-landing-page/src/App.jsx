import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Home, Details, Cart } from './components/index';

function App() {
	return (
		<div className={styles.container}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details" element={<Details />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
