import { Heart, HeartPulse } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../hooks/useFavorite'

export function RecipeCard({ recipe }) {
	const { isFavorite, toggleFavorite } = useFavorite(recipe.uri)

	return (
		<div className='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl'>
			<div className='relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40'>
				<Link to={`/recipe/${recipe.uri.split('#recipe_')[1]}`}>
					<img
						className='w-full h-[13rem] object-cover'
						src={recipe.image}
						alt={recipe.label}
					/>
					<div className='absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
				</Link>
				<div
					className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
					onClick={e => {
						e.stopPropagation()
						e.preventDefault()
						toggleFavorite(recipe)
					}}
				>
					{!isFavorite ? (
						<Heart
							size={24}
							className='text-gray-700 md:hover:fill-red-500 md:hover:text-red-500'
						/>
					) : (
						<Heart size={24} className='fill-red-500 text-red-500' />
					)}
				</div>
			</div>
			<div className='p-6'>
				<div className='flex items-center justify-between mb-3'>
					<p className='text-lg font-bold'>{recipe.label}</p>
				</div>
				<p className='my-2 capitalize'>{recipe.cuisineType} Kitchen</p>
				<div className='flex gap-2 mt-auto'>
					{recipe.healthLabels.slice(0, 2).map((label, index) => (
						<div
							key={index}
							className='flex gap-2 bg-amber-200 items-center p-1 rounded-md'
						>
							<HeartPulse size={16} className='text-amber-500' />
							<span className='text-sm tracking-tighter'>{label}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
