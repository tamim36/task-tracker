import ProptTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, isAddPress, isFormOpen }) => {
  const location = useLocation()
  
  return (
    <header className='header'>
        <h1>
            { title }
        </h1>
        {
          location.pathname === '/' && <Button onClickProp={isAddPress} 
          text={ isFormOpen ? 'Close' : 'Add'} 
          color={ isFormOpen ? 'red' : 'green'} />
        }
        
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