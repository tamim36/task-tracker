import ProptTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClickFunc = () => {
    console.log('Click Event')
  }  

  return (
    <header className='header'>
        <h1>
            { title }
        </h1>
        <Button onClickProp={onClickFunc} text={'Add'} color={'green'} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.proptTypes = {
    title: ProptTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header