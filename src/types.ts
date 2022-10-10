export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem[],
}

export type CategoryItem = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
}

export type CategoriesState = {
    readonly categoriesArray: Category[],
    readonly isLoading: boolean,
    readonly error: Error | null,
}

export type CategoriesMap = {
    [key: string]: CategoryItem[],
}