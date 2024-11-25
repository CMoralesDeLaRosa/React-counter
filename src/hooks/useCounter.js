import { useState } from 'react'

const useCounter = (initialValue = 0, maxValue = 10) => {
  const [counter, setCounter] = useState(initialValue)
  const [message, setMessage] = useState('')

  const increment = () => {
    if (counter < maxValue) {
      setCounter(counter + 1)
      setMessage('')
    } else {
      setMessage(`El valor no puede ser mayor de ${maxValue}`)
    }
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setMessage('')
    } else {
      setMessage('El valor no puede ser menor de 0')
    }
  }

  const reset = () => {
    setCounter(initialValue)
    setMessage('')
  }

  return { counter, message, increment, decrement, reset }
}

export default useCounter
