import { all, call, put, takeLatest } from 'redux-saga/effects'

import { Category } from '../../../types'
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase'

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action'

import { CATEGORIES_ACTION_TYPES } from './categories.types'

export function* fetchCategoriesAsync() {
    try {
        const categories: Category[] = yield call(getCategoriesAndDocuments, 'categories')
        yield put(fetchCategoriesSuccess(categories))
    } catch (error: any) {
        yield put(fetchCategoriesFailed(error?.message))
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
} 