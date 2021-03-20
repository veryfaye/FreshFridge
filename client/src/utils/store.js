import React from 'react'

export const StoreContext = React.createContext(null)

// export default ({ children }) => {
 
//     const [grocItem, setGrocItem] = React.useState([]);
//     const [growingFoodList, setGrowingFoodList] = React.useState([]);
 

//   const store = {
//     grocery: [grocItem, setGrocItem],
//     list: [growingFoodList, setGrowingFoodList]
//   }

//   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
// }