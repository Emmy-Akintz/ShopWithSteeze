import { User } from "firebase/auth";

export type generalAppContextType = {
    showMenu: boolean;
    showCart: boolean;
    showFilters: boolean;
    showSorting: boolean;
    generalAppDispatch: React.Dispatch<generalAppActionType>;
    showSignup: boolean;
    showLogin: boolean;
    currentUser: User | null
}

export type generalAppActionType = {
    type: string;
    payload?: {
        showMenuPayload?: boolean;
        showCartPayload?: boolean;
        showFiltersPayload?: boolean;
        showSortingPayload?: boolean;
        showLoginPayload?: boolean;
        showSignupPayload?: boolean;
        currentUserPayload?: User | null
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