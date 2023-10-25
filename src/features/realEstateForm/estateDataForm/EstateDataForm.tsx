import React from 'react'
import { RadioGroupEstateType } from '@/features/realEstateForm/estateDataForm/radioGroupEstateType/RadioGroupEstateType'
import { RegionMapSelect } from '@/features/realEstateForm/RegionMapSelect/RegionMapSelect'
import { RadioGroupDistrict } from '@/features/realEstateForm/estateDataForm/radioGroupDistrict/RadioGroupDistrict'
import { Button } from '@mui/material'
import { localization } from '@/utils/localization/localization'

export type EstateDataForm = {
  estateType: string
  region: string
  district: string
  handleInputChange: (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleMapChange: (region: string) => () => void
  handlePageChange: (pageNumber: number) => () => void
  estateTypeError: boolean
  districtError: boolean
}

export const EstateDataForm = (props: EstateDataForm) => {
  const {
    estateType,
    region,
    district,
    handleInputChange,
    handleMapChange,
    handlePageChange,
    districtError,
    estateTypeError,
  } = props

  return (
    <div className="estateDataForm">
      <RadioGroupEstateType
        estateType={estateType}
        handleInputChange={handleInputChange}
        estateTypeError={estateTypeError}
      />
      <RegionMapSelect county={region} handleChange={handleMapChange} />
      <RadioGroupDistrict
        district={district}
        region={region}
        handleInputChange={handleInputChange}
        districtError={districtError}
      />
      <Button variant="contained" color="primary" onClick={handlePageChange(1)}>
        {localization.cz.reForm.nextPage}
      </Button>
    </div>
  )
}
