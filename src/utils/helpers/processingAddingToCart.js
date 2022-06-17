export const processingAddingToCart = (cartItems, item) => {
   let newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
   const currentProduct = cartItems.find((cartItem) => cartItem.id === item.id);

   if (currentProduct) {
      newCartItems.push({
         ...item,
         quantity: currentProduct.quantity + 1,
      })
   } else {
      newCartItems.push({
         ...item,
         quantity: 1,
      })
   }

   return newCartItems;
}