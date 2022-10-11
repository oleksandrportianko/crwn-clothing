import { ActionWithPayload, Action } from './../../../utils/createAction/createAction';
import { createAction } from "../../../utils/createAction/createAction"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"

import { Category, withMatch } from '../../../types'

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, string>

export const fetchCategoriesStart = withMatch((): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START))

export const fetchCategoriesSuccess = withMatch((categoriesData: Category[]): FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesData))

export const fetchCategoriesFailed = withMatch((error: string): FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error))