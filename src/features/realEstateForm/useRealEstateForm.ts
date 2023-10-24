import React, { useContext } from 'react'
import { ContextStore, initialStoreProps, initialStoreStateProps } from '@/store/ContextStore'

export const useRealEstateForm = () => {
  const { state, setState } = useContext(ContextStore) as initialStoreProps
  const {
    realEstateForm: { estateType, region, district, name, phone, email },
  } = state

  const handleInputChange = (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: {
        ...prevState.realEstateForm,
        [inputName]: e.target.value,
      },
    }))
  }

  const handleRegionChange = (region: string) => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: { ...prevState.realEstateForm, region: region },
    }))
  }

  return {
    estateType,
    region,
    district,
    name,
    phone,
    email,
    handleInputChange,
    handleRegionChange,
  }
}
