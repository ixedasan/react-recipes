import { Search } from 'lucide-react'
import { RecipeCard } from '../components/RecipeCard'

export function HomePage() {
	return (
		<>
			<div className='flex-1 p-12'>
				<div className='max-w-screen-lg mx-auto'>
					<form>
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
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
						<RecipeCard />
					</div>
				</div>
			</div>
		</>
	)
}
