import React from 'react'
import { Button, TextField } from '@mui/material'

export type ContactFormProps = {
  name: string
  email: string
  phone: string
  handleInputChange: (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
  nameError: boolean
  emailError: boolean
  phoneError: boolean
  handleSubmit: () => void
}

export const ContactForm = (props: ContactFormProps) => {
  const { email, phone, name, nameError, phoneError, emailError, handleInputChange, handleSubmit } = props

  return (
    <div className="contactForm">
      <TextField
        fullWidth
        required
        id="fullName"
        label="Jméno a Příjmení"
        value={name}
        onChange={handleInputChange('name')}
        error={nameError}
        helperText={nameError ? 'Prosím vyplňte jméno a příjmení.' : ' '}
      />
      <TextField
        required
        id="phoneNumber"
        label="Telefonní číslo"
        value={phone}
        onChange={handleInputChange('phone')}
        error={phoneError}
        helperText={phoneError ? 'Prosím vyplňte české telefonní číslo.' : ' '}
      />
      <TextField
        required
        id="email"
        label="E-mail"
        value={email}
        onChange={handleInputChange('email')}
        error={emailError}
        helperText={emailError ? 'Prosím vyplňte e-mail ve správném tvaru.' : ' '}
      />
      <div className="formButton">
        <Button onClick={handleSubmit}>Odeslat</Button>
      </div>
    </div>
  )
}
