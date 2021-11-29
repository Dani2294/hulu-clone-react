import { InformationCircleIcon } from '@heroicons/react/outline';

function Thumbnail({ result, handleModal }) {
	const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';
	return (
		<div className='group cursor-pointer'>
			<div
				onClick={() => handleModal(result)}
				className='relative overflow-hidden transition duration-300 transform md:hover:scale-105'>
				<img
					src={`${imgBaseUrl}${result.backdrop_path || result.poster_path}`}
					alt={result.original_title}
					className='h-full w-full object-contain rounded-xl'
				/>
				<button className='hidden absolute bottom-2 right-2 group-hover:flex items-center py-1 px-2 bg-green1 rounded-xl border-2 border-white z-20'>
					See More <InformationCircleIcon className='h-5 ml-1' />
				</button>
				{/* <div className='absolute inset-0 p-3 bg-white text-gray-600 transition transform translate-y-full group-hover:translate-y-0 overflow-auto'>
					{result.overview}
				</div> */}
			</div>
			<div className='p-2'>
				<h3 className='mt-1 text-2xl text-white transition-all'>
					{result.title || result.original_title || result.original_name}
				</h3>
			</div>
		</div>
	);
}

export default Thumbnail;
