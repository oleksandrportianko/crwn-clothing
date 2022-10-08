export type Category = {
    title: string,
    items: CategoryItem[],
}

export type CategoryItem = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
}