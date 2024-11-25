import './ShowCount.css'

const ShowCount = (props) => {
  return (
    <div className='div-show-count flex-container'>
      <h3>{props.count}</h3>
    </div>
  )
}

export default ShowCount
