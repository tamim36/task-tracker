import ProptTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, isAddPress, isFormOpen }) => {
  return (
    <header className='header'>
        <h1>
            { title }
        </h1>
        <Button onClickProp={isAddPress} 
          text={ isFormOpen ? 'Close' : 'Add'} 
          color={ isFormOpen ? 'red' : 'green'} />
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