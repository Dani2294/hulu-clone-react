import { ThumbUpIcon, XIcon } from '@heroicons/react/outline';
import { useCallback, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function Modal({ movieData, setModal, modal }) {
	const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';
	const modalRef = useRef();
	const props = useSpring({
		from: { opacity: 0, marginTop: -800 },
		to: { opacity: 1, marginTop: 0 },
		config: { duration: 300 },
	});

	const closeModalBgClick = (e) => {
		if (modalRef.current === e.target) {
			setModal((prevState) => ({
				isOpen: !prevState.isOpen,
				data: movieData,
			}));
		}
	};

	const escapePress = useCallback(
		(e) => {
			if (e.key === 'Escape' && modal) {
				setModal((prevState) => ({
					isOpen: !prevState.isOpen,
					data: movieData,
				}));
			}
		},
		[setModal, modal]
	);

	useEffect(() => {
		document.addEventListener('keydown', escapePress);
		return () => document.removeEventListener('keydown', escapePress);
	}, [escapePress]);

	return (
		<div
			ref={modalRef}
			onClick={closeModalBgClick}
			className='fixed inset-0 h-full w-full bg-green1 bg-opacity-75 flex justify-center items-center'>
			<animated.div
				style={props}
				className='modal-wrapper w-11/12 lg:w-9/12 2xl:w-5/12 h-screen95 grid grid-rows-2 relative rounded-xl bg-green2 p-5 pb-8 overflow-hidden'>
				<button
					onClick={() =>
						setModal((prevState) => ({
							isOpen: !prevState.isOpen,
							data: movieData,
						}))
					}
					className='absolute z-10 top-8 right-8 flex items-center justify-center p-2 rounded-full bg-green2 cursor-pointer'>
					<XIcon className='h-5' />
				</button>
				<img
					src={`${imgBaseUrl}${
						movieData.backdrop_path || movieData.poster_path
					}`}
					alt={movieData.original_title}
					className='w-full h-full rounded-t-xl object-cover object-top shadow-lg'
				/>
				<div className='flex flex-col p-4 space-y-8 overflow-y-scroll hide-scrollbar'>
					<h3 className='mt-2 text-2xl lg:text-3xl text-white font-bold tracking-wide'>
						{movieData.title ||
							movieData.original_title ||
							movieData.original_name}{' '}
						<span className='text-base flex items-center mt-3'>
							<ThumbUpIcon className='h-5 mx-2' />{' '}
							{`${movieData.vote_average}/10`}
						</span>
					</h3>
					<p className='max-w-xl'>{movieData.overview}</p>
					<div className='flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-14'>
						<div className='flex flex-col justify-center space-y-2'>
							<h4 className='font-bold uppercase tracking-wide'>Type</h4>
							<p className='md:text-center'>
								{movieData.media_type ? `${movieData.media_type}` : 'Movie'}
							</p>
						</div>
						<div className='flex flex-col justify-center space-y-2'>
							<h4 className='font-bold uppercase tracking-wide'>Adult</h4>
							<p className='md:text-center'>{movieData.adult ? 'Yes' : 'No'}</p>
						</div>
						<div className='flex flex-col justify-center space-y-2'>
							<h4 className='font-bold uppercase tracking-wide'>
								Realase date
							</h4>
							<p className='md:text-center'>
								{movieData.release_date || movieData.first_air_date}
							</p>
						</div>
					</div>
				</div>
			</animated.div>
		</div>
	);
}

export default Modal;
