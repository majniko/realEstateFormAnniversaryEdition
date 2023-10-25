'use client'
import { useRealEstateForm } from '@/features/realEstateForm/useRealEstateForm'
import React from 'react'
import styles from './realEstateForm.module.css'
import { EstateDataForm } from '@/features/realEstateForm/estateDataForm/EstateDataForm'
import { ContactForm } from '@/features/realEstateForm/contactForm/ContactForm'

export const RealEstateForm = () => {
  const {
    lead,
    error,
    page,
    isSubmitted,
    handleMapChange,
    handleInputChange,
    handleSubmit,
    handlePageChange,
    validateChangeToSecondPage,
  } = useRealEstateForm()
  const { estateType, region, district, name, phone, email } = lead
  const { estateTypeError, districtError, nameError, phoneError, emailError } = error

  return (
    <div className={styles.realEstateForm}>
      {page === 0 && (
        <EstateDataForm
          estateType={estateType}
          region={region}
          district={district}
          handleInputChange={handleInputChange}
          handleMapChange={handleMapChange}
          validateChangeToSecondPage={validateChangeToSecondPage}
          estateTypeError={estateTypeError}
          districtError={districtError}
          isSubmitted={isSubmitted}
        />
      )}
      {page === 1 && (
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          handleInputChange={handleInputChange}
          handlePageChange={handlePageChange}
          handleSubmit={handleSubmit}
          nameError={nameError}
          emailError={emailError}
          phoneError={phoneError}
          isSubmitted={isSubmitted}
        />
      )}
    </div>
  )
}
