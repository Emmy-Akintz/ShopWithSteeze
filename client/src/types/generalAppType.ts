export type generalAppContextType = {
    showMenu: boolean;
    showCart: boolean;
    generalAppDispatch: React.Dispatch<generalAppActionType>
}

export type generalAppActionType = {
    type: string;
    payload?: {
        showMenuPayload?: boolean;
        showCartPayload?: boolean;
    }
}