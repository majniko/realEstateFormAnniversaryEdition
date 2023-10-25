import React from 'react'
import { Button, TextField } from '@mui/material'
import styles from './contactForm.module.css'

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
}

export const ContactForm = (props: ContactFormProps) => {
  const { email, phone, name, nameError, phoneError, emailError, handleInputChange, handleSubmit, handlePageChange } =
    props

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactFormTitle}>
        <h1>Kontaktní údaje</h1>
      </div>
      <div className={styles.textFieldContainer}>
        <TextField
          fullWidth
          required
          id="fullName"
          label="Jméno a Příjmení"
          value={name}
          onChange={handleInputChange('name')}
          error={nameError}
          helperText={nameError ? 'Prosím vyplňte jméno a příjmení.' : ' '}
          className={styles.textField}
        />
        <TextField
          required
          id="phoneNumber"
          label="Telefonní číslo"
          value={phone}
          onChange={handleInputChange('phone')}
          error={phoneError}
          helperText={phoneError ? 'Prosím vyplňte české telefonní číslo.' : ' '}
          className={styles.textField}
        />
        <TextField
          required
          id="email"
          label="E-mail"
          value={email}
          onChange={handleInputChange('email')}
          error={emailError}
          helperText={emailError ? 'Prosím vyplňte e-mail ve správném tvaru.' : ' '}
          className={styles.textField}
        />
      </div>
      <Button onClick={handlePageChange(0)} className={styles.previousButton} variant="contained" color="primary">
        Předchozí strana
      </Button>
      <Button onClick={handleSubmit} className={styles.sendButton} variant="contained" color="primary">
        Odeslat
      </Button>
    </div>
  )
}
