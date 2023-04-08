import { createContext, useState } from "react";
export const CartContext = createContext();
function Context({ children }) {
    const [cartQuantity, setCartQuantity] = useState(0);
  
    return (
      <CartContext.Provider value={{ cartQuantity, setCartQuantity }}>
        {children}
      </CartContext.Provider>
    );
  }
  export default Context;