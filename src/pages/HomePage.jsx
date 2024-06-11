import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { RecipeCard } from '../components/RecipeCard'
import { APP_ID, APP_KEY } from '../config/api'

export function HomePage() {
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(true)

	const fetchRecipes = async query => {
		setLoading(true)
		setRecipes([])

		try {
			const response = await fetch(
				`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
			)
			const data = await response.json()
			setRecipes(data.hits)
		} catch (error) {
			console.error(error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchRecipes('salad')
	}, [])

	const searchRecipe = e => {
		e.preventDefault()
		fetchRecipes(e.target[0].value)
	}

	return (
		<>
			<div className='flex-1 p-12'>
				<div className='max-w-screen-lg mx-auto'>
					<form onSubmit={searchRecipe}>
						<label className='input input-bordered flex items-center gap-2'>
							<Search size={24} />
							<input type='text' className='grow' placeholder='Search' />
						</label>
					</form>
					<h1 className='font-bold text-3xl md:text-5xl mt-5'>Recomendation</h1>
					<p className='text-gray-300 font-semibold ml-1 my-2 text-sm tracking-tight'>
						Here are some of the best recipes for you
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{!loading &&
							recipes.map(({ recipe }, index) => (
								<RecipeCard key={index} recipe={recipe} />
							))}
						{loading &&
							[...Array(9)].map((_, index) => (
								<div key={index} className='flex flex-col gap-4 w-full'>
									<div className='skeleton h-48'></div>
									<div className='flex justify-between'>
										<div className='skeleton h-4 w-20'></div>
										<div className='skeleton h-4 w-20'></div>
									</div>
									<div className='skeleton h-4 w-28'></div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	)
}
