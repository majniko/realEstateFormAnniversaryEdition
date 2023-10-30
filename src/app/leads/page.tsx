import { getLeads } from '@/utils/server/getLeads'
import React from 'react'
import styles from './page.module.css'
import { Lead } from '@/components/lead/Lead'
import { localization } from '@/utils/localization/localization'
import { Button } from '@mui/material'
import Link from 'next/link'

export const revalidate = 10

export default async function Leads(): Promise<React.ReactElement> {
  const mappedLeads = await getLeads()

  console.log(mappedLeads)

  return (
    <div className={styles.leadsContainer}>
      <Button href="/chci-nabidku" LinkComponent={Link} variant="outlined" color="primary" className={styles.button}>
        {localization.cz.reForm.backToStart}
      </Button>
      <h1>{localization.cz.reForm.leadsList}</h1>
      <div className={styles.leadsGrid}>
        {mappedLeads.map((lead, index) => (
          <Lead key={index} {...lead} />
        ))}
      </div>
    </div>
  )
}
