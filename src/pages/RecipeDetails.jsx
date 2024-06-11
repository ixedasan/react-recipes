import { Heart, HeartPulse } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APP_ID, APP_KEY } from '../config/api'
import { useFavorite } from '../hooks/useFavorite'

export function RecipeDetails() {
	const { id } = useParams()
	const [recipe, setRecipe] = useState(null)
	const [loading, setLoading] = useState(true)
	const { isFavorite, toggleFavorite } = useFavorite(
		`http://www.edamam.com/ontologies/edamam.owl#recipe_${id}`
	)

	useEffect(() => {
		const fetchRecipe = async () => {
			setLoading(true)
			try {
				const response = await fetch(
					`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
				)
				const data = await response.json()
				setRecipe(data.recipe)
			} catch (error) {
				console.error(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchRecipe()
	}, [id])

	if (loading) {
		return (
			<div className='flex w-full items-center justify-center'>
				<span className='loading loading-spinner loading-lg'></span>
			</div>
		)
	}

	return (
		<>
			<div className='px-6 py-12 text-center lg:mt-0 md:px-12 lg:text-left'>
				<div className='w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32'>
					<div className='grid items-center lg:grid-cols-2'>
						<div className='mb-12 md:mt-12 lg:mt-0 lg:mb-0 z-10'>
							<div className='block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[20px]'>
								<div
									className='absolute top-6 right-8 bg-white rounded-full p-1 cursor-pointer'
									onClick={() => toggleFavorite(recipe)}
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
								<h1 className='mt-2 mb-10 text-3xl font-bold tracking-tight md:text-5xl xl:text-6xl'>
									{recipe.label} <br />
								</h1>
								<p className='my-2 capitalize md:text-lg'>
									{recipe.cuisineType} Kitchen
								</p>
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
						<div className='md:mb-12 lg:mb-0 lg:ml-[-5rem]'>
							<img
								className='w-[55vw] h-[30vh] lg:w-[35vw] lg:h-[55vh] shadow-xl rounded-lg object-cover'
								src={recipe.image}
								alt='Recipe image'
							/>
						</div>
					</div>
					<div className='container my-24 mx-auto md:px-6 text-left'>
						<div className='mb-32'>
							<h3 className='text-3xl font-semibold mb-2'>Ingredients</h3>
							<div className='mb-12 flex flex-wrap'>
								<ul>
									{recipe.ingredientLines.map((ingredient, index) => (
										<li key={index}>{ingredient}</li>
									))}
								</ul>
							</div>
							<h3 className='text-3xl font-semibold mb-2'>Instructions</h3>
							<p>
								For detailed instructions, please visit{' '}
								<a
									href={recipe.url}
									target='_blank'
									rel='noopener noreferrer'
									className='link'
								>
									this link
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
