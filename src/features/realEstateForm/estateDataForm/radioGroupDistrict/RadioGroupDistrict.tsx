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
}

export const RadioGroupDistrict = (props: RadioGroupDistrictProps) => {
  const { region, district, handleInputChange, districtError } = props

  if (region === '') return <div className={styles.radioGroupDistrict} />

  return (
    <div className="radioGroupDistrict">
      <FormControl error={districtError} variant="standard">
        <FormLabel id="districtSelect">{localization.cz.reForm.district}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="districtSelect"
          name="districtSelect"
          value={district}
          onChange={handleInputChange('district')}
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
              />
            ))}
        </RadioGroup>
        {districtError ? (
          <FormHelperText>{localization.cz.reForm.districtError}</FormHelperText>
        ) : (
          <FormHelperText> </FormHelperText>
        )}
      </FormControl>
    </div>
  )
}
