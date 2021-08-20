import type { FC } from 'react'
import React, { useState } from 'react'
import { Button, Icon } from '@vtex/store-ui'
import { Facebook, Instagram, Twitter } from 'react-feather'

import { aboutUs, customerServices, needHelp } from './Links'
import * as styles from './Footer.module.css'
import VtexLogo from './VtexLogo'
import Cards from './Cards'
import { Newsletter } from './Newsletter'

interface Link {
  text: string
  to: string
}
interface ColumnProps {
  links: Link[]
}

const Column: FC<ColumnProps> = ({ links }) => {
  return (
    <div className={styles.column}>
      <ul>
        <h2 className={styles.heading}>
          <a href={links[0].to}>{links[0].text}</a>
        </h2>
        {links.slice(1).map((element, idx) => (
          <li key={idx}>
            <a href={element.to}>{element.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ColumnMobile: FC<ColumnProps> = ({ links }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)} className={styles.heading}>
        <div className="w-2/3 flex justify-start text-xs">{links[0].text}</div>
        <div className="w-1/3 flex justify-end text-[#979899]">
          {isActive ? '-' : '+'}
        </div>
      </Button>
      <ul>
        {isActive
          ? links.slice(1).map((element, idx) => (
              <li key={idx} className="ml-3">
                <a href={element.to}>{element.text}</a>
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <Newsletter
        className={styles.newsletterContainer}
        id="newsletter-input-mobile"
      />
      <div className={styles.container}>
        <div className={styles.desktopHidden}>
          <ColumnMobile links={aboutUs} />
          <ColumnMobile links={needHelp} />
          <ColumnMobile links={customerServices} />
        </div>
        <div className="flex">
          <div className={styles.mobileHidden}>
            <Column links={aboutUs} />
            <Column links={needHelp} />
            <Column links={customerServices} />
            <Newsletter id="newsletter-input-desktop" />
          </div>
        </div>
        {/* <div className={styles.containerBottom}>
          <Icon component={<Cards />} className="md:hidden w-80 h-8" />
          <div className="flex justify-center mb-3 mt-10 md:my-0 md:justify-start md:w-1/3">
            Copyright VTEX 2021 @ All rights reserved
          </div>
          <div className={styles.social}>
            <div className="flex justify-end">
              <a href="/" aria-label="Instagram icon">
                <Instagram size={16} color="white" className="mr-2" />
              </a>
              <span className={styles.mobileHidden}>Instagram</span>
            </div>
            <div className={styles.social}>
              <a href="/" aria-label="Facebook icon">
                <Facebook size={16} color="white" className="mr-2" />
              </a>
              <span className={styles.mobileHidden}>Facebook</span>
            </div>
            <div className="flex">
              <a href="/" aria-label="Twitter icon">
                <Twitter size={16} color="white" className="mr-2" />
              </a>
              <span className={styles.mobileHidden}>Twitter</span>
            </div>
          </div>
          <div className="hidden justify-center w-1/3 items-center md:flex">
            Powered by
            <a
              href="/"
              aria-label="VTEX logo icon"
              className="ml-2 items-center"
            >
              <Icon component={<VtexLogo />} className="w-14 h-5" />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
