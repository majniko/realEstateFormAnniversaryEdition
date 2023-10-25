'use client'
import React, { createContext } from 'react'

export type initialStoreStateProps = {
  realEstateForm: {
    estateType: string
    region: string
    district: string
    name: string
    email: string
    phone: string
    page: number
    isSubmitted: boolean
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
    name: '',
    email: '',
    phone: '',
    page: 0,
    isSubmitted: false,
  },
}

export const ContextStore = createContext<initialStoreProps | null>(null)

export const Store = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState<initialStoreStateProps>(initialStoreState)

  return <ContextStore.Provider value={{ state, setState }}>{children}</ContextStore.Provider>
}
