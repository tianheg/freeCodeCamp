// https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-the-css-box-model-by-building-a-rothko-painting/step-45
import Home from '../home';
import styles from './page.module.scss'

export default function RothkoPainting() {
  return (
    <main className={styles.main}>
      <Home />
      <h1><a target="_blank" className={styles.link} href="https://www.nga.gov/features/mark-rothko.html">Mark Rothko</a></h1>
      <div className={styles.frame}>
        <div className={styles.canvas}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
      </div>
    </main>
  )
}
