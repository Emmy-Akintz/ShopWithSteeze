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
        case 'setShowFilters':
            return {
                ...state,
                showFilters: action.payload?.showFiltersPayload ?? false
            }
        case 'setShowSorting':
            return {
                ...state,
                showSorting: action.payload?.showSortingPayload ?? false
            }
        default:
            return state
    }
}