export const sumOfItemsArray = (array) => {
   let initialValue = 0;
   
   const countSum = array.reduce(function (a, b) {
      return a + b.quantity
   }, initialValue)
   
   return countSum
}