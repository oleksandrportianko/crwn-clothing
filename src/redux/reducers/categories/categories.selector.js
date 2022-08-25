import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categoriesArray
)

export const selectCategoriesMap = createSelector(
    [selectCategories], (categories) =>
    categories.reduce((acc, docShapshot) => {
        const { title, items } = docShapshot
        acc[title.toLowerCase()] = items
        return acc
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
