import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
   products: null,
   setProducts: () => null,
})

export const ProductsProvider = ({ children }) => {
   const [products, setProducts] = useState([]);
   const value = { products, setProducts }

   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}