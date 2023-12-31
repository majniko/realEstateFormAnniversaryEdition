import React, { useContext, useEffect } from 'react'
import { ContextStore, initialStoreProps, initialStoreState } from '@/store/ContextStore'
import { postLead } from '@/utils/clientApiCalls/postLead'
import { validateNotEmpty } from '@/utils/validation/validateNotEmpty'
import { validatePhone } from '@/utils/validation/validatePhone'
import { validateEmail } from '@/utils/validation/validateEmail'
import { useRouter } from 'next/navigation'

type errorProps = {
  estateTypeError: boolean
  districtError: boolean
  nameError: boolean
  phoneError: boolean
  emailError: boolean
}

export const useRealEstateForm = () => {
  const router = useRouter()
  const { state, setState } = useContext(ContextStore) as initialStoreProps
  const {
    realEstateForm: { estateType, region, district, name, phone, email, page, isSubmitted },
  } = state
  const [error, setError] = React.useState<errorProps>({
    estateTypeError: false,
    districtError: false,
    nameError: false,
    phoneError: false,
    emailError: false,
  })

  useEffect(() => {
    return () => {
      setState(initialStoreState)
    }
  }, [setState])

  const handleInputChange = (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: {
        ...prevState.realEstateForm,
        [inputName]: e.target.value,
      },
    }))
    setError(prevState => ({ ...prevState, [`${inputName}Error`]: false }))
  }

  const handleMapChange = (region: string) => () => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: { ...prevState.realEstateForm, region: region, district: '' },
    }))
    setError(prevState => ({ ...prevState, districtError: false }))
  }

  const handlePageChange = (pageNumber: number) => () => {
    setState(prevState => ({
      ...prevState,
      realEstateForm: { ...prevState.realEstateForm, page: pageNumber },
    }))
  }

  const validateChangeToSecondPage = () => {
    let isValid = true

    if (!validateNotEmpty(estateType)) {
      setError(prevState => ({ ...prevState, estateTypeError: true }))
      isValid = false
    }

    if (!validateNotEmpty(district)) {
      setError(prevState => ({ ...prevState, districtError: true }))
      isValid = false
    }

    if (!validateNotEmpty(region)) {
      setError(prevState => ({ ...prevState, districtError: true }))
      isValid = false
    }

    if (isValid) {
      handlePageChange(1)()
    }
  }

  const handleSubmit = async () => {
    let isValid = true

    if (!validateNotEmpty(name)) {
      setError(prevState => ({ ...prevState, nameError: true }))
      isValid = false
    }

    if (!validatePhone(phone)) {
      setError(prevState => ({ ...prevState, phoneError: true }))
      isValid = false
    }

    if (!validateEmail(email)) {
      setError(prevState => ({ ...prevState, emailError: true }))
      isValid = false
    }

    if (!isValid) {
      return
    }

    setState(prevState => ({
      ...prevState,
      realEstateForm: { ...prevState.realEstateForm, isSubmitted: true },
    }))

    const response = await postLead({ estateType, region, district, name, phone, email })

    if (response.message === 'success') {
      router.push('/success')
    }

    if (
      response.message === 'missing_data' ||
      response.message === 'invalid_data' ||
      response.message === 'prisma_error' ||
      response.message === 'network_error'
    ) {
      router.push('/failure')
    }
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
    isSubmitted,
    handleInputChange,
    handleMapChange,
    handlePageChange,
    validateChangeToSecondPage,
    handleSubmit,
  }
}
