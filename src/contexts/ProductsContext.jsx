import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
   products: null,
   setProducts: () => null,
})

export const ProductsProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const getCategoriesMap = async () => {
         const result = await getCategoriesAndDocuments()
         console.log(result)
      }
      
      getCategoriesMap()
   }, [])

   const value = { products, setProducts }

   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}