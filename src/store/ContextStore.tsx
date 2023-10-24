import React, {createContext} from "react";

export type initialStoreStateProps = {
    realEstateForm: {
        estateType: 'house' | 'apartment' | 'land' | ''
        region: string
        district: string
        client: {
            name: string
            email: string
            phone: string
        }
    }
}

export type initialStoreProps = {
    state: initialStoreStateProps
    setState: React.Dispatch<React.SetStateAction<initialStoreStateProps>>
}

export const initialStoreState: initialStoreStateProps = {
    realEstateForm: {
        estateType: '',
        region: '',
        district: '',
        client: {
            name: '',
            email: '',
            phone: '',
        }
    }
}

export const ContextStore = createContext<initialStoreProps | null>(null)

export const Store = ({children}: { children: React.ReactNode }) => {
    const [state, setState] = React.useState<initialStoreStateProps>(initialStoreState)

    return <ContextStore.Provider value={{state, setState }}>{children}</ContextStore.Provider>
}