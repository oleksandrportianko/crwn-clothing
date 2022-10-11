import { AnyAction } from "redux"

export type CartItem = CategoryItem & {
    quantity: number,
}

export type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'],
    match(action: AnyAction): action is ReturnType<AC>
}

export function withMatch<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatch<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>

export function withMatch(actionCreator: Function) {
    const type = actionCreator().type
    return Object.assign(
        actionCreator,
        {
            type,
            match(action: AnyAction) {
                return action.type === type
            }
        }
    )
}

export type ActionWithPayload<T, P> = {
    type: T,
    payload: P,
}

export type Action<T> = {
    type: T,
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