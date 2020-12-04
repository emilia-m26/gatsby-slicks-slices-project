import React, { useState } from 'react';

//create order context
const OrderContext = React.createContext();

//create provider - comp that lives at higher level
export function OrderProvider({ children }) {
    //stick state in here and access from hook
    const [order, setOrder] = useState([]);
    return (
        //allows info to surface to be used in hook
        <OrderContext.Provider value={[order, setOrder]}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext;
