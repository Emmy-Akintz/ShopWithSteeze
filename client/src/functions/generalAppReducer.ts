import { generalAppActionType, generalAppContextType } from "../types/generalAppType";

export function generalAppReducer(state: generalAppContextType, action: generalAppActionType){
    switch(action.type){
        case 'openMenu':
            return {
                ...state,
                showMenu: true
            }
        case 'openCart': 
            return {
                ...state,
                showCart: true
            }
        case 'closeCart':
            return {
                ...state,
                showCart: false
            }
        case 'closeMenu':
            return {
                ...state,
                showMenu: false
            }
        default:
            return state
    }
}