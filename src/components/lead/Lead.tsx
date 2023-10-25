import { leadProps } from '@/utils/clientApiCalls/postLead'
import React from 'react'
import styles from './lead.module.css'

export const Lead = (props: leadProps): React.ReactElement => {
  const { name, email, phone, region, district, estateType } = props

  return (
    <>
      <div className={styles.leadItem}>
        <p>{name}</p>
      </div>
      <div className={styles.leadItem}>
        <p>{email}</p>
      </div>
      <div className={styles.leadItem}>
        <p>{phone}</p>
      </div>
      <div className={styles.leadItem}>
        <p>{region}</p>
      </div>
      <div className={styles.leadItem}>
        <p>{district}</p>
      </div>
      <div className={styles.leadItem}>
        <p>{estateType}</p>
      </div>
    </>
  )
}
