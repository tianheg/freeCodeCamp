// https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/step-21

import Image from 'next/image'
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
      <header className={styles.header}>
        <h1>Photo Gallery</h1>
      </header>
      <div className={styles.gallery}>
        <Image src='https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6' alt="puppy dog 1" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1447684808650-354ae64db5b8' alt="puppy dog 2" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1507146426996-ef05306b995a' alt="puppy dog 3" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a' alt="puppy dog 4" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1424709746721-b8fd0ff52499' alt="puppy dog 5" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1516843969861-162ea31e8072' alt="puppy dog 6" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1455287278107-115faab3eafa' alt="puppy dog 7" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1518923506605-1a7c167326fd' alt="puppy dog 8" width={300} height={300}/>
        <Image src='https://images.unsplash.com/photo-1610112645245-36020fc0e128' alt="puppy dog 9" width={300} height={300}/>
      </div>
    </main>
  )
}
