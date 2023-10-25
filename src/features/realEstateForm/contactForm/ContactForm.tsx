import React from 'react'
import { Button, TextField } from '@mui/material'
import styles from './contactForm.module.css'
import { localization } from '@/utils/localization/localization'

export type ContactFormProps = {
  name: string
  email: string
  phone: string
  handleInputChange: (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
  nameError: boolean
  emailError: boolean
  phoneError: boolean
  handleSubmit: () => void
  handlePageChange: (pageNumber: number) => () => void
  isSubmitted: boolean
}

export const ContactForm = (props: ContactFormProps) => {
  const {
    email,
    phone,
    name,
    nameError,
    phoneError,
    emailError,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    handlePageChange,
  } = props

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactFormTitle}>
        <h1>{localization.cz.reForm.contactDetails}</h1>
      </div>
      <div className={styles.textFieldContainer}>
        <TextField
          fullWidth
          required
          id="fullName"
          label={localization.cz.reForm.nameSurname}
          value={name}
          onChange={handleInputChange('name')}
          error={nameError}
          helperText={nameError ? localization.cz.reForm.nameError : ' '}
          className={styles.textField}
          disabled={isSubmitted}
        />
        <TextField
          required
          id="phoneNumber"
          label={localization.cz.reForm.phone}
          value={phone}
          onChange={handleInputChange('phone')}
          error={phoneError}
          helperText={phoneError ? localization.cz.reForm.phoneError : ' '}
          className={styles.textField}
          disabled={isSubmitted}
        />
        <TextField
          required
          id="email"
          label={localization.cz.reForm.email}
          value={email}
          onChange={handleInputChange('email')}
          error={emailError}
          helperText={emailError ? localization.cz.reForm.email : ' '}
          className={styles.textField}
          disabled={isSubmitted}
        />
      </div>
      <Button
        onClick={handlePageChange(0)}
        className={styles.previousButton}
        variant="contained"
        color="primary"
        disabled={isSubmitted}
      >
        {localization.cz.reForm.previousPage}
      </Button>
      <Button
        onClick={handleSubmit}
        className={styles.sendButton}
        variant="contained"
        color="primary"
        disabled={isSubmitted}
      >
        {localization.cz.reForm.submit}
      </Button>
    </div>
  )
}
