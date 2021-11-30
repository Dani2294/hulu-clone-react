import Thumbnail from './Thumbnail';
import { requests } from '../utils/requests';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import Modal from './Modal';

function Results({ page, handlePagination }) {
	const { id } = useParams();
	const [results, setResults] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [modal, setModal] = useState({ isOpen: false, data: {} });

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3${
				requests[id]?.url || requests['fetchTrending'].url
			}&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setResults(data.results);
				setTotalPages(data.totalPages);
			});
		window.scrollTo(0, 0);
	}, [id, page]);

	const handleModal = (result) => {
		setModal((prevState) => ({ isOpen: !prevState.isOpen, data: result }));
	};

	return (
		<main
			className={`px-5 my-10 max-w-screen-3xl mx-auto ${
				modal.isOpen ? 'stop-scrolling' : ''
			}`}>
			<div className='sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-5 space-y-5 md:space-y-0'>
				{results.map((result) => {
					if (!result.backdrop_path || !result.poster_path) return null;
					return (
						<Thumbnail
							key={result.id}
							result={result}
							handleModal={handleModal}
						/>
					);
				})}
			</div>
			{modal.isOpen && (
				<Modal movieData={modal.data} setModal={setModal} modal={modal} />
			)}
			<Pagination
				totalPages={totalPages}
				page={page}
				handlePagination={handlePagination}
			/>
		</main>
	);
}

export default Results;
