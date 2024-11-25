import './ButtonsCount.css'
import Button from '../Button/Button'

const ButtonsCount = ({ increment, decrement, reset }) => {
  return (
    <div className='div-buttons-count flex-container'>
      <Button buttonTitle='+' className='button-counter' onClick={increment} />
      <Button buttonTitle='-' className='button-counter' onClick={decrement} />
      <Button buttonTitle='Reiniciar' className='button-reset' onClick={reset} />
    </div>
  )
}

export default ButtonsCount
