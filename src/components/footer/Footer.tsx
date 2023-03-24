import { useMemo } from 'react'
import { footerContent } from './footerContent'
import { ContentItem } from '../../types/types'
import './Footer.css'

function Footer() {
  const links = useMemo(
    () => {
      return footerContent.map((link: ContentItem): JSX.Element =>
        <li className="footer__list-item" key={link.key}>
          <a href={link.href as string} className="footer__link" target="_blank" rel="noreferrer">{link.text}</a>
        </li>
      )
    },
    []
  )

  return (
    <footer className="footer">
      <ul className="footer__list">{links}</ul>
    </footer>
  )
}

export default Footer
