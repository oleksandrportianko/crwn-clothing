import { CATEGORIES_ACTION_TYPES } from './categories.types'

export const fetchCategoriesStart = () => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START })

export const fetchCategoriesSuccess = (categoriesData) => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesData })

export const fetchCategoriesFailed = (error) => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, payload: error })