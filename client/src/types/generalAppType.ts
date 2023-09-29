export type generalAppContextType = {
    showMenu: boolean;
    showCart: boolean;
    showFilters: boolean;
    showSorting: boolean;
    generalAppDispatch: React.Dispatch<generalAppActionType>
}

export type generalAppActionType = {
    type: string;
    payload?: {
        showMenuPayload?: boolean;
        showCartPayload?: boolean;
        showFiltersPayload?: boolean;
        showSortingPayload?: boolean
    }
}

export type itemType = {
    name: string;
    price: number;
    category: string;
    color?: string;
    description?: string;
    size: string;
    image: string
    id:string;
}