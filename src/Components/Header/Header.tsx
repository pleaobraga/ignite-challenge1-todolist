import rocketIcon from '../../assets/rocket.svg'

import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={rocketIcon}
        alt="rocket icon"
      />
      <h1>
        <span>to</span>do
      </h1>
    </header>
  )
}
