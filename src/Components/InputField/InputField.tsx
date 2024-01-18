import { ChangeEvent } from 'react'
import styles from './InputField.module.scss'

interface InputFieldProps {
  value: string
  handleChange: (value: string) => void
  placeholder: string
}

export function InputField({
  value,
  handleChange,
  placeholder,
}: InputFieldProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    handleChange(event.target.value)
  }

  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
