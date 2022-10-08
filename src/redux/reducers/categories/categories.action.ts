import { createAction } from "../../../utils/createAction/createAction"
import { Category } from '../../../types'
import { CATEGORIES_ACTION_TYPES } from "./categories.types"

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesData: Category[]) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesData)

export const fetchCategoriesFailed = (error: string) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error)