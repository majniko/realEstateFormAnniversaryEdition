import React from 'react'
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import { estateTypes } from '@/utils/estateTypes'
import { localization } from '@/utils/localization/localization'

export type RadioGroupEstateTypeProps = {
  estateType: string
  handleInputChange: (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
  estateTypeError: boolean
}

export const RadioGroupEstateType = (props: RadioGroupEstateTypeProps) => {
  const { estateType, handleInputChange, estateTypeError } = props

  return (
    <div className="radioGroupEstateType">
      <FormControl error={estateTypeError} variant="standard">
        <FormLabel id="estateTypeSelect">{localization.cz.reForm.estateType}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="estateTypeSelect"
          name="estateTypeSelect"
          value={estateType}
          onChange={handleInputChange('estateType')}
        >
          {estateTypes.map(option => (
            <FormControlLabel key={option.id} value={option.name} control={<Radio />} label={option.displayName} />
          ))}
        </RadioGroup>
        {estateTypeError ? (
          <FormHelperText>{localization.cz.reForm.estateTypeError}</FormHelperText>
        ) : (
          <FormHelperText> </FormHelperText>
        )}
      </FormControl>
    </div>
  )
}
