import React from 'react'
import styles from './radioGroupDistrict.module.css'
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import { districtList } from '@/utils/districtList'
import { localization } from '@/utils/localization/localization'

export type RadioGroupDistrictProps = {
  region: string
  district: string
  handleInputChange: (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
  districtError: boolean
  isSubmitted: boolean
}

export const RadioGroupDistrict = (props: RadioGroupDistrictProps) => {
  const { region, district, handleInputChange, districtError, isSubmitted } = props

  if (region === '')
    return <div className={styles.radioGroupDistrict}>{districtError && localization.cz.reForm.districtError}</div>

  return (
    <div className={styles.radioGroupDistrict}>
      <FormControl error={districtError} variant="standard" className={styles.districtForm} disabled={isSubmitted}>
        <FormLabel id="districtSelect">{localization.cz.reForm.district}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="districtSelect"
          name="districtSelect"
          value={district}
          onChange={handleInputChange('district')}
          className={styles.districtGroup}
        >
          {districtList
            .filter(district => {
              return district.region === region
            })
            .map(option => (
              <FormControlLabel
                key={option.district}
                value={option.district}
                control={<Radio />}
                label={option.districtDisplayName}
                className={styles.districtLabel}
              />
            ))}
        </RadioGroup>
        <div className={styles.helperText}>
          {districtError ? (
            <FormHelperText>{localization.cz.reForm.districtError}</FormHelperText>
          ) : (
            <FormHelperText> </FormHelperText>
          )}
        </div>
      </FormControl>
    </div>
  )
}
