import { createSelector } from "reselect";

import { CategoriesMap, CategoriesState } from "../../../types";

const selectCategoriesReducer = (state): CategoriesState => state.categories

export const selectCategories = createSelector(
    [selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categoriesArray
)

export const selectCategoriesMap = createSelector(
    [selectCategories], (categories): CategoriesMap =>
    categories.reduce((acc, docShapshot) => {
        const { title, items } = docShapshot
        acc[title.toLowerCase()] = items
        return acc
    }, {} as CategoriesMap)
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
