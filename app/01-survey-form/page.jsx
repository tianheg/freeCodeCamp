// https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form
import Home from '../home';
import getTitle from '@/utils/getTitle'
import styles from './page.module.scss'

export async function generateMetadata({ params }) {
  return {
    title: getTitle(),
  }
}

export default function SurbeyForm() {
  return (
    <main className={styles.main}>
      <Home />
      <h1 className={styles.title}>A Survey Form about your favorite movies</h1>
      <p className={styles.description}>
        It&#39;s a survey form to collect data about movies.
      </p>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="name" id="name-label">
          Name:{' '}
          <input
            className={[styles.input, styles.name].join(' ')}
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </label>

        <label className={styles.label} htmlFor="email" id="email-label">
          Email:{' '}
          <input
            className={[styles.input, styles.email].join(' ')}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            required
          />
        </label>

        <label className={styles.label} htmlFor="number" id="number-label">
          How many movies have you watched?{' '}
          <input
            className={[styles.input, styles.number].join(' ')}
            id="number"
            name="number"
            type="number"
            placeholder="Enter The number of movies you have watched"
            min="1"
            max="10000"
          />
        </label>

        <p>What&#39;s your favorite movies?</p>
        <select className={styles.dropdown}>
          <option value="">-- Please choose an option --</option>
          <option value="la-la-land">La La Land</option>
          <option value="watchmen">Watchmen</option>
          <option value="the-great-train-robbery">
            The Great Train Robbery
          </option>
        </select>

        <p>What&#39;s Your gender?</p>
        <label className={styles.label} htmlFor="male">
          <input
            className={styles.inline}
            type="radio"
            id="male"
            name="gender"
            value="male"
          />{' '}
          Male
        </label>

        <label className={styles.label} htmlFor="female">
          <input
            className={styles.inline}
            type="radio"
            id="female"
            name="gender"
            value="female"
          />{' '}
          Female
        </label>

        <p>What kind of moves do you like?</p>
        <label className={styles.label} htmlFor="type1">
          <input
            className={styles.inline}
            type="checkbox"
            id="type1"
            name="sf"
            value="Science Fiction"
          />{' '}
          Science Fiction
        </label>

        <label className={styles.label} htmlFor="type2">
          <input
            className={styles.inline}
            type="checkbox"
            id="type2"
            name="co"
            value="Comedy"
          />{' '}
          Comedy
        </label>

        <label className={styles.label} htmlFor="type3">
          <input
            className={styles.inline}
            type="checkbox"
            id="type3"
            name="lo"
            value="Love"
          />{' '}
          Love
        </label>

        <label className={styles.label} htmlFor="textarea">
          You may want to say:
        </label>
        <textarea
          className={styles.textarea}
          id="textarea"
          name="textarea"
          rows="5"
          cols="18"
        ></textarea>
        <button className={styles.submit}>Submit</button>
      </form>
    </main>
  )
}
