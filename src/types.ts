import { AnyAction } from "redux"

export type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'],
    match(action: AnyAction): action is ReturnType<AC>
}

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