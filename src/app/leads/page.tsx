import { getLeads } from '@/utils/server/getLeads'
import React from 'react'
import styles from './page.module.css'
import { Lead } from '@/components/lead/Lead'
import { localization } from '@/utils/localization/localization'

export default async function Leads(): Promise<React.ReactElement> {
  const mappedLeads = await getLeads()

  return (
    <div className={styles.leadsContainer}>
      <h1>{localization.cz.reForm.leadsList}</h1>
      <div className={styles.leadsGrid}>
        {mappedLeads.map((lead, index) => (
          <Lead key={index} {...lead} />
        ))}
      </div>
    </div>
  )
}
