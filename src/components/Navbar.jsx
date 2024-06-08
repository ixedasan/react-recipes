import { CookingPot, Heart, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
	return (
		<>
			<div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
				<div className='flex flex-col gap-22 sticky'>
					<div className='w-full flex justify-center items-center p-4'>
						<CookingPot size={128} />
						<p className='hidden md:block font text-lg uppercase'>
							Best Recipes Platform
						</p>
					</div>
					<ul className='flex flex-col items-center md:items-start gap-8'>
						<Link to={'/'} className='flex gap-1'>
							<Home size={24} />
							<span className='hidden md:block'>Home</span>
						</Link>
						<Link to={'/favorites'} className='flex gap-1'>
							<Heart size={24} />
							<span className='hidden md:block'>Favorites</span>
						</Link>
					</ul>
				</div>
			</div>
			<div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 z-10 p-2 sm:hidden bg-gray-100'>
				<Link to={'/'}>
					<Home size={24} />
				</Link>
				<Link to={'/favorites'}>
					<Heart size={24} />
				</Link>
			</div>
		</>
	)
}
