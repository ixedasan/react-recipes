import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Navbar } from './components/Navbar'
import { FavoritesPage } from "./pages/FavoritesPage"

export function App() {
	return (
		<>
			<div className='flex'>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
			</div>
		</>
	)
}
