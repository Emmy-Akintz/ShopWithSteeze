import { ReactNode, createContext, useReducer } from "react";
import { useGeneralAppContext } from "../functions/useGeneralAppContext";
import { generalAppReducer } from "../functions/generalAppReducer";
import { generalAppContextType } from "../types/generalAppType";

export const GeneralAppContext = createContext<generalAppContextType>({
    showCart: false,
    showMenu: false,
    showFilters: false,
    showSorting: false,
    generalAppDispatch: ()=>{return}
})

export function GeneralAppProvider({children}: {children: ReactNode}){

    const value = useGeneralAppContext()
    const [generalAppState, generalAppDispatch] = useReducer(generalAppReducer, value)

    console.log(generalAppState)
    
    return (
        <GeneralAppContext.Provider value={{...generalAppState, generalAppDispatch}}>
            {children}
        </GeneralAppContext.Provider>
    )
}