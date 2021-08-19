import type { FC } from 'react'
import React, { useState } from 'react'
import { Button, Icon, Input } from '@vtex/store-ui'
import { Facebook, Instagram, Twitter } from 'react-feather'

import { aboutUs } from './Links/AboutUs'
import { customerServices } from './Links/CustomerServices'
import { needHelp } from './Links/NeedHelp'
import * as styles from './Footer.module.css'
import VtexLogo from './VtexLogo'
import Cards from './Cards'

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
          </div>
          <form>
            <div className={styles.form}>
              Join our newsletter
              <div className={styles.subtitle}>
                Sign up for email updates on the last collections, campaings and
                videos
              </div>
              <div className={styles.input}>
                <Input placeholder="ENTER YOUR EMAIL" />
                <Button>Sign up</Button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.containerBottom}>
          <Icon component={<Cards />} className="md:hidden" />
          <div className="flex justify-center mb-3 mt-10 md:my-0 md:justify-start md:w-1/3">
            Copyright VTEX 2021 @ All rights reserved
          </div>
          <div className={styles.social}>
            <div className="flex justify-end">
              <Instagram size={16} color="white" className="mr-2" />
              <span className={styles.mobileHidden}>Instagram</span>
            </div>
            <div className={styles.social}>
              <Facebook size={16} color="white" className="mr-2" />
              <span className={styles.mobileHidden}>Facebook</span>
            </div>
            <div className="flex">
              <Twitter size={16} color="white" className="mr-2" />
              <span className={styles.mobileHidden}>Twitter</span>
            </div>
          </div>
          <div className="hidden justify-center w-1/3 items-center md:flex">
            Powered by
            <Icon component={<VtexLogo />} className="ml-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
