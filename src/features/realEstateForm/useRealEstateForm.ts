import React, { useContext } from 'react'
import { ContextStore, initialStoreProps, initialStoreStateProps } from '@/store/ContextStore'
import { postLead } from '@/utils/clientApiCalls/postLead'

export const useRealEstateForm = () => {
  const { state, setState } = useContext(ContextStore) as initialStoreProps
  const {
    realEstateForm: { estateType, region, district, name, phone, email, page },
  } = state
  const error = {
    estateTypeError: false,
    districtError: false,
    nameError: false,
    phoneError: false,
    emailError: false,
  }

  const handleInputChange = (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: {
        ...prevState.realEstateForm,
        [inputName]: e.target.value,
      },
    }))
  }

  const handleMapChange = (region: string) => () => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: { ...prevState.realEstateForm, region: region },
    }))
  }

  const handlePageChange = (pageNumber: number) => () => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: { ...prevState.realEstateForm, page: pageNumber },
    }))
  }

  const handleSubmit = async () => {
    const response = await postLead({ estateType, region, district, name, phone, email })
    console.log(response)
  }

  return {
    lead: {
      estateType,
      region,
      district,
      name,
      phone,
      email,
    },
    error,
    page,
    handleInputChange,
    handleMapChange,
    handlePageChange,
    handleSubmit,
  }
}
