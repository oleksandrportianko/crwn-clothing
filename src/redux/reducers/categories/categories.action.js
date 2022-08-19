import { CATEGORIES_ACTION_TYPES } from './categories.types'

export const setAllCategories = (data) => ({ type: CATEGORIES_ACTION_TYPES.SET_ALL_CATEGORIES, payload: data })