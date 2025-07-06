import { createContext,useState } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext()

const AppContentProvider = (props)=>{

    const [popUp, setPopUP] = useState(false)  

   const currencySymbol = 'Rs'

    const [token, setToken]= useState(true)
    const value = {
         doctors,
         currencySymbol,
         popUp,
         setPopUP,
         token,
         setToken
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContentProvider