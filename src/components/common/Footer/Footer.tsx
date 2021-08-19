import type { FC } from 'react'
import React from 'react'
import { Button, Icon, Input } from '@vtex/store-ui'
import { Facebook, Instagram, Twitter } from 'react-feather'

import { aboutUs } from './Links/AboutUs'
import { customerServices } from './Links/CustomerServices'
import { needHelp } from './Links/NeedHelp'
import * as styles from './Footer.module.css'
import VtexLogo from './VtexLogo'

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

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="flex">
          <Column links={aboutUs} />
          <Column links={needHelp} />
          <Column links={customerServices} />
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
          <div className="w-1/3">Copyright VTEX 2021 @ All rights reserved</div>
          <div className={styles.social}>
            <div className="flex justify-end">
              <Instagram size={16} color="white" className="mr-2" />
              Instagram
            </div>
            <div className={styles.social}>
              <Facebook size={16} color="white" className="mr-2" />
              Facebook
            </div>
            <div className="flex">
              <Twitter size={16} color="white" className="mr-2" />
              Twitter
            </div>
          </div>
          <div className="flex justify-center w-1/3 items-center">
            Powered by
            <Icon component={<VtexLogo />} className="ml-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
