// src/hooks/useFavorite.js
import { useEffect, useState } from 'react'

export function useFavorite(recipeUri) {
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		setIsFavorite(favorites.some(favorite => favorite.uri === recipeUri))
	}, [recipeUri])

	const toggleFavorite = recipe => {
		let favorites = JSON.parse(localStorage.getItem('favorites')) || []
		let isFavorite = favorites.some(favorite => favorite.uri === recipeUri)

		if (isFavorite) {
			favorites = favorites.filter(favorite => favorite.uri !== recipeUri)
			setIsFavorite(false)
		} else {
			favorites.push(recipe)
			setIsFavorite(true)
		}

		localStorage.setItem('favorites', JSON.stringify(favorites))
	}

	return { isFavorite, toggleFavorite }
}
