import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase'

import { CATEGORIES_ACTION_TYPES } from './categories.types'

export const fetchCategoriesStart = () => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START })

export const fetchCategoriesSuccess = (categoriesData) => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesData })

export const fetchCategoriesFailed = (error) => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, payload: error })

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())

    try {
        const categories = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(categories))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error.message))
    }
}