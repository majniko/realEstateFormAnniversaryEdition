import styles from './page.module.css'
import Image from 'next/image'
import { localization } from '@/utils/localization/localization'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Failure() {
  return (
    <div className={styles.failureContainer}>
      <div className={styles.imageContainer}>
        <Image src={'/error.svg'} alt={'error'} width={250} height={250} />
      </div>
      <p className={styles.text}>{localization.cz.reForm.error}</p>
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
