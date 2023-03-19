import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span style={{ fontFamily: inter.style.fontFamily }}>
          freeCodeCamp projects
        </span>
      </h1>

      <ul className={styles.projects}>
        <li>
          <Link className={styles.link} href="/01-survey-form">
            01 Survey Form
          </Link>
        </li>
      </ul>
    </main>
  )
}
