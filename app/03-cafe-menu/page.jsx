// https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-91

import Image from 'next/image'
import Link from 'next/link'
import Home from '../home'
import getTitle from '@/utils/getTitle'
import styles from './page.module.scss'

export async function generateMetadata({ params }) {
  return {
    title: getTitle(),
  }
}

export default function RothkoPainting() {
  return (
    <main className={styles.main}>
      <Home />

      <div className={styles.menu}>
        <h1 className={styles.title}>CAMPER CAFE</h1>
        <p className={styles.established}>Est. 2020</p>
        <hr />
        <section>
          <h2 className={styles.subtitle}>Coffee</h2>
          <Image
            src="/img/coffee.jpg"
            alt="coffee icon"
            width={51}
            height={44}
            className={styles.icon}
          />
          <article className={styles.item}>
            <p className={styles.flavor}>French Vanilla</p>
            <p className={styles.price}>3.00</p>
          </article>
          <article className={styles.item}>
            <p className={styles.flavor}>Caramel Macchiato</p>
            <p className={styles.price}>3.75</p>
          </article>
          <article className={styles.item}>
            <p className={styles.flavor}>Pumpkin Spice</p>
            <p className={styles.price}>3.50</p>
          </article>
          <article className={styles.item}>
            <p className={styles.flavor}>Hazelnut</p>
            <p className={styles.price}>4.00</p>
          </article>
          <article className={styles.item}>
            <p className={styles.flavor}>Mocha</p>
            <p className={styles.price}>4.50</p>
          </article>
        </section>
        <section>
          <h2 className={styles.subtitle}>Desserts</h2>
          <Image
            src="/img/pie.jpg"
            alt="pie icon"
            width={48}
            height={36}
            className={styles.icon}
          />
          <article className={styles.item}>
            <p className={styles.dessert}>Donut</p>
            <p className={styles.price}>1.50</p>
          </article>
          <article className={styles.item}>
            <p className={styles.dessert}>Cherry Pie</p>
            <p className={styles.price}>2.75</p>
          </article>
          <article className={styles.item}>
            <p className={styles.dessert}>Cheesecake</p>
            <p className={styles.price}>3.00</p>
          </article>
          <article className={styles.item}>
            <p className={styles.dessert}>Cinnamon Roll</p>
            <p className={styles.price}>2.50</p>
          </article>
        </section>

        <hr className={styles.bottomline} />
        <footer className={styles.footer} >
          <p>
            <Link href={'https://www.freecodecamp.org'} target={'_blank'}>
              Visit our website
            </Link>
          </p>
          <p className={styles.address}>123 Free Code Camp Drive</p>
        </footer>
      </div>
    </main>
  )
}
