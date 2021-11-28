import { ThumbUpIcon } from '@heroicons/react/outline';

function Thumbnail({ result }) {
	const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';
	return (
		<div className='group cursor-pointer transition duration-200 transform sm:hover:scale-105'>
			<div className='relative overflow-hidden'>
				{/* <Image
					layout='responsive'
					src={`${imgBaseUrl}${result.backdrop_path || result.poster_path}`}
					height={1080}
					width={1920}
				/> */}
				<img
					src={`${imgBaseUrl}${result.backdrop_path || result.poster_path}`}
					alt={result.original_title}
					className='h-full w-full'
				/>
				<div className='absolute inset-0 p-3 bg-white text-gray-600 transition transform translate-y-full group-hover:translate-y-0 overflow-auto'>
					{result.overview}
				</div>
			</div>
			<div className='p-2'>
				{/* <p className='truncate max-w-md'>{result.overview}</p> */}
				<h3 className='mt-2 text-2xl text-white transition-all group-hover:font-bold'>
					{result.title || result.original_title || result.original_name}
				</h3>
				<p className='flex items-center opacity-0 group-hover:opacity-100'>
					{result.media_type && `${result.media_type} •`}{' '}
					{result.release_date || result.first_air_date} •{' '}
					<ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
				</p>
			</div>
		</div>
	);
}

export default Thumbnail;
