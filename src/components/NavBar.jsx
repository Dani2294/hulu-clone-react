import { requests } from '../utils/requests';
import { Link } from 'react-router-dom';

function NavBar({ setPage }) {
	return (
		<nav className='relative 2xl:flex justify-center'>
			<div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll hide-scrollbar'>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<Link
						onClick={() => setPage(1)}
						to={`/${key}`}
						key={key}
						className='cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-green-800 last:pr-24 3xl:last:pr-0'>
						{title}
					</Link>
				))}
			</div>
			<div className='3xl:hidden absolute top-0 right-0 bg-gradient-to-l from-green1 h-10 w-2/12' />
			<div className='3xl:hidden absolute top-0 left-0 bg-gradient-to-r from-green1 h-10 w-1/12' />
		</nav>
	);
}

export default NavBar;
