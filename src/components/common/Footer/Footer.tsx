import type { FC } from 'react'
import React from 'react'

import { aboutUs } from './Links/AboutUs'
import { customerServices } from './Links/CustomerServices'
import { needHelp } from './Links/NeedHelp'

interface Link {
  text: string
  to: string
}
interface ColumnProps {
  links: Link[]
}

const Column: FC<ColumnProps> = ({ links }) => {
  return (
    <ul>
      <h2>
        <a href={links[0].to}>{links[0].text}</a>
      </h2>
      {links.slice(1).map((element, idx) => (
        <li key={idx}>
          <a href={element.to}>{element.text}</a>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <footer>
      <Column links={aboutUs} />
      <Column links={needHelp} />
      <Column links={customerServices} />
    </footer>
  )
}

export default Footer
