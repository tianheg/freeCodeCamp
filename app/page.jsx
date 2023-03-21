import Link from 'next/link'
import styles from './page.module.scss'

export async function generateMetadata({params}) {
  return {
    title: 'Home | freeCodeCamp projects',
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        free
        <wbr />
        Code
        <wbr />
        Camp projects
      </h1>

      <ul className={styles.projects}>
        <li>
          <Link className={styles.link} href="/01-survey-form">
            01 Survey Form
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/02-rothko-painting">
            02 Rothko Painting
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/03-cafe-menu">
            03 Cafe Menu
          </Link>
        </li>
      </ul>
    </main>
  )
}
