import './Button.css'
import { memo } from 'react'

const Button = memo(({ buttonTitle, className = '', onClick = () => {} }) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonTitle}
    </button>
  )
})

export default Button
