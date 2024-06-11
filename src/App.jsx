import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { RecipeDetails } from './pages/RecipeDetails'

export function App() {
	return (
		<>
			<div className='flex'>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
					<Route path='/recipe/:id' element={<RecipeDetails />} />
				</Routes>
			</div>
		</>
	)
}
