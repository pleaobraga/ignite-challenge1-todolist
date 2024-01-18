import styles from './Counter.module.scss'

interface CounterProps {
  title: string
  value: number
  color: 'blue' | 'purple'
}

export function Counter({ title, value, color }: CounterProps) {
  return (
    <div className={styles.counter}>
      <h3 className={color === 'purple' ? styles.textPurple : styles.textBlue}>
        {title}
      </h3>
      <span>{value}</span>
    </div>
  )
}
