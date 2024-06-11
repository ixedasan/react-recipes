import { RecipeCard } from '../components/RecipeCard'

export function FavoritesPage() {
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	return (
		<>
			<div className='flex flex-1 p-10 min-h-screen'>
				<div className='max-w-screen-lg mx-auto'>
					<p className='font-bold text-3xl md:text-5xl my-4'>
						Favorites Recipes
					</p>

					{favorites.length === 0 && (
						<div className='h-[80vh] flex file-col justify-center items-center gap-4'>
							<img src='/src/assets/images/cat.png' className=' h-4/5' />
						</div>
					)}

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{favorites.map((recipe, index) => (
							<RecipeCard key={index} recipe={recipe} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
