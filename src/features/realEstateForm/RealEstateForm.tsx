'use client'
import { useRealEstateForm } from '@/features/realEstateForm/useRealEstateForm'
import React from 'react'
import styles from './realEstateForm.module.css'
import { EstateDataForm } from '@/features/realEstateForm/estateDataForm/EstateDataForm'
import { ContactForm } from '@/features/realEstateForm/contactForm/ContactForm'

export const RealEstateForm = () => {
  const { lead, error, page, handleMapChange, handleInputChange, handleSubmit, handlePageChange } = useRealEstateForm()
  const { estateType, region, district, name, phone, email } = lead
  const { estateTypeError, districtError, nameError, phoneError, emailError } = error

  return (
    <div className={styles.realEstateForm}>
      {page === 0 && (
        <div className={styles.estateDataForm}>
          <EstateDataForm
            estateType={estateType}
            region={region}
            district={district}
            handleInputChange={handleInputChange}
            handleMapChange={handleMapChange}
            handlePageChange={handlePageChange}
            estateTypeError={estateTypeError}
            districtError={districtError}
          />
        </div>
      )}
      {page === 1 && (
        <div className={styles.contactForm}>
          <ContactForm
            name={name}
            email={email}
            phone={phone}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            nameError={nameError}
            emailError={emailError}
            phoneError={phoneError}
          />
        </div>
      )}
    </div>
  )
}
