import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem';

function Header({ setPage }) {
	return (
		<header className='flex flex-col sm:flex-row justify-between items-center m-5 h-auto max-w-screen-3xl mx-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Link to='/fetchTrending'>
				<img
					onClick={() => setPage(1)}
					src='https://links.papareact.com/ua6'
					alt='hulu-logo'
					className='object-contain flex-shrink-0 w-48 h-24'
				/>
			</Link>
			{/* <Link href='/'>
				<a>
					<Image
						src='https://links.papareact.com/ua6'
						width={200}
						height={100}
						className='object-contain flex-shrink-0'
					/>
				</a>
			</Link> */}
		</header>
	);
}

export default Header;
