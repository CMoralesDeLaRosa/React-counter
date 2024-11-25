import './Counter.css'
import useCounter from '../../hooks/useCounter'
import ButtonsCount from '../../components/ButtonsCount/ButtonsCount'
import ShowCount from '../../components/ShowCount/ShowCount'

const Counter = () => {
  const { counter, message, increment, decrement, reset } = useCounter(0, 10)

  return (
    <section id='section-counter' className='flex-container'>
      <article className='article-main-counter flex-container'>
        <ShowCount count={counter} />
        <ButtonsCount
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
      </article>
      <div className='div-warning-message'>
        {message && <p className='warning-message'>{message}</p>}
      </div>
    </section>
  )
}

export default Counter
