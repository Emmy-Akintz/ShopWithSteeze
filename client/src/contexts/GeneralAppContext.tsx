import { ReactNode, createContext, useReducer, useEffect } from "react";
import { useGeneralAppContext } from "../functions/useGeneralAppContext";
import { generalAppReducer } from "../functions/generalAppReducer";
import { generalAppContextType } from "../types/generalAppType";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const GeneralAppContext = createContext<generalAppContextType>({
    showCart: false,
    showMenu: false,
    showFilters: false,
    showSorting: false,
    generalAppDispatch: () => { return },
    showLogin: false,
    showSignup: false,
    currentUser: null
})

export function GeneralAppProvider({children}: {children: ReactNode}){

    const value = useGeneralAppContext()
    const [generalAppState, generalAppDispatch] = useReducer(generalAppReducer, value)

    console.log(generalAppState)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            generalAppDispatch({
                type: 'setCurrentUser',
                payload: {
                    currentUserPayload: user
                }
            })
            if (user) {
                localStorage.setItem('user', JSON.stringify(user))
            }
        })
        return unsubscribe
    }, [])
    
    return (
        <GeneralAppContext.Provider value={{...generalAppState, generalAppDispatch}}>
            {children}
        </GeneralAppContext.Provider>
    )
}