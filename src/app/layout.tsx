import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Store } from '@/store/ContextStore'
import styles from './layout.module.css'
import Image from 'next/image'
import { StyledEngineProvider } from '@mui/material'
import { localization } from '@/utils/localization/localization'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: localization.cz.reForm.title,
  description: localization.cz.reForm.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <Store>
            <div className={styles.appBar}>
              <Image src={'/reasLogo.svg'} alt={'logo'} width={220} height={56} />
            </div>
            <div className={styles.page}>
              <div className={styles.container}>{children}</div>
            </div>
          </Store>
        </StyledEngineProvider>
      </body>
    </html>
  )
}
