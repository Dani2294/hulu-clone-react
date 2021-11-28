import Thumbnail from './Thumbnail';
import { requests } from '../utils/requests';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';

function Results({ page, handlePagination }) {
	const { id } = useParams();
	const [results, setResults] = useState([]);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3${
				requests[id]?.url || requests['fetchTrending'].url
			}&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				setResults(data.results);
				setTotalPages(data.totalPages);
			});
		window.scrollTo(0, 0);
	}, [id, page]);

	return (
		<main className='px-2 my-10 max-w-screen-3xl mx-auto'>
			<div className='sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-5'>
				{results.map((result) => (
					<Thumbnail key={result.id} result={result} />
				))}
			</div>
			<Pagination
				totalPages={totalPages}
				page={page}
				handlePagination={handlePagination}
			/>
		</main>
	);
}

export default Results;
