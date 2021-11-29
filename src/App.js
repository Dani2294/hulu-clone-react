import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Results from './components/Results';

function App() {
	const [page, setPage] = useState(1);

	const handlePagination = (type, totalPages) => {
		if (type === 'prev') {
			if (page === 1) return;
			setPage(page - 1);
			//console.log(page);
		} else if (type === 'next') {
			if (page === totalPages) return;
			setPage(page + 1);
			//console.log(page);
		}
	};

	return (
		<Router>
			<div>
				<Header setPage={setPage} />
				<NavBar setPage={setPage} />
				<Route path='/' exact>
					<Results page={page} handlePagination={handlePagination} />
				</Route>
				<Route path='/:id'>
					<Results page={page} handlePagination={handlePagination} />
				</Route>
			</div>
		</Router>
	);
}

export default App;
