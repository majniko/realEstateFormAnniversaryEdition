import styles from './page.module.css'
import Image from 'next/image'
import { localization } from '@/utils/localization/localization'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Success() {
  return (
    <div className={styles.successContainer}>
      <div className={styles.imageContainer}>
        <Image src={'/success.svg'} alt={'success'} width={250} height={250} className={styles.image} />
      </div>
      <p className={styles.text}>{localization.cz.reForm.success}</p>
      <div className={styles.buttonsContainer}>
        <Button href="/chci-nabidku" LinkComponent={Link} variant="contained" color="primary" className={styles.button}>
          {localization.cz.reForm.retry}
        </Button>
        <Button href="/leads" LinkComponent={Link} variant="contained" color="primary" className={styles.button}>
          {localization.cz.reForm.leadsList}
        </Button>
      </div>
    </div>
  )
}
