import { AnyAction } from "redux"

export type CategoryPreviewProps = {
    title: string,
    products: ProductItem[],
}

export type ProductItem = {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
}

export type CartItemProps = {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    quantity: number,
}

export type Credentials = {
    email: string,
    password: string,
}

export type UserData = {
    createdAt: Date,
    displayName: string,
    email: string,
}

export type ObjectToAdd = {
    title: string,
}

export type AdditionalInformation = {
    displayName?: string, 
}

export type CartItem = CategoryItem & {
    quantity: number,
}

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem[],
    route: string,
}

export type CategoryWithoutItems = {
    title: string,
    imageUrl: string,
    route: string,
}

export type CategoryItem = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
}

export type UserState = {
    readonly currentUser: UserData | null,
    readonly isLoading: boolean,
    error: Error | null,
}

export type CategoriesState = {
    readonly categoriesArray: Category[],
    readonly isLoading: boolean,
    readonly error: Error | null,
}

export type CartState = {
    readonly isOpenCart: boolean,
    readonly cartItems: CartItem[],
}

export type CategoriesMap = {
    [key: string]: CategoryItem[],
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