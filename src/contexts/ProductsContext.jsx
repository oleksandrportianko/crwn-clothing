import { createContext, useState, useEffect } from "react";
import { addToCollectionAndDocument } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
   products: null,
   setProducts: () => null,
})

export const ProductsProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   const value = { products, setProducts }

   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}